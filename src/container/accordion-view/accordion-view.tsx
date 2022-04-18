import * as React from 'react';
import AccordionChild from './accordion-child';

export default function AccordionView(
  props: {
    inputList: any[]
  }
) {

  const accordionList: any[] = props.inputList;

  return (
    <div>
      {accordionList.map((input: any) => (
          <AccordionChild key={input.id} title={input.title} component={input.component}/>
        ))}
    </div>
  );
}