'use client';

import React, { createContext, useContext, useState } from 'react';

interface AppType {
  progress: number;
  setProgress: (value: number) => void;
}

const AppContext = createContext<AppType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [progress, setProgress] = useState<number>(0);

  const updateProgress = (value: number) => {
    if (value > 0 && value <= 100) {
      setProgress(value);
    }
  };

  return (
    <AppContext.Provider value={{ progress, setProgress: updateProgress }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error('useAppContext must be used within an AppProvider!');

  return context;
};
