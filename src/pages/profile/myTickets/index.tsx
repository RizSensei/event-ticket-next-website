/* eslint-disable @typescript-eslint/no-explicit-any */
import ProfileLayout from "@@/app/Layout/profile.layout";
import MyTickets from "@@/components/MyTicketsPDF/MyTickets";
import useProfile from "@@/hooks/useProfile";
import { Invoices } from "@@/types/invoices";

const BookedTickets = () => {
  const { fetchAllInvoicesQuery } = useProfile();
  const { data: invoices } = fetchAllInvoicesQuery ?? {};
  return (
    <ProfileLayout>
      <div className="mt-10">
        <div className="flex gap-5 items-center">
          <h1 className="font-semibold text-lg text-gray-800">Your Tickets</h1>
          <hr className="flex-grow" />
        </div>

        <div className="mt-5">
          <div className="flex flex-col gap-1">
            {invoices?.data?.length > 0 ? (
              invoices.data.map((invoice: Invoices) => {
                return (
                  <div
                    key={invoice?.id}
                    className="rounded-md overflow-hidden py-3 px-5 bg-neutral-200"
                  >
                    <div className="flex flex-col divide-y-2 divide-neutral-300 gap-1">
                      <div className="flex gap-2 justify-between">
                        <h1 className="w-full font-semibold text-neutral-900">
                          {invoice?.event?.name}
                        </h1>
                        <MyTickets id={invoice?.id}/>
                      </div>
                      <div className="text-sm grid grid-cols-2 py-1">
                        <h1>Tickets: {invoice?.total_quantity}</h1>
                        <h1>Amount: Rs. {invoice?.total_amount}</h1>
                      </div>
                      <div className="text-sm grid grid-cols-2 py-1">
                        <h1>Purchase Type: {invoice?.purchase_type}</h1>
                        <h1>Payment Method: {invoice?.payment_method}</h1>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1 className="text-center text-neutral-700">No Tickets Bought !</h1>
            )}
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default BookedTickets;
