import React from 'react';
import CoffeeLogo from '../../../assets/vectors/coffee.svg';
import './PageLoader.scss';

const PageLoader = ({ children }) => {
  return (
    <div className="page-loader-container">
      <div className="loader-holder">
        <div className="img-section">
          <img src={CoffeeLogo} alt="Loading" />
        </div>
        {children && <div className="text-section">{children}</div>}
      </div>
    </div>
  );
};

export default PageLoader;
