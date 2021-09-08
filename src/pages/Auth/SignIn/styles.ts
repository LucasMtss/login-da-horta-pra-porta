import styled from 'styled-components';
import image from 'assets/images/img/background.png';

export const Container = styled.div`
  background-image: url(${image});
  background-size: cover;
  width: 100vw;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  width: 20rem;
  margin: 3rem;
`;

export const ContainerLogin = styled.div`
  width: 60rem;
  background-color: transparent;
  border-radius: 10px;
  border: solid 3px var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 950px) {
    width: 40rem;
  }

  @media (max-width: 600px) {
    width: 30rem;
  }

  @media (max-width: 450px) {
    width: 90%;
  }

  h2 {
    color: var(--white);
    font-size: 2.5rem;
    margin: 2rem 0;
    font-family: 'Playball', cursive;
  }

  span.forgot-password {
    text-decoration: underline;
    font-size: 1.1rem;
    margin: 1rem 0;
    cursor: pointer;
    color: var(--white);
  }
`;

export const ContainerInput = styled.div`
  width: 30rem;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const ContainerButton = styled.div`
  width: 15rem;
  margin-bottom: 2rem;

  :last-child {
    margin-top: 0;
  }
`;
