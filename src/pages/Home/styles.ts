import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  margin: 32px auto;
  padding: 0 20px;
`;

export const AddressWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 880px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Filters = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const FilterName = styled.p`
  font-family: "Inter", sans-serif;
  color: #343a40;
  font-weight: 500;
  font-size: 0.8rem;
  margin-bottom: 0.25rem;
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #343a40;
  width: 100%;
  max-width: 240px;

  > select {
    color: #343a40;
    font-family: "Inter", sans-serif;

    > option {
      color: #343a40;
      font-family: "Inter", sans-serif;
    }
  }
`;

export const Message = styled.div`
  padding: 1rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 1.2rem;
  }

  > h1 {
    text-align: center;
    color: #343a40;
    font-family: "Inter", sans-serif;
    font-size: 1.2rem;
    font-weight: 500;

    > a {
      font-weight: 600;
      color: #343a40;
    }
  }
`;
