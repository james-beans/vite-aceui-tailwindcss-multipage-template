import React from 'react';
import Bbg from '@/components/bbg';
import { TextHoverEffect } from "@/components/ui/texthovereffect";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Og: React.FC = () => {
  return (
    <div>
      <Bbg>
        <div className='flex items-center justify-center text-center pt-5'>
          <TextHoverEffect text="Welcome" />
        </div>
        
        {/* Using <br /> for a line break */}
        <div className="text-center pt-5">
          <p><a className='underlined text-blue-400' href="/og">og.</a></p>
          <br />
          <p>this is <a className='underlined text-blue-400' href="/og">the og page 1.</a></p>
          <br />
          <p><a className='underlined text-blue-400' href="/og2">og2.</a></p>
        </div>
        <div className='items-center justify-center text-center'>
          <Accordion type="single" collapsible className="w-1/4 items-center justify-center text-center">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Bbg>
    </div>
  );
};

export default Og;
