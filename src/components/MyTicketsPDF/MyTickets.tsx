/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Logo from "@/images/logo/logo.png";
import useInvoice from "@@/hooks/useInvoice";
import { Invoices } from "@@/types/invoices";
import { Tickets } from "@@/types/tickets";
import {
  Document,
  Image,
  Page,
  PDFDownloadLink,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { useState } from "react";
import { IoMdDownload } from "react-icons/io";
import QRCode from "react-qr-code";

// Create the PDF document component
const MyDocument = ({ invoiceData }: {invoiceData:Invoices}) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.grid}>
          {invoiceData?.tickets?.map((ticket: Tickets) =>{
            const dateTime = invoiceData?.event?.start_date;
            const date = dateTime &&  new Date(dateTime).toISOString().split('T')[0];
            return (
            <View key={invoiceData?.id} style={styles.card}>
              <Image src={Logo.src} style={styles.logo} />
              <View style={styles.justifyFlexGrid}>
                <View>
                  <View style={styles.flexGrid}>
                    <Text>Event:</Text>
                    <Text style={styles.label}>{invoiceData?.event?.name}</Text>
                  </View>
                  <View style={styles.flexGrid}>
                    <Text>Event Date:</Text>
                    <Text style={styles.label}>
                      {date}
                    </Text>
                  </View>
                  <View style={styles.flexGrid}>
                    <Text>Venue:</Text>
                    <Text style={styles.label}>
                      {invoiceData?.event?.venue_name},
                      {invoiceData?.event?.venue_address}
                    </Text>
                  </View>
                  <hr style={{ margin: "5px 0" }} />
                  <View style={styles.flexGrid}>
                    <Text>Ticket Type:</Text>
                    <Text style={styles.label}>
                      {ticket?.ticket_type?.name}
                    </Text>
                  </View>
                  <View style={styles.flexGrid}>
                    <Text>Ticket Price:</Text>
                    <Text style={styles.label}>
                      Rs. {ticket?.ticket_type?.price}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    height: 64, // Fixed height
                    width: 64, // Fixed width
                    margin: "0 auto",
                    display: "flex",
                    justifyContent: "center", // Center the QR code
                    alignItems: "center", // Center the QR code
                  }}
                >
                  <QRCode
                    size={64} // Size of the QR code (this should match the container size)
                    value={
                      ticket?.ticket_code
                        ? ticket.ticket_code.toString()
                        : "N/A"
                    }
                    viewBox={`0 0 128 128`}
                  />
                </View>
              </View>
            </View>
          )})}
          <View style={styles.justifyFlexGrid}>
            <View style={styles.flexGrid}>
              <Text>Total Tickets:</Text>
              <Text style={styles.label}>{invoiceData?.total_quantity}</Text>
            </View>
            <View style={styles.flexGrid}>
              <Text>Total Amount:</Text>
              <Text style={styles.label}>Rs. {invoiceData?.total_amount}</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

// Define styles for the PDF
const styles = StyleSheet.create({
  page: {
    padding: 10,
    fontSize: "10px",
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  logo: {
    width: 75,
    height: 25,
    marginBottom: 10,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "5px", 
  },
  flexGrid: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  justifyFlexGrid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10
  },
  label: {
    fontWeight: "bold",
  },
  card: {
    padding: "5px",
    paddingBottom: "10px",
    borderBottom: "1px dotted black",
    maxWidth: "480px",
    width: "100%",
  },
});

// PDF Viewer Component
const PDFViewer = ({ onClose, invoiceData }: {onClose : () => void, invoiceData: Invoices}) => {
  return (
    <div className="z-20 fixed inset-0 bg-white h-screen w-full overflow-y-scroll no-scrollbar">
  <div className="relative bg-white max-w-lg mx-auto my-10 w-full p-4">
    <MyDocument invoiceData={invoiceData} />

    <div className="flex justify-center gap-2 mt-4">
      <button
        onClick={onClose}
        className="text-sm bg-neutral-700 text-white px-2 py-2 rounded-md"
      >
        Close Preview
      </button>
      <PDFDownloadLink
        document={<MyDocument invoiceData={invoiceData} />}
        fileName="my-document.pdf"
        className="text-sm bg-neutral-900 text-white px-2 py-2 rounded-md"
      >
        Download PDF
      </PDFDownloadLink>
    </div>
  </div>
</div>

  );
};

// Main Component
const MyTickets = ({ id }: { id: string | undefined }) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handlePreviewOpen = () => {
    setIsPreviewOpen(true);
  };

  const handlePreviewClose = () => {
    setIsPreviewOpen(false);
  };

  const { fetchInvoiceDetailQuery } = useInvoice({ id });
  const { data: invoice } = fetchInvoiceDetailQuery;

  return (
    <div>
      <button onClick={handlePreviewOpen}>
        <IoMdDownload />
      </button>

      {isPreviewOpen && (
        <PDFViewer onClose={handlePreviewClose} invoiceData={invoice} />
      )}
    </div>
  );
};

export default MyTickets;
