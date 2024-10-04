import BookingCard from "@@/components/BookingCard/BookingCard";
import useEvents from "@@/hooks/useEvents";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";
import { CiHeart } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

const Event = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { fetchEventDetailQuery } = useEvents({ id:id });
  const { data: event } = fetchEventDetailQuery;
  const { fetchEventTicketTypesQuery } = useEvents({ id:id });
  const { data: ticketType } = fetchEventTicketTypesQuery;

  const handleBooking = () => {
    setIsBookingOpen((prev) => !prev);
  };

  const handleAddToFavourites = () => {
    toast.success("Added to Favourites");
  };

  return (
    <>
      <div className="mt-5">
        <div className="mb-2">
          <div className="flex justify-between gap-1">
            <div className="flex flex-col gap-1">
              <h1 className="z-10 font-sans text-gray-800 text-xl font-semibold leading-5 line-clamp-1">
                {event?.name}
              </h1>
              <div className="flex gap-1 items-center text-blue font-medium font-sans text-sm">
                <FaLocationDot />
                <span className="text-gray-500">
                  {event?.venue_name}, {event?.venue_address}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[500px] w-full rounded-md overflow-hidden">
          <Image
            src={
              "https://cdn.ticketsanjal.com/images/2024/09/22/110110-WhatsApp%20Image%202024-09-22%20at%202.40.12%20PM.jpeg"
            }
            alt=""
            height={1920}
            width={1920}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mt-3">
          <div className="flex justify-end gap-1">
            <button
              onClick={handleAddToFavourites}
              className="px-3 py-2 flex items-center gap-1 text-sm bg-neutral-800 text-white rounded-md"
            >
              <CiHeart />
              <span>Add to Favourites</span>
            </button>
            <button
              onClick={handleBooking}
              className="px-3 py-2 text-sm bg-neutral-900 text-white rounded-md"
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
            {event?.description}
          </p>
        </div>

        <div className="mt-3 flex flex-col gap-1 text-light-black">
          <div className="flex items-center gap-1">
            <h1>Tickets</h1>
            <hr className="flex-grow" />
          </div>
          <div>
            {ticketType?.data && ticketType.data.length > 0 ? (
              ticketType.data.map(
                (
                  type: {
                    name: string;
                    price: string | number;
                    capacity: string | number;
                  },
                  i: number
                ) => {
                  return (
                    <div
                      key={i}
                      className="flex justify-between font-sans text-sm text-gray-500"
                    >
                      <p>
                        {type.name} Tickets x1 Rs.{type.price} /-
                      </p>
                      <p>Capacity: 0/{type.capacity}</p>
                    </div>
                  );
                }
              )
            ) : (
              <p className="font-sans text-sm text-gray-500">
                Tickets Information will be made available soon
              </p>
            )}
          </div>
        </div>

        {/* <div className="mt-3">
          <div className="h-52 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0061359363813!2d85.30015357462807!3d27.717096825062907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18ef67a22d9f%3A0xedf3e2c86d367586!2sPrime%20College!5e0!3m2!1sen!2snp!4v1727539615571!5m2!1sen!2snp"
              loading="lazy"
              className="h-full w-full"
            ></iframe>
          </div>
        </div> */}
      </div>

      {isBookingOpen && (
        <BookingCard
        event={event}
          ticketType={ticketType}
          handleBooking={handleBooking}
          setIsBookingOpen={setIsBookingOpen}
        />
      )}
    </>
  );
};

export default Event;