import React from 'react';
import styled from 'styled-components';

const Pattern = ({ children }) => {
  return (
    <Background>
      <Overlay />
      <Content>
        {children}
      </Content>
    </Background>
  );
};

const Background = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #ffe8f3, #d9f3ff);
  overflow: hidden;
`;


const Overlay = styled.div`
  position: absolute;
  width: 200%;
  height: 200%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: conic-gradient(
    from 0deg,
    #ff9aa2,
    #ffb7b2,
    #ffdac1,
    #e2f0cb,
    #a2e4ff,
    #c9afff,
    #ffb7b2,
    #ff9aa2
  );
  animation: rotate 20s linear infinite;
  opacity: 0.3;
  filter: blur(100px);
  z-index: 1;

  @keyframes rotate {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
  }
`;

const Content = styled.div`

  z-index: 10;
  width: 100%;
  max-width: 100%; /* remove constraint */
  padding: 2rem;
`;


export default Pattern;
