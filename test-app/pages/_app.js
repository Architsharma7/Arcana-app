import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";

const clientId = `xar_test_2f9538294729921aa828310b2d280258ecf1cdd2`

const provider = new AuthProvider(`${clientId}`);

function MyApp({ Component, pageProps }) {
  return (
    <ProvideAuth provider={provider}>
      <Component {...pageProps} />
    </ProvideAuth>
  );
}

export default MyApp;
