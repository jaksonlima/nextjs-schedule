import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { ConfigProvider } from "antd";
import locale from "antd/lib/locale/pt_BR";

import { wrapper } from "../store";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider locale={locale}>
        <Component {...pageProps} />
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
