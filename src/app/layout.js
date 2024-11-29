import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import AudioPlayer from "@/components/audio-player/AudioPlayer";

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

export const metadata = {
  title: "Mziki Moto Music Streaming Application",
  description: "Modern Music streaming Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex h-screen bg-primary text-text">
          {/* Sidebar */}
          <aside className="w-[230px] bg-secondary fixed mt-[60px] ">
            <Sidebar />
          </aside>

          {/* Main content wrapper */}
          <div className="flex flex-col flex-grow ml-[230px]">
            {/* Header */}
            <header className="fixed w-full  top-0 left-0  bg-primary shadow z-10">
              <Header />
            </header>

            {/* Scrollable content */}
            <main className="mt-[60px] p-4 overflow-y-auto flex-grow pb-[125px]">
              {children}
            </main>
          </div>

          <AudioPlayer />
        </div>
      </body>
    </html>
  );
}
