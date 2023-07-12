import React from 'react';
import './styles.scss';
import Footer from '../footer';

const PageLayout = ({ children }) => {
  return (
    <div>
      <div className="page-layout">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default PageLayout;
