import React, { Fragment, useState } from 'react';

function Accordion({ items }) {
  const [activeState, setActiveState] = useState(null);

  const onTitleClick = (index) => {
    setActiveState(index);
  };
  const rendredItems = items.map((item, index) => {
    const active = index === activeState ? 'active' : ' ';
    return (
      <Fragment key='item.title'>
        <div onClick={() => onTitleClick(index)} className={`title ${active}`}>
          <i className='dropdown icon'></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </Fragment>
    );
  });
  return (
    
    
      <div className='ui styled accordion'>{rendredItems}</div>
   
   

  );
}

export default Accordion;
