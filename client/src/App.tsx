import { Layout } from "./layout";
import { Providers } from "./components/Providers";

export const App = () => {
  return (
    <Providers>
      <Layout />
    </Providers>
  );
};
