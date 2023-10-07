"use client";

import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext, useEffect, useState } from "react";

export default function ThemeProvider({ children }) {
  const { theme } = useContext(ThemeContext);
  //เพราะใช้ localStorage อาจมีปัญหาในบาง browser จึงต้องเช็ค component ว่า ถูก mounted หรือไม่
  const [mounted, setMounted] = useState(false); 

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
}
