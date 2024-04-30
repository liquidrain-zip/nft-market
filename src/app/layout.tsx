import "./globals.css";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthProvider";
import { Providers } from "../redux/provider";

export const metadata = {
  title: "NFT Marketplace",
  description: "NFT Marketplace by Shabir",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html className="h-full bg-gray-100">
        <body className="h-full" suppressHydrationWarning={true}>
          <AuthProvider>
            <div className="min-h-full">
              <Navbar />
              <main className="min-h-full bg-white">{children}</main>
            </div>
          </AuthProvider>
        </body>
      </html>
    </Providers>
  );
}
