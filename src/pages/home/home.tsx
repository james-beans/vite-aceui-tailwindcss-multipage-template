import React from 'react';
import Bbg from '@/components/bbg';
import { TextHoverEffect } from "@/components/ui/texthovereffect";

const Home: React.FC = () => {
  return (
    <div>
      <Bbg>
        <div className='flex items-center justify-center text-center pt-5'>
          <TextHoverEffect text="VITE!!!" />
        </div>
        
        {/* Using <br /> for a line break */}
        <div className="text-center pt-5">
          <p>nah.</p>
          <br />
          <p>this is React in Vite bro...</p>
        </div>
      </Bbg>
    </div>
  );
};

export default Home;
