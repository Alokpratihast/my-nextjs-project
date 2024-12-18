
import "./globals.css";
import Navbar from "@/Component/NAvbar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body >
        <div className=" relative w-full flex items-center justify-center   ">
        <Navbar/>
        </div>
        
        {children}
      </body>
    </html>
  );
}
