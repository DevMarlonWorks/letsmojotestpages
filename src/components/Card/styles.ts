import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;

  > img {
    width: 100%;
    height: 206px;
    object-fit: cover;
  }
`;

export const CardInfo = styled.div`
  padding: 12px 20px;

  > h3 {
    font-family: "Poppins", sans-serif;
    color: #212529;
    font-weight: 600;
    line-height: 1.4;
    font-size: 1.2rem;
  }

  > p {
    font-family: "Inter", sans-serif;
    color: #343a40;
    font-weight: 400;
    font-size: 1rem;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;
  }
`;

export const Size = styled.div`
  display: flex;
  align-items: flex-start;
  > p {
    font-family: "Inter", sans-serif;
    color: #343a40;
    font-weight: 400;
    font-size: 1rem;
  }

  > span {
    font-family: "Inter", sans-serif;
    color: #343a40;
    font-weight: 400;
    font-size: 0.8rem;
  }
`;
export const Price = styled.strong`
  font-family: "Inter", sans-serif;
  color: #9381FF;
  font-size: 1.2rem;
  font-weight: 600;
`;
