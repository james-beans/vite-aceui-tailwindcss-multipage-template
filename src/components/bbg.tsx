import React, { ReactNode } from 'react';

interface BbgProps {
  children: ReactNode; // This type allows any valid JSX content
}

const Bbg: React.FC<BbgProps> = ({ children }) => {
  return (
    <div className="h-screen w-full relative bg-black text-white">
      <div className="container mx-auto">
        {children}
      </div>
    </div>
  );
};

export default Bbg;
