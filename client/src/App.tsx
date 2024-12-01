import { Layout } from "./layout";
import { Header, Providers } from "./components";
import { Global } from "@emotion/react";
import { GlobalStyle } from "./styled";

export const App = () => {
  return (
    <Providers>
      <Global styles={GlobalStyle} />
      <Header />
      <Layout />
    </Providers>
  );
};
