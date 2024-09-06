import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { theme } from '../../styles/Theme';
import { animateScroll as scroll } from 'react-scroll';

export const GoTopBtn: React.FC = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => window.scrollY > 200 ? setShowBtn(true) : setShowBtn(false))
  }, []);

  return (
    <>
      {showBtn &&
        <StyledGoTopBtn onClick={() => { scroll.scrollToTop() }}>
          <Icon
            iconId={'arrowUp'}
            width={'30px'}
            height={'30px'}
            viewBox={'0 0 24 24'}
          />
        </StyledGoTopBtn >}
    </>
  );
};

const StyledGoTopBtn = styled.button`
  background-color: rgba(51, 51, 51, 0.6);
  padding: 8px;
  border-radius: 8px;
  color: ${theme.colors.background};

  position: fixed;
  right: 30px;
  bottom: 30px;
`;
