import { Event } from "@@/types/events";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
// import AddToFavouritesBtn from "../AddToFavourites/AddToFavouritesBtn";
import { IoCalendarOutline } from "react-icons/io5";
import AttendSeminarBtn from "../AttendSeminar/AttendSeminarBtn";
import BookNowBtn from "../BookNow/BookNowBtn";
import { useQueryClient } from '@tanstack/react-query';

const EventCard = ({ event }: { event: Event; index: number }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  // const [isAttendSeminarModalOpen, setIsAttendSeminarModalOpen] = useState(false);

  const handleBooking = () => {
    setIsBookingOpen((prev) => !prev);
  };
  // const handleAttendSeminarModal = () => {
  //   setIsAttendSeminarModalOpen((prev) => !prev);
  // };
  const dateComponent = (start_date: string, end_date: string) => {
    return (
      <div className="absolute bottom-2 w-full bg-dark-black bg-opacity-80 rounded-lg p-2">
        <div className="flex justify-between gap-4">
          <div className="flex items-center gap-2">
            <IoCalendarOutline className="text-white" />
            <p className="text-sm text-white">
              <label>Start: </label>
              {new Date(start_date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                // year: "numeric",
                hour: "numeric",
                minute: "numeric",
              })}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <IoCalendarOutline className="text-white" />
            <p className="text-sm text-white">
              <label>End: </label>
              {new Date(end_date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                // year: "numeric",
                hour: "numeric",
                minute: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
      // <div className="flex flex-row">
      //   <div className="flex items-center gap-2 bg-blue-100 p-2 rounded-lg shadow-sm">
      //     <IoCalendarOutline className="text-blue-500" />
      //     <div>
      //       <p className="text-xs text-paragraph">
      //         Start Date:
      //         {start_date !== undefined &&
      //           new Date(start_date).toLocaleDateString("en-US", {
      //             day: "numeric",
      //             month: "short",
      //             year: "numeric",
      //           })}
      //       </p>
      //       {/* <p className="font-medium text-gray-700">
      //         {start_date !== undefined &&
      //           new Date(start_date).toLocaleDateString("en-US", {
      //             day: "numeric",
      //             month: "short",
      //             year: "numeric",
      //           })}
      //       </p> */}
      //     </div>
      //   </div>

      //   <div className="flex items-center gap-2  p-2 rounded-lg shadow-sm">
      //     <IoCalendarOutline className="text-error" />
      //     <div>
      //       <p className="text-xs text-paragraph">
      //         End Date:
      //         {end_date !== undefined &&
      //           new Date(end_date).toLocaleDateString("en-US", {
      //             day: "numeric",
      //             month: "short",
      //             year: "numeric",
      //           })}
      //       </p>
      //       {/* <p className="font-medium text-gray-700">
      //         {end_date !== undefined &&
      //           new Date(end_date).toLocaleDateString("en-US", {
      //             day: "numeric",
      //             month: "short",
      //             year: "numeric",
      //           })}
      //       </p> */}
      //     </div>
      //   </div>
      // </div>
    );
  };

  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["events-invitaions"] });
  }, [queryClient]);

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-md w-full overflow-hidden">
        <div className="mb-2">
          <div className="flex justify-between gap-1">
            <div className="flex flex-col gap-1">
              <h1 className="z-10 font-sans text-dark-black text-base font-semibold leading-5 line-clamp-1">
                {event.name}
              </h1>
              <div className="flex gap-1 items-center text-dark-black font-medium font-sans text-sm">
                <FaLocationDot />
                <span className="text-paragraph">
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
                className="w-max text-sm font-sans flex flex-col divide-y bg-dark-black text-white rounded-md overflow-hidden"
              >
                <button className="py-1.5 px-5 hover:bg-grayish-black">
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
                {/* <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 rounded-lg p-2">
                  <div className="flex gap-4 items-center text-white">
                    <div className="flex items-center gap-2">
                      <IoCalendarOutline className="text-blue-400" />
                      <p className="text-sm">
                        {new Date(event.start_date).toLocaleDateString(
                          "en-US",
                          {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          }
                        )}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <IoCalendarOutline className="text-red-400" />
                      <p className="text-sm">
                        {new Date(event.end_date).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </div> */}
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
            {dateComponent(event.start_date, event.end_date)}
          </Link>
        </div>
        <div className="mt-3">
          <div className="flex justify-end gap-1">
            {/* add to favourites button  */}
            {/* <AddToFavouritesBtn /> */}
            {event?.category?.is_seminar ? (
              <AttendSeminarBtn
                id={event?.id}
              />
            ) : (
              <BookNowBtn
                id={event?.id}
                handleBooking={handleBooking}
                isBookingOpen={isBookingOpen}
                setIsBookingOpen={setIsBookingOpen}
              />
            )}
          </div>
        </div>
        <div className="mt-3 flex flex-col gap-1 text-light-black">
          <p className="font-sans text-xs text-paragraph line-clamp-2">
            {event.description ?? ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
