import { CardInfo, Container, Price, Size } from "./styles";

interface ICardProps {
  id: string;
  name: string;
  address: string;
  sizeInFeet: number;
  price: number;
  image: string;
}

const Card = ({ id, address, image, name, price, sizeInFeet }: ICardProps) => {
  return (
    <Container to={`/${id}`}>
      <img src={image} />
      <CardInfo>
        <h3>{name}</h3>
        <p>{address}</p>
        <div>
          <Size>
            <p>{`${sizeInFeet}m`}</p>
            <span>2</span>
          </Size>
          <Price>{`$${price}`}</Price>
        </div>
      </CardInfo>
    </Container>
  );
};

export default Card;
