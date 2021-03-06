import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-text-in-primary);
  background: var(--color-primary);
`;

export const Content = styled.div`
  img.hero-image {
    width: 100%;
  }

  > span {
    font-size: 1.4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin-left: 0.8rem;
    }
  }

  @media (min-width: 1100px) {
    max-width: 1100px !important;

    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas: 'logo hero hero' 'buttons buttons total';

    > span {
      grid-area: total;
      justify-self: end;
    }

    img.hero-image {
      grid-area: hero;
      justify-self: end;
    }
  }
`;

export const Logo = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }

  img {
    height: 10rem;
  }

  @media (min-width: 1100px) {
    text-align: left;
    grid-area: logo;
    align-self: center;
    margin: 0;

    h2 {
      text-align: initial;
      font-size: 3.6rem;
    }

    img {
      height: 100%;
    }
  }
`;

export const ButtonsContainer = styled.div`
  @media (min-width: 1100px) {
    grid-area: buttons;
    justify-content: flex-start;

    a {
      font-size: 2.4rem;
    }
  }

  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  a {
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;

    font: 700 2rem Archivo;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: var(--color-button-text);

    transition: background-color 0.2s;

    img {
      width: 4rem;
      margin-right: 2.4rem;
    }

    &.study {
      background: var(--color-primary-lighter);
    }

    &.give-classes {
      background: var(--color-secundary);
    }

    &.study:hover {
      background: var(--color-primary-light);
    }

    &.give-classes:hover {
      background: var(--color-secundary-dark);
    }
  }

  a:first-child {
    margin-right: 1.6rem;
  }
`;
