import React from 'react';

function Link({ className, href, children }) {
  const OnClick = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', href);

    const navPop = new PopStateEvent('popstate');
    window.dispatchEvent(navPop);
  };
  return (
    <a onClick={OnClick} className={className} href={href}>
      {children}
    </a>
  );
}

export default Link;
