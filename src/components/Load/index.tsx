import { CSSProperties, useState } from "react";

import ClipLoader from "react-spinners/ClipLoader";

// import { Container } from './styles';

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "#9381FF",
};

interface ILoadingProps {
  isLoading: boolean;
}

const Loading = ({ isLoading }: ILoadingProps) => {
  let [color, setColor] = useState("#ffffff");

  return (
    <>
      <ClipLoader
        color={color}
        loading={isLoading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
};

export default Loading;
