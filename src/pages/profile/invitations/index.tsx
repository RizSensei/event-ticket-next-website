/* eslint-disable @typescript-eslint/no-explicit-any */
import ProfileLayout from "@@/app/Layout/profile.layout";
import PageLoader from "@@/components/PageLoader/PageLoader";
import useProfile from "@@/hooks/useProfile";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect } from "react";

const InvitationTag = ({ data }: { data: string }) => {
  return (
    <div className="rounded-lg bg-black text-white text-[10px] font-semibold px-2 py-1">
      {data}
    </div>
  );
};

const EventInvitations = () => {
  const { fetchAllEventsInvitation, fetchCustomerProfileQuery } = useProfile();
  const { data: profile, isLoading: profileLoading } =
    fetchCustomerProfileQuery;

  const { data: invitations, isLoading: invitationsLoading } =
    fetchAllEventsInvitation ?? {};

  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["customer-profile"] });
    queryClient.invalidateQueries({ queryKey: ["invoices"] });
  }, [queryClient]);

  if (invitationsLoading || profileLoading) return <PageLoader />;

  return (
    <ProfileLayout profile={profile}>
      <div className="mt-10">
        <div className="flex gap-5 items-center">
          <h1 className="font-semibold text-lg text-dark-black">
            Your Invitations
          </h1>
          <hr className="flex-grow" />
        </div>

        <div className="mt-3">
          <div className="flex flex-col gap-1">
            {invitations?.data.length > 0 ? (
              invitations?.data.map((inv: any) => {
                return (
                  <Link
                    href={`/event/${inv?.id}`}
                    key={inv?.id}
                    className="group rounded-md overflow-hidden py-3 px-5 bg-paragraph"
                  >
                    <div className="flex flex-col divide-y-2 divide-paragraph gap-1">
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center">
                          <h1 className="group-hover:text-dark-black w-full text-sm font-semibold text-dark-black ">
                            {inv?.name}
                          </h1>
                          <InvitationTag data={inv?.status} />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })
            ) : (
              <h1 className="text-center text-grayish-black">No Invitations</h1>
            )}
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default EventInvitations;
