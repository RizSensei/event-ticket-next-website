import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { HiMiniXMark } from 'react-icons/hi2'

interface BookingCardProps{
    handleBooking: () => void;
    setIsBookingOpen: (isOpen:boolean) => void;
}

const BookingCard = ({handleBooking,setIsBookingOpen}:BookingCardProps) => {
    const [tickets, setTickets] = useState(1);

    const incrementTickets = () => {
      setTickets(prev => prev + 1);
    }
    const decrementTickets = () => {
      setTickets(prev => prev - 1);
    }

    const handlePaymentProceeding = () => {
        toast.success("Payment in process !");
        setIsBookingOpen(false);
    }

  return (
    <div className="z-20 absolute inset-0 bg-black bg-opacity-75 h-full w-full">
    <div className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
      <div className="rounded-md w-[400px] bg-white p-5">
        <div className="flex justify-between items-center">
          <h1 className="font-sans">Continue your booking</h1>
          <button onClick={handleBooking}>
            <HiMiniXMark />
          </button>
        </div>

        <div className="mt-3">
          <h1 className="text-gray-500">Select Ticket Type</h1>
          <div className="mt-1 flex flex-wrap gap-2">
            <button className="text-sm text-blue flex flex-col border border-blue rounded-lg bg-white px-5 py-2">
              <span className="font-sans">General</span>
              <span className="font-bold">Rs. 750</span>
            </button>
            <button className="text-sm text-blue flex flex-col border border-blue rounded-lg bg-white px-5 py-2">
              <span className="font-sans">Premium</span>
              <span className="font-bold">Rs. 1500</span>
            </button>
            <button className="text-sm text-blue flex flex-col border border-blue rounded-lg bg-white px-5 py-2">
              <span className="font-sans">Golden</span>
              <span className="font-bold">Rs. 2250</span>
            </button>
          </div>
        </div>

        <div className="mt-3">
          <div className="bg-blue text-white p-2 rounded-md">
            <div className="flex items-center justify-between w-full">
              <h1 className="font-semibold">General Ticket</h1>

              <div className="flex items-center rounded-sm overflow-hidden bg-white">
                <button onClick={decrementTickets} className="h-10 w-10 flex flex-col items-center justify-center bg-neutral-900 hover:bg-neutral-800">-</button>
                <input type="text" name="" id=""  value={tickets} readOnly className="h-8 w-10 focus:outline-none text-neutral-700 pl-2"/>
                <button onClick={incrementTickets} className="h-10 w-10 flex flex-col items-center justify-center bg-neutral-900 hover:bg-neutral-800">+</button>
              </div>
            </div>
          </div>
          <div className="mt-2 font-sans">
            <h1>Total Price: <span className="font-sans">Rs.3150 /-</span></h1>
          </div>
        </div>

        <div className="mt-5 flex justify-between items-center">
          <button  onClick={handleBooking} className="px-3 py-2 flex items-center gap-1 text-sm bg-neutral-900 text-white rounded-md">
            Cancel
          </button>
          <button onClick={handlePaymentProceeding} className="px-3 py-2 text-sm bg-blue text-white rounded-md">
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BookingCard