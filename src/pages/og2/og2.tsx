import React from 'react';
import Bbg from '@/components/bbg';
import { TextHoverEffect } from "@/components/ui/texthovereffect";

const Og2: React.FC = () => {
  return (
    <div>
      <Bbg>
        <div className='flex items-center justify-center text-center pt-5'>
          <TextHoverEffect text="Welcome" />
        </div>
        
        {/* Using <br /> for a line break */}
        <div className="text-center pt-5">
          <p><a className='underlined text-blue-400' href="/og2">og2.</a></p>
          <br />
          <p>this is <a className='underlined text-blue-400' href="/og2">the og page 2.</a></p>
          <br />
          <p><a className='underlined text-blue-400' href="/og">og.</a></p>
        </div>
      </Bbg>
    </div>
  );
};

export default Og2;
