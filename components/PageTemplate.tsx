import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import Header from './Header';

interface PageProps {
  children: React.ReactNode;
}

function PageTemplate({ children }: PageProps) {
  return (
    <>
      <Header />

      <Main>{children}</Main>
    </>
  );
}

export default PageTemplate;

// Styles
const Main = styled.div`
  padding-top: 7rem;
  
  // Temp
  background: ${oc.gray[3]};
`;
