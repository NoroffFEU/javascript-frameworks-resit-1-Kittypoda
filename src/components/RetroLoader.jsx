import React, { useEffect } from "react";

const RetroLoader = () => {
  useEffect(() => {
    return () => {
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 text-purple font-retro">
      <p className="text-xl loading-dots">Loading</p>
    </div>
  );
};

export default RetroLoader;



