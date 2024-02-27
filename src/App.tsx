"use client";

import Dashboard from "./app/_components/modules/Dashboard";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function App() {
  useEffect(() => {
    emailjs.init("wgi6cGen04bpt-EVb");
  }, []);
  return (
    <main>
      <Dashboard />
    </main>
  );
}
