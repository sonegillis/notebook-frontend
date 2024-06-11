import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';

const LoadingButton = ({ onClick, className, children }) => {
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    setLoading(true);
    try {
      await onClick();
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleClick} className={className} disabled={loading}>
      {loading ? <ClipLoader color="white" size={20} /> : children}
    </button>
  );
};

export default LoadingButton;
