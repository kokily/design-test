import React from 'react';
import Footer from './Footer';
import Header from './Header';

interface PageProps {
  children: React.ReactNode;
}

function PageTemplate({ children }: PageProps) {
  return (
    <div className="body">
      <Header />

      <div role="main" className="main">
        {children}
      </div>

      <Footer />
    </div>
  );
}

export default PageTemplate;
