import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { ConfigProvider, Layout } from "antd"
import { StyleProvider } from "@ant-design/cssinjs"
import "antd/dist/reset.css"
import theme from "@/styles/theme"
import { Content } from "antd/es/layout/layout"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={theme}>
      <StyleProvider hashPriority="high">
        <Layout>
          <Content className="p-24 m-auto min-h-lvh">
            <Component {...pageProps} />
          </Content>
        </Layout>
      </StyleProvider>
    </ConfigProvider>
  )
}
