import React from 'react';
import { ThemeProvider } from 'react-bootstrap';

export const MainPage = () => {
  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs">
      <div>Your app...</div>
    </ThemeProvider>
  );
};

export default MainPage;
