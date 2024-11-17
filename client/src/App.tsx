import { Layout } from "./layout";
import { Providers } from "./components/Providers";
import { Global } from "@emotion/react";
import { GlobalStyle } from "./styled";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <Providers>
      <Global styles={GlobalStyle} />
      <Header />
      <Layout />
    </Providers>
  );
};
