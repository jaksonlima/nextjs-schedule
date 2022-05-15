import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";
import locale from "antd/lib/locale/pt_BR";
import { wrapper } from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider locale={locale}>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}

export default wrapper.withRedux(MyApp);
