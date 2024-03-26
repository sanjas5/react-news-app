import React, { useState, useEffect, useCallback } from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [error, setError] = useState<Error | null>(null);
  const [errorInfo, setErrorInfo] = useState<React.ErrorInfo | null>(null);

  const handleError = useCallback(
    (errorEvent: ErrorEvent) => {
      console.error("Error:", errorEvent.error, errorInfo);
      setError(errorEvent.error);
      setErrorInfo(errorEvent.error);
    },
    [errorInfo]
  );

  useEffect(() => {
    const handleWindowError = (event: ErrorEvent) => handleError(event);
    window.addEventListener("error", handleWindowError);

    return () => {
      window.removeEventListener("error", handleWindowError);
    };
  }, [handleError]);

  if (error) {
    return (
      <div>
        <h2>Something went wrong...</h2>
        <p>{error.toString()}</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default ErrorBoundary;
