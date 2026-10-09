import "./globals.css";
import { AppProvider } from "../components/AppProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "FITLOG — Workout Library",
  description: "Train with intent. Log every set.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster position="bottom-right" toastOptions={{
            style: { background: "#1b1e25", color: "#f4f5f7", border: "1px solid #343844" },
            success: { iconTheme: { primary: "#ccff00", secondary: "#0b0c0f" } }
          }} />
        </AppProvider>
      </body>
    </html>
  );
}
