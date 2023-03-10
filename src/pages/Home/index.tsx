import { useEffect, useMemo, useState } from "react";
import Card from "../../components/Card";
import Loading from "../../components/Load";
import { clientAPI } from "../../server/client-api";
import {
  AddressWrapper,
  Container,
  FilterName,
  Filters,
  FilterWrapper,
  Message,
} from "./styles";

interface IAddressType {
  name: string;
  address: string;
  sizeInFeet: number;
  price: number;
  thumbnail: string;
  id: string;
}

const Home = () => {
  const [addressList, setAddressList] = useState<IAddressType[]>([]);

  const [orderPrice, setOrderPrice] = useState("");
  const [orderSize, setOrderSize] = useState("");

  let [loading, setLoading] = useState(false);

  const getFilteredList = () => {
    // Avoid filter when selectedCategory is null
    if (!orderSize && !orderPrice) {
      return addressList;
    }

    const addressSorted = addressList.slice(0);
    if (!!orderPrice) {
      addressSorted.sort((a, b) => {
        if (orderPrice === "asceding") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
    }

    if (!!orderSize) {
      addressSorted.sort((a, b) => {
        if (orderSize === "asceding") {
          return a.sizeInFeet - b.sizeInFeet;
        } else {
          return b.sizeInFeet - a.sizeInFeet;
        }
      });
    }

    return addressSorted;
  };
  var filteredList = useMemo(getFilteredList, [
    orderPrice,
    orderSize,
    addressList,
  ]);

  const handleOrderChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    type: "price" | "size"
  ) => {
    if (type === "price") {
      setOrderPrice(e.target.value);
    }

    if (type === "size") {
      setOrderSize(e.target.value);
    }
  };

  const loadAddressList = async () => {
    setLoading(true);
    const {
      data: { data: AddressListFetched },
    } = await clientAPI.get("properties/list");

    setAddressList(AddressListFetched);
    setLoading(false);
  };

  useEffect(() => {
    loadAddressList();
  }, []);

  return (
    <Container>
      <Message>
        <img src="https://avatars.githubusercontent.com/u/122228798?s=200&v=4" />
        <h1>
          There was a simple project developed by @devmarlon. you can contact me
          on: &nbsp;
          <br />
          <a href="https://linktr.ee/devmarlon">Contact me</a>
        </h1>
      </Message>

      <Filters>
        <FilterWrapper>
          <FilterName>Order by price:</FilterName>
          <select
            name="order-list"
            onChange={(e) => handleOrderChange(e, "price")}
          >
            <option value="">any</option>
            <option value="asceding">Asceding</option>
            <option value="desceding">Desceding</option>
          </select>
        </FilterWrapper>
        <FilterWrapper>
          <FilterName>Order by size:</FilterName>
          <select
            name="order-list"
            onChange={(e) => handleOrderChange(e, "size")}
          >
            <option value="">any</option>
            <option value="asceding">Asceding</option>
            <option value="desceding">Desceding</option>
          </select>
        </FilterWrapper>
      </Filters>

      {loading ? (
        <Loading isLoading={loading} />
      ) : (
        <AddressWrapper>
          {filteredList.map((data) => {
            return (
              <Card
                id={data.id}
                key={data.id}
                name={data.name}
                address={data.address}
                sizeInFeet={data.sizeInFeet}
                price={data.price}
                image={data.thumbnail}
              />
            );
          })}
        </AddressWrapper>
      )}
    </Container>
  );
};

export default Home;
