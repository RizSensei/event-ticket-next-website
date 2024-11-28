/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthContext } from "@@/context/AuthContext";
import useTickets from "@@/hooks/useTickets";
import { Event } from "@@/types/events";
import { TicketType } from "@@/types/ticketType";
import { Form, Formik, FormikHelpers } from "formik";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { HiMiniXMark } from "react-icons/hi2";
import ModalLayout from "../Modal/ModalLayout";

interface BookingCardProps {
  handleBooking: () => void;
  setIsBookingOpen: (isOpen: boolean) => void;
  ticketType: TicketType[] | undefined;
  event: Event | undefined;
}

const BookingCard = ({
  handleBooking,
  setIsBookingOpen,
  ticketType,
  event,
}: BookingCardProps) => {
  const router = useRouter();
  const { isAuthenticated } = useContext(AuthContext);
  const [selectedTicketType, setSelectedTicketType] = useState<any>({});
  const [selectedPayMethod, setSelectedPayMethod] = useState<any>("");

  // slice date
  const event_date = event?.start_date;
  const date = event_date?.toString().split("T")[0];

  const { fetchTicketTypeQuery, bookTicketsMutation } = useTickets({
    id: selectedTicketType.id,
  });
  const { data } = fetchTicketTypeQuery;

  useEffect(() => {
    if (ticketType?.length) {
      setSelectedTicketType(ticketType[0]);
    }
  }, [ticketType]);

  const handleTicketType = (type: TicketType) =>
    setSelectedTicketType(type || {});

  const handlePayMethod = (pay_type: any) =>
    setSelectedPayMethod(pay_type || "");

  const isSelectedTicketType = (value: string) =>
    selectedTicketType.name === value;
  const isSelectedPayMethod = (value: string) => selectedPayMethod === value;

  const handleClearData = (resetForm: () => void) => {
    setSelectedTicketType({});
    setSelectedPayMethod("");
    resetForm();
  };

  const handleSubmit = async (
    values: any,
    {
      //  setFieldError,
      resetForm,
    }: FormikHelpers<any>
  ) => {
    if (!isAuthenticated) {
      toast.error("Please login first to book tickets!");
      return;
    }

    const extendedValues = {
      ...values,
      payment_method: selectedPayMethod,
    };
    try {
      await bookTicketsMutation.mutateAsync(
        {
          eventId: event?.id,
          data: extendedValues,
        },
        {
          onSuccess: () => {
            resetForm();
            toast.success("Tickets successfully booked!");
            setIsBookingOpen(false);
            router.push("/profile/myTickets");
          },
          onError: (error: any) => {
            const errors = error?.response?.data || {};
            console.log(errors);

            if (errors.errors && typeof errors.errors === "object") {
              Object.entries(errors.errors).forEach(([key, value]) => {
                console.log("error:", key);
                toast.error(String(value));
              });
            } else {
              toast.error("An unexpected error occurred.");
            }
          },
        }
      );
    } catch (err) {
      console.error("Unhandled exception:", err);
    }
  };

  const initialValues = {
    ticket_type: data?.id,
    visiting_date: date,
    quantity: 1,
    purchase_type: "Online",
  };

  return (
    <ModalLayout>
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="font-sans">Continue your booking</h1>
        <button onClick={handleBooking}>
          <HiMiniXMark />
        </button>
      </div>

      {/* Ticket Type Selection */}
      <div className="">
        <h1 className="text-dark-black text-lg font-semibold">
          {event?.name}
        </h1>
        <h1 className="text-paragraph text-sm mt-2">Select Ticket Type</h1>
        <div className="mt-1 flex flex-wrap gap-2">
          {ticketType?.length ? (
            ticketType?.map((type: any, i: number) => (
              <button
                key={i}
                onClick={() => handleTicketType(type)}
                className={`text-sm flex flex-col border rounded-lg px-5 py-2 ${
                  isSelectedTicketType(type.name)
                    ? "bg-dark-black text-white"
                    : "text-dark-black bg-white hover:bg-dark-black hover:text-white"
                }`}
              >
                <span className="font-sans">{type.name}</span>
                <span className="font-bold">Rs. {type.price}</span>
              </button>
            ))
          ) : (
            <p className="text-sm text-grayish-black">
              Tickets Information will be made available soon
            </p>
          )}
        </div>
      </div>

      {/* Formik Form */}
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ values, setFieldValue, resetForm }) => (
          <Form>
            {selectedTicketType.name && data && (
              <>
                <div className="mt-3">
                  <div className="bg-dark-black text-white p-2 rounded-md">
                    <div className="flex items-center justify-between w-full">
                      <h1 className="font-semibold text-sm">
                        {data.name} Ticket
                      </h1>
                      <div className="flex items-center overflow-hidden bg-white">
                        <button
                          type="button"
                          onClick={() =>
                            setFieldValue(
                              "quantity",
                              Math.max(1, values.quantity - 1)
                            )
                          }
                          disabled={values.quantity <= 1}
                          className="h-8 w-8 bg-dark-black hover:bg-dark-black text-white flex items-center justify-center"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          value={values.quantity}
                          readOnly
                          className="w-8 text-sm  text-center text-grayish-black bg-white"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setFieldValue("quantity", values.quantity + 1)
                          }
                          className="h-8 w-8 bg-dark-black hover:bg-dark-black text-white flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <h1 className="text-sm">
                      Total Price: Rs. {data.price * values.quantity}/-
                    </h1>
                  </div>
                </div>

                <div className="mt-2">
                  <h1 className="text-paragraph text-sm mt-2">
                    Select Visitng Date
                  </h1>
                  <div>
                    <input
                      type="date"
                      name="visiting_date"
                      id=""
                      value={values.visiting_date}
                      onChange={(e) =>
                        setFieldValue("visiting_date", e.target.value)
                      }
                      className="h-full border border-paragraph"
                    />
                  </div>
                </div>

                <div className="mt-2">
                  <h1 className="text-paragraph text-sm mt-2">
                    Select Payment Method
                  </h1>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {["eSewa", "Fonepay", "IME Pay", "Cash"].map((payment) => {
                      return (
                        <button
                          key={payment}
                          type="button"
                          onClick={() => handlePayMethod(payment)}
                          className={`px-2 py-1 border rounded-lg text-sm ${
                            isSelectedPayMethod(payment)
                              ? "bg-dark-black text-white"
                              : "text-dark-black bg-white hover:bg-dark-black hover:text-white"
                          }`}
                        >
                          {payment}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </>
            )}

            {/* Action Buttons */}
            <div className="mt-5 text-sm flex justify-between items-center">
              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={handleBooking}
                  className="px-3 py-1.5 border border-dark-black text-dark-black rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => handleClearData(resetForm)}
                  className="px-3 py-1.5 border border-dark-black text-dark-black rounded-md"
                >
                  Clear
                </button>
              </div>
              <button
                type="submit"
                className="px-3 py-1.5 bg-dark-black text-white rounded-md"
              >
                Book
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </ModalLayout>
  );
};

export default BookingCard;
