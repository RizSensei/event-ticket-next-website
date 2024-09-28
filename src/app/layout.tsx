import localFont from "next/font/local";
import "./globals.css";
import PageLayout from "./page.layout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageLayout title="Mero Ticket" description="">
      <div
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen h-full w-full bg-white`}
      >
        {children}
      </div>

    </PageLayout>
  );
}
