import React, { useEffect,useState } from 'react';

function Routes({ path, children }) {
  const [currentPath, setcurrentPath] = useState(window.location.pathname);
  const onLocationChange = () => {
    // console.log('render');
    setcurrentPath(window.location.pathname);
  };
  useEffect(() => {
    window.addEventListener('popstate', onLocationChange);
    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  return currentPath === path ? children : null;
}

export default Routes;
