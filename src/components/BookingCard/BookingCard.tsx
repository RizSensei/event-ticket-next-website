/* eslint-disable @typescript-eslint/no-explicit-any */
import useTickets from "@@/hooks/useTickets";
import { Event } from "@@/types/events";
import { TicketType } from "@@/types/ticketType";
import { Form, Formik, FormikHelpers } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import { HiMiniXMark } from "react-icons/hi2";

interface BookingCardProps {
  handleBooking: () => void;
  setIsBookingOpen: (isOpen: boolean) => void;
  ticketType: TicketType[] | undefined;
  event: Event | undefined;
}

const BookingCard = ({
  handleBooking,
  ticketType,
  event,
}: BookingCardProps) => {
  const [selectedTicketType, setSelectedTicketType] = useState<any>({});
  const [selectedPayMethod, setSelectedPayMethod] = useState<any>("");

  // const { fetchTicketTypeQuery } = useEvents({ id: selectedTicketType.id });
  const { fetchTicketTypeQuery, bookTicketsMutation } = useTickets({
    id: selectedTicketType.id,
  });
  const { data } = fetchTicketTypeQuery;

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
    { setFieldError, resetForm }: FormikHelpers<any>
  ) => {
    const extendedValues = {
      ...values,
      payment_method: selectedPayMethod,
    };
    console.log(extendedValues);
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
          },
          onError: (error: any) => {
            const errors = error.response?.data?.errors || {};
            Object.entries(errors).forEach(([key, value]) =>
              setFieldError(key, value?.toString())
            );
          },
        }
      );
    } catch (err) {
      console.error("Unhandled exception:", err);
    }
  };

  const initialValues = {
    ticket_type: data?.id,
    visiting_date: "2025-01-01",
    quantity: 1,
    purchase_type: "Online",
  };

  return (
    <div className="z-[9999] absolute inset-0 bg-black bg-opacity-75 h-full w-full">
      <div className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <div className="rounded-md w-[400px] bg-white p-5">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="font-sans">Continue your booking</h1>
            <button onClick={handleBooking}>
              <HiMiniXMark />
            </button>
          </div>

          {/* Ticket Type Selection */}
          <div className="">
            <h1 className="text-neutral-800 text-lg font-semibold">
              {event?.name}
            </h1>
            <h1 className="text-gray-500 text-sm mt-2">Select Ticket Type</h1>
            <div className="mt-1 flex flex-wrap gap-2">
              {ticketType?.length ? (
                ticketType?.map((type: any, i: number) => (
                  <button
                    key={i}
                    onClick={() => handleTicketType(type)}
                    className={`text-sm flex flex-col border rounded-lg px-5 py-2 ${
                      isSelectedTicketType(type.name)
                        ? "bg-neutral-800 text-white"
                        : "text-neutral-800 bg-white hover:bg-neutral-800 hover:text-white"
                    }`}
                  >
                    <span className="font-sans">{type.name}</span>
                    <span className="font-bold">Rs. {type.price}</span>
                  </button>
                ))
              ) : (
                <p className="text-sm text-neutral-700">
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
            {({ values, isSubmitting, setFieldValue, resetForm }) => (
              <Form>
                {selectedTicketType.name && data && (
                  <>
                    <div className="mt-3">
                      <div className="bg-neutral-800 text-white p-2 rounded-md">
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
                              className="h-8 w-8 bg-neutral-900 hover:bg-neutral-800 text-white flex items-center justify-center"
                            >
                              -
                            </button>
                            <input
                              type="text"
                              value={values.quantity}
                              readOnly
                              className="w-8 text-sm  text-center text-neutral-700 bg-white"
                            />
                            <button
                              type="button"
                              onClick={() =>
                                setFieldValue("quantity", values.quantity + 1)
                              }
                              className="h-8 w-8 bg-neutral-900 hover:bg-neutral-800 text-white flex items-center justify-center"
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
                      <h1 className="text-gray-500 text-sm mt-2">
                        Select Payment Method
                      </h1>
                      <div className="mt-1 flex flex-wrap gap-2">
                        {["eSewa", "Fonepay", "IME Pay"].map((payment) => {
                          return (
                            <button
                              key={payment}
                              type="button"
                              onClick={() => handlePayMethod(payment)}
                              className={`px-2 py-1 border rounded-lg text-sm ${
                                isSelectedPayMethod(payment)
                                  ? "bg-neutral-800 text-white"
                                  : "text-neutral-800 bg-white hover:bg-neutral-800 hover:text-white"
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
                      onClick={() => handleClearData(resetForm)}
                      className="px-3 py-1.5 bg-neutral-900 text-white rounded-md"
                    >
                      Clear
                    </button>
                    <button
                      type="button"
                      onClick={handleBooking}
                      className="px-3 py-1.5 bg-neutral-900 text-white rounded-md"
                    >
                      Cancel
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="px-3 py-1.5 bg-neutral-900 text-white rounded-md"
                  >
                    {isSubmitting ? "Submitting" : "Book"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
