import styled from 'styled-components';

interface ButtonProps {
  size: 'small' | 'regular' | 'large';
}

interface ISizes {
  [key: string]: string;
}

const heights: ISizes = {
  small: '1.5rem',
  regular: '3.125rem',
  large: '4rem',
};

const fontSizes: ISizes = {
  small: '0.9rem',
  regular: '1.2rem',
  large: '1.7rem',
};

const paddings: ISizes = {
  small: '0.1rem',
  regular: '0.5rem',
  large: '1.5rem',
};

export const Container = styled.button<ButtonProps>`
  background: var(--white);
  width: 100%;
  height: 3.71rem;
  border-radius: 10px;

  padding: 0 ${({ size }) => paddings[size]};

  height: ${({ size }) => heights[size]};

  border: 0;

  span {
    font-size: ${({ size }) => fontSizes[size]};
    color: var(--green);
  }
`;
