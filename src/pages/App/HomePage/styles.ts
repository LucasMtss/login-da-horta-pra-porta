import styled from 'styled-components';
import image from 'assets/images/img/background.png';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background-image: url(${image});
  background-size: cover;

  div.header {
    font-size: 3rem;
    width: 30rem;
    margin: 3rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      color: var(--white);
    }

    div.container-button {
      width: 10rem;

      span {
        color: var(--green);
      }
    }
  }
`;
