'use client'

import { useEffect } from "react";
import EmptyState from "./components/EmptyState";

interface ErrorStateProp {
  error: Error
}

const Error: React.FC<ErrorStateProp> = ({ error }) => {

  useEffect(() => {
    console.error(error)
  }, [error])
  

  return (
    <EmptyState 
      title="Uh Oh"
      subtitle="Something went wrong!"
    />
      
  );
}

export default Error;