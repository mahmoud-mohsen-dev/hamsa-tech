'use client';
import {
  createContext,
  useContext,
  useState,
  ReactNode
} from 'react';

// Define the type for your context
interface MyContextType {
  currentActiveSubCategory: string;
  setCurrentActiveSubCategory: (newValue: string) => void;
}

// Create the context with an initial value
const StoreContext = createContext<MyContextType | undefined>(
  undefined
);

// Create the provider component
export const StoreContextProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const [currentActiveSubCategory, setCurrentActiveSubCategory] =
    useState<string>('');

  return (
    <StoreContext.Provider
      value={{
        currentActiveSubCategory,
        setCurrentActiveSubCategory
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

// Custom hook for using the context
export const useStoreContext = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error(
      'useMyContext must be used within a MyContextProvider'
    );
  }
  return context;
};
