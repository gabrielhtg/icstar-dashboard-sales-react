"use client";

import { useEffect } from "react";
import Login from "./Login";
import { themeChange } from "theme-change";


export default function Home() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <>
      <Login />
    </>
  );
}
