import { Layout } from "./layout";
import { Providers } from "./components/Providers";
import { Global } from "@emotion/react";
import { GlobalStyle } from "./styled";

export const App = () => {
  return (
    <Providers>
      <Global styles={GlobalStyle} />
      <Layout />
    </Providers>
  );
};
