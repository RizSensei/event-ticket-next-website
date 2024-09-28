import Image from "next/image";
import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";

const Event = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const handleBooking = () => {
    setIsBookingOpen((prev) => !prev);
  };

  return (
    <>
      <div className="mt-5">
        <div className="mb-2">
          <div className="flex justify-between gap-1">
            <div className="flex flex-col gap-1">
              <h1 className="z-10 font-sans text-gray-800 text-xl font-semibold leading-5 line-clamp-1">
                Pahenlo Batti Muni Live in Butwal
              </h1>
              <div className="flex gap-1 items-center text-blue font-medium font-sans text-sm">
                <FaLocationDot />
                <span className="text-gray-500">
                  Iclick multi Venue, Lalitpur
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-96 w-full rounded-md overflow-hidden">
          <Image
            src={
              "https://cdn.ticketsanjal.com/images/2024/09/22/110110-WhatsApp%20Image%202024-09-22%20at%202.40.12%20PM.jpeg"
            }
            alt=""
            height={1550}
            width={1550}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mt-3">
          <div className="flex justify-end gap-1">
            <button className="px-3 py-2 flex items-center gap-1 text-sm bg-neutral-900 text-white rounded-md">
              <CiHeart />
              <span>Add to Favourites</span>
            </button>
            <button
              onClick={handleBooking}
              className="px-3 py-2 text-sm bg-blue text-white rounded-md"
            >
              Book Now
            </button>
          </div>
        </div>

        <div className="mt-3 flex flex-col gap-1 text-light-black">
          <div className="flex items-center gap-1">
            <h1>Organizer</h1>
            <hr className="flex-grow" />
          </div>
          <p className="font-sans text-sm text-gray-500">Kharba Pvt. Ltd</p>
        </div>

        <div className="mt-3 flex flex-col gap-1 text-light-black">
          <div className="flex items-center gap-1">
            <h1>Description</h1>
            <hr className="flex-grow" />
          </div>
          <p className="font-sans text-sm text-gray-500">
            Known for their soulful melodies, thought-provoking lyrics, and
            eclectic fusion of rock, blues, and Nepali folk influences, Pahenlo
            Batti Muni promises an unforgettable live performance. Fans can
            expect to hear their favorite tracks such as Bichitra Tatepate
            Bhitta, and other hits that resonate with the youth of Nepal.
          </p>
        </div>

        <div className="mt-3">
          <div className="h-52 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0061359363813!2d85.30015357462807!3d27.717096825062907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18ef67a22d9f%3A0xedf3e2c86d367586!2sPrime%20College!5e0!3m2!1sen!2snp!4v1727539615571!5m2!1sen!2snp"
              loading="lazy"
              className="h-full w-full"
            ></iframe>
          </div>
        </div>
      </div>

      {isBookingOpen && (
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
                      <button className="h-10 w-10 flex flex-col items-center justify-center bg-neutral-900 hover:bg-neutral-800">-</button>
                      <input type="text" name="" id=""  value="1" className="h-8 w-10 focus:outline-none text-neutral-700 pl-4"/>
                      <button className="h-10 w-10 flex flex-col items-center justify-center bg-neutral-900 hover:bg-neutral-800">+</button>
                    </div>
                  </div>
                </div>
                <div className="mt-2 font-sans">
                  <h1>Total Price: <span className="font-sans">Rs.3150 /-</span></h1>
                </div>
              </div>

              <div className="mt-5 flex justify-between items-center">
                <button className="px-3 py-2 flex items-center gap-1 text-sm bg-neutral-900 text-white rounded-md">
                  Cancel
                </button>
                <button className="px-3 py-2 text-sm bg-blue text-white rounded-md">
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Event;
