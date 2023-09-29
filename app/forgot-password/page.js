"use client";
import React, { useEffect } from "react";
import { themeChange } from "theme-change";
import ForgotPassword from "./forgot-password"; // Gantilah dengan path yang sesuai untuk komponen ForgotPassword

export default function Home() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <>
      {/* Ganti dengan halaman yang ingin Anda tampilkan */}
      {/* Contoh menampilkan halaman Login */}
      {/* <Login /> */}
      
      {/* Contoh menampilkan halaman Forgot Password */}
      <ForgotPassword />
    </>
  );
}
