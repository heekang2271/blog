import { css } from 'styled-components';

import { DEVICE_WIDTH } from '@/libs/const';

export const wrapStyle = css`
  width: 100%;
  max-width: 1200px;
  padding: 0 40px;
  margin: 0 auto;

  @media screen and (max-width: ${`${DEVICE_WIDTH.TABLET}px`}) {
    padding: 0 20px;
  }
`;
