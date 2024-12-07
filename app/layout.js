"use client"
import Nav from '@/components/navigation'
import "./globals.css";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FinanceContextProvider from '@/lib/store/financeContext';
import AuthContextProvider from '@/lib/store/authContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <AuthContextProvider>
        <FinanceContextProvider>
          <ToastContainer />
          <Nav />
          {children}
        </FinanceContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
