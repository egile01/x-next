import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./component/SideBar";
import News from "./component/News";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "X Clone",
  description: "A X clone of x website built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex justify-between max-w-6xl max-auto'>
          <div>
            <Sidebar/>
          </div>
          <div>{children}</div>
          <div>
            <News/>
          </div>
        </div>
        
        
        
        </body>
    </html>
  );
}
