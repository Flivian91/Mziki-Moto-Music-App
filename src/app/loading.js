import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-surface">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-accent"></div>
    </div>
  );
};

export default LoadingSpinner;