import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import ScrollButtons from "@/components/ScrollingUpButton";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/context/ThemeContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body>
          <ThemeProvider>
            <Header />
            <ScrollButtons />
            <Toaster position="top-right" />
            {children}
            <Footer />
            <SpeedInsights />
            <Analytics />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
