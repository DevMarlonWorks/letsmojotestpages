import styled from "styled-components";

export const Container = styled.main`
  > img {
    width: 100%;
    height: 260px;
    object-fit: cover;
  }
`;

export const GoBackButton = styled.button`
  background-color: #9381ff;
  cursor: pointer;
  border-style: none;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 20px;

  > p {
    color: #fff;
    font-weight: 600;
  }
`;

export const Info = styled.div`
  max-width: 1216px;
  margin: 0 auto;
  padding: 32px 20px;
  > h3 {
    font-family: "Poppins", sans-serif;
    color: #343a40;
    font-weight: 600;
    font-size: 2rem;
    line-height: 1.2;
  }

  > p {
    font-family: "Inter", sans-serif;
    color: #343a40;
    font-weight: 400;
    font-size: 1.2rem;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 32px;
  > button {
    cursor: pointer;

    width: 100%;
    border-style: none;
    background-color: #9381ff;
    height: 60px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;

    > p {
      font-family: "Poppins", sans-serif;
      color: #fff;
      font-weight: 600;
      font-size: 1.2rem;
    }
  }
`;

export const Attributes = styled.div`
  margin-top: 32px;

  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 640px) {
    flex-wrap: wrap;
  }
`;

const sharedElements = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 100%;

  > strong {
    font-family: "Inter", sans-serif;
    color: #343a40;
    font-weight: 500;
    font-size: 0.8rem;
    margin-bottom: 8px;
  }

  > p {
    display: flex;
    align-items: flex-start;
    color: #343a40;
    font-weight: 600;
    font-size: 1.2rem;

    > span {
      color: #343a40;
      font-weight: 500;
      font-size: 0.8rem;
      margin-left: 4px;
    }
  }
`;

export const Size = styled(sharedElements)``;

export const Price = styled(sharedElements)`
  > p {
    color: #9381ff;
  }
`;
