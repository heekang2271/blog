import Image from 'next/image';

import styled from 'styled-components';

const Wrapper = styled.div<{ $isFull: boolean; $maxWidth?: number; $border: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: ${(props) => (props.$maxWidth ? `${props.$maxWidth}px` : 'initial')};
  border: ${(props) => (props.$border ? `1px solid ${props.theme.borderColor}` : 'none')};

  img {
    width: 100%;
    position: relative !important;

    ${(props) => {
      if (props.$isFull) {
        return {
          height: '100%',
          objectFit: 'cover',
        };
      }
    }}
  }
`;

interface ResponsiveImageProps {
  src: string;
  alt: string;
  isFull?: boolean;
  maxWidth?: number;
  border?: boolean;
}

const ResponsiveImage = ({ src, alt, isFull = false, maxWidth, border = false }: ResponsiveImageProps) => {
  return (
    <Wrapper $isFull={isFull} $maxWidth={maxWidth} $border={border}>
      <Image src={src} alt={alt} fill />
    </Wrapper>
  );
};

ResponsiveImage.displayName = 'ResponsiveImage';
export default ResponsiveImage;
