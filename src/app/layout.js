import Header from "@/components/Header";
import "./globals.css";
import Providers from "@/app/Providers";
import Navbar from "@/components/Navbar";
export const metadata = {
  title: "IMDB CLone",
  description: "by pranay",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Providers>
        <Header />
          {/* <Navbar /> */}
          <div >
          <main>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
