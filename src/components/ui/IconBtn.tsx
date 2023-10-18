import React, { ButtonHTMLAttributes } from 'react';

import styled from 'styled-components';

const Icon = styled.div<{ size: number }>`
  width: ${(props) => `${props.size}px`};
  font-size: ${(props) => `${props.size}px`};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Background = styled.div<{ size: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: none;
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  border-radius: 100%;
  background-color: ${(props) => props.theme.ui.iconBtnBgColor};
  z-index: -1;
`;

const Wrapper = styled.button`
  position: relative;

  &:hover {
    ${Background} {
      display: block;
    }
  }
`;

interface IconBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: number;
  bgSize: number;
}

const IconBtn = React.forwardRef(
  ({ size, bgSize, children, ...rest }: IconBtnProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
    return (
      <Wrapper ref={ref} {...rest}>
        <Icon size={size}>{children}</Icon>
        <Background size={bgSize}></Background>
      </Wrapper>
    );
  }
);

IconBtn.displayName = 'IconBtn';
export default IconBtn;
