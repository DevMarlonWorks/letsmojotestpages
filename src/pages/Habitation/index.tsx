import { ArrowCircleLeft } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Load";
import { clientAPI } from "../../server/client-api";

import {
  Attributes,
  ButtonWrapper,
  Container,
  GoBackButton,
  Info,
  Price,
  Size,
} from "./styles";

interface IHabitationProps {
  address: string;
  id: string;
  name: string;
  price: number;
  sizeInFeet: number;
  thumbnail: string;
}

const Habitation: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [habitationData, setHabitationData] = useState<IHabitationProps>();
  const [loading, setLoading] = useState(false);

  const loadDataFromHabitation = async () => {
    setLoading(true);
    const {
      data: { data: habitation },
    } = await clientAPI.get(`/properties/find/${id}`);
    setHabitationData(habitation);
    setLoading(false);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    loadDataFromHabitation();
  }, []);

  return (
    <Container>
      <GoBackButton onClick={handleGoBack}>
        <ArrowCircleLeft color="#fff" size={24} />
        <p>Voltar</p>
      </GoBackButton>
      {loading ? (
        <Loading isLoading={loading} />
      ) : (
        <>
          <img src={habitationData?.thumbnail} />
          <Info>
            <h3>{habitationData?.name}</h3>
            <p>{habitationData?.address}</p>

            <Attributes>
              <Size>
                <strong>SIZE</strong>
                <p>
                  {`${habitationData?.sizeInFeet}`} <span>m2</span>
                </p>
              </Size>
              <Price>
                <strong>PRICE</strong>
                <p>{`$${habitationData?.price}`}</p>
              </Price>
            </Attributes>

            <ButtonWrapper>
              <button>
                <p>Alugar</p>
              </button>
            </ButtonWrapper>
          </Info>
        </>
      )}
    </Container>
  );
};

export default Habitation;
