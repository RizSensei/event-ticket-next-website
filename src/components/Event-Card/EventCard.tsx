import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

// interface EventCardProps {
//   key?: number;
//   name?: string;
//   image?: {
//     url?: string;
//   };
//   location?: string;
//   date?: string;
//   price?: number;
// }

const EventCard = (props: { event: { image: string | StaticImport } }) => {
  return (
    <>
      <div className="max-w-md z-0">
        <div className="mb-2">
          <div className="flex justify-between gap-1">
            <div className="flex flex-col gap-1">
              <h1 className="z-10 font-sans text-gray-800 text-base font-semibold leading-5 line-clamp-1">
                Pahenlo Batti Muni Live in Butwal
              </h1>
              <div className="flex gap-1 items-center text-blue font-medium font-sans text-sm">
                <FaLocationDot />
                <span className="text-gray-500">
                  Iclick multi Venue, Lalitpur
                </span>
              </div>
            </div>
            <Popover className="relative">
              <PopoverButton className="font-sans h-max w-max rounded-lg font-medium text-sm focus:outline-none">
                <BsThreeDots />
              </PopoverButton>
              <PopoverPanel anchor="bottom" className="w-max text-sm font-sans flex flex-col divide-y bg-neutral-800 text-white rounded-md overflow-hidden">
                <button className="py-1.5 px-5 hover:bg-neutral-700">Add to favourites</button>
                <button className="py-1.5 px-5 hover:bg-neutral-700">See Details</button>
              </PopoverPanel>
            </Popover>
          </div>
        </div>
        <div className="relative h-96 w-full rounded-md overflow-hidden">
          <Link href={"/event/1"} className="pb-1 bg-red-500">
            <Image
              src={props.event.image}
              alt=""
              height={1550}
              width={1550}
              className="h-full w-full object-cover"
            />
          </Link>
        </div>
        <div className="mt-3 flex flex-col gap-1 text-light-black">
          <p className="font-sans text-xs text-gray-500 line-clamp-2">
            Known for their soulful melodies, thought-provoking lyrics, and
            eclectic fusion of rock, blues, and Nepali folk influences, Pahenlo
            Batti Muni promises an unforgettable live performance. Fans can
            expect to hear their favorite tracks such as Bichitra Tatepate
            Bhitta, and other hits that resonate with the youth of Nepal.
          </p>
        </div>
      </div>
    </>
  );
};

export default EventCard;
