/* eslint-disable @typescript-eslint/no-explicit-any */
import useEvents from "@@/hooks/useEvents";
import useTickets from "@@/hooks/useTickets";
import { Event } from "@@/types/events";
import { TicketType } from "@@/types/ticketType";
import { Formik, Form, FormikHelpers } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { HiMiniXMark } from "react-icons/hi2";

interface BookingCardProps {
  handleBooking: () => void;
  setIsBookingOpen: (isOpen: boolean) => void;
  ticketType: TicketType | undefined;
  event: Event | undefined;
}

const BookingCard = ({
  handleBooking,
  ticketType,
  event,
}: BookingCardProps) => {
  const [selectedTicketType, setSelectedTicketType] = useState<any>({});

  const { fetchTicketTypeQuery } = useEvents({ id: selectedTicketType.id });
  const { data } = fetchTicketTypeQuery;
  const { bookTicketsMutation } = useTickets();

  const handleTicketType = (type: any) => setSelectedTicketType(type || {});
  const isSelected = (value: string) => selectedTicketType.name === value;

  const handleClearData = (resetForm: () => void) => {
    setSelectedTicketType({});
    resetForm();
  };

  const handleSubmit = async (
    values: any,
    { setFieldError, resetForm }: FormikHelpers<any>
  ) => {
    try {
      await bookTicketsMutation.mutateAsync(
        {
          eventId: event?.id,
          data: values,
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
    payment_method: "eSewa",
  };

  return (
    <div className="z-20 absolute inset-0 bg-black bg-opacity-75 h-full w-full">
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
          <div className="mt-3">
            <h1 className="text-gray-500">Select Ticket Type</h1>
            <div className="mt-1 flex flex-wrap gap-2">
              {ticketType?.data?.length ? (
                ticketType.data.map((type: any, i: number) => (
                  <button
                    key={i}
                    onClick={() => handleTicketType(type)}
                    className={`text-sm flex flex-col border rounded-lg px-5 py-2 ${
                      isSelected(type.name)
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
                  <div className="mt-3">
                    <div className="bg-neutral-800 text-white p-2 rounded-md">
                      <div className="flex items-center justify-between w-full">
                        <h1 className="font-semibold">{data.name} Ticket</h1>
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
                            className="h-10 w-10 bg-neutral-900 hover:bg-neutral-800 text-white flex items-center justify-center"
                          >
                            -
                          </button>
                          <input
                            type="text"
                            value={values.quantity}
                            readOnly
                            className="w-10 text-center text-neutral-700 bg-white"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setFieldValue("quantity", values.quantity + 1)
                            }
                            className="h-10 w-10 bg-neutral-900 hover:bg-neutral-800 text-white flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <h1>Total Price: Rs. {data.price * values.quantity}/-</h1>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="mt-5 flex justify-between items-center">
                  <div className="flex gap-1">
                    <button
                      type="button"
                      onClick={() => handleClearData(resetForm)}
                      className="px-3 py-2 bg-neutral-900 text-white rounded-md"
                    >
                      Clear
                    </button>
                    <button
                      type="button"
                      onClick={handleBooking}
                      className="px-3 py-2 bg-neutral-900 text-white rounded-md"
                    >
                      Cancel
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="px-3 py-2 bg-neutral-900 text-white rounded-md"
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
