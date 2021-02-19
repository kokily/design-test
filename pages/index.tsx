import React from 'react';
import styled, { css } from 'styled-components';
import oc from 'open-color';

interface ButtonProps {
  red?: boolean;
  blue?: boolean;
  cyan?: boolean;
}

function IndexPage() {
  return (
    <IndexBox>
      <h2>Design test</h2>

      <BoxContainer>
        <Box red />
        <Box blue />
        <Box cyan />
      </BoxContainer>
    </IndexBox>
  );
}

export default IndexPage;

// Styles
const IndexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BoxContainer = styled.div`
  display: flex;
`;

const Box = styled.div<ButtonProps>`
  width: 200px;
  height: 200px;
  margin: 1rem;

  ${(props) =>
    props.red &&
    css`
      background: ${oc.red[5]};
    `}
  ${(props) =>
    props.blue &&
    css`
      background: ${oc.blue[5]};
    `}
  ${(props) =>
    props.cyan &&
    css`
      background: ${oc.cyan[5]};
    `}
`;
