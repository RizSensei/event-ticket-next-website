import { Event } from "@@/types/events";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
// import AddToFavouritesBtn from "../AddToFavourites/AddToFavouritesBtn";
import BookNowBtn from "../BookNow/BookNowBtn";

const imageUrls = [
  "https://cdn.ticketsanjal.com/images/2024/08/12/124147-MADHYAPUR_MUSIC_FEST_FINAL1%20(1).jpg",
  "https://cdn.ticketsanjal.com/images/2024/09/16/105420-Dashain%20Night.jpg",
  "https://cdn.ticketsanjal.com/images/2024/07/01/042945-WhatsApp%20Image%202024-07-01%20at%2010.14.02%20PM.jpeg",
  "https://cdn.ticketsanjal.com/images/2024/06/09/052110-CLASH%20OF%20DANCERS%20(1).png",
  "https://cdn.ticketsanjal.com/images/2024/05/27/082938-Mid-Bhaktapur%20Music%20Fest%20(3).png",
  "https://cdn.ticketsanjal.com/images/2023/11/28/094549-Kaal%20.png",
  "https://cdn.ticketsanjal.com/images/2024/08/12/124147-MADHYAPUR_MUSIC_FEST_FINAL1%20(1).jpg",
  "https://cdn.ticketsanjal.com/images/2024/09/16/105420-Dashain%20Night.jpg",
  "https://cdn.ticketsanjal.com/images/2024/07/01/042945-WhatsApp%20Image%202024-07-01%20at%2010.14.02%20PM.jpeg",
  "https://cdn.ticketsanjal.com/images/2024/06/09/052110-CLASH%20OF%20DANCERS%20(1).png",
  "https://cdn.ticketsanjal.com/images/2024/05/27/082938-Mid-Bhaktapur%20Music%20Fest%20(3).png",
  "https://cdn.ticketsanjal.com/images/2023/11/28/094549-Kaal%20.png",
];

const EventCard = ({ event, index }: { event: Event; index: number }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const handleBooking = () => {
    setIsBookingOpen((prev) => !prev);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-md w-full overflow-hidden">
        <div className="mb-2">
          <div className="flex justify-between gap-1">
            <div className="flex flex-col gap-1">
              <h1 className="z-10 font-sans text-gray-800 text-base font-semibold leading-5 line-clamp-1">
                {event.name}
              </h1>
              <div className="flex gap-1 items-center text-blue font-medium font-sans text-sm">
                <FaLocationDot />
                <span className="text-gray-500">
                  {event.venue_name}, {event.venue_address}
                </span>
              </div>
            </div>
            <Popover className="relative">
              <PopoverButton className="font-sans h-max w-max rounded-lg font-medium text-sm focus:outline-none">
                <BsThreeDots />
              </PopoverButton>
              <PopoverPanel
                anchor="bottom"
                className="w-max text-sm font-sans flex flex-col divide-y bg-neutral-800 text-white rounded-md overflow-hidden"
              >
                <button className="py-1.5 px-5 hover:bg-neutral-700">
                  See Details
                </button>
              </PopoverPanel>
            </Popover>
          </div>
        </div>
        <div className="relative h-96 w-full rounded-md overflow-hidden">
          <Link href={`/event/${event.id}`} className="pb-1 grow-0 -z-10">
            {event?.banner_photo ? (
              <>
                <Image
                  src={event?.banner_photo}
                  alt=""
                  height={1550}
                  width={1550}
                  className="h-full w-full object-cover"
                />
              </>
            ) : (
              <Image
                src={"/images/logo/logo.png"}
                alt=""
                height={1550}
                width={1550}
                className="h-full w-50 object-contain grayscale opacity-10"
              />
            )}
          </Link>
        </div>
        <div className="mt-3">
          <div className="flex justify-end gap-1">
            {/* add to favourites button  */}
            {/* <AddToFavouritesBtn /> */}
            <BookNowBtn
              id={event?.id}
              handleBooking={handleBooking}
              isBookingOpen={isBookingOpen}
              setIsBookingOpen={setIsBookingOpen}
            />
          </div>
        </div>
        <div className="mt-3 flex flex-col gap-1 text-light-black">
          <p className="font-sans text-xs text-gray-500 line-clamp-2">
            {event.description ??
              `
  Known for their soulful melodies, thought-provoking lyrics, and
  eclectic fusion of rock, blues, and Nepali folk influences, Pahenlo
  Batti Muni promises an unforgettable live performance. Fans can
  expect to hear their favorite tracks such as Bichitra Tatepate
  Bhitta, and other hits that resonate with the youth of Nepal.
`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
