"use client";
import React from "react";
import { Next13ProgressBar } from "next13-progressbar";
import { ThemeProvider } from "next-themes";


function Providers({ children }: { children: React.ReactNode }) {
  return (
      <ThemeProvider attribute='class'>
        {children}
        <Next13ProgressBar
          height='4px'
          color='#d8deff'
          options={{ showSpinner: true }}
          showOnShallow
        />
      </ThemeProvider>
  );
};

export default Providers;
