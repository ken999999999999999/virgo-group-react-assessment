import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { ConfigProvider } from "antd"
import { StyleProvider } from "@ant-design/cssinjs"
import "antd/dist/reset.css"
import theme from "@/styles/theme"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={theme}>
      <StyleProvider hashPriority="high">
        <main
          className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
        >
          <Component {...pageProps} />
        </main>
      </StyleProvider>
    </ConfigProvider>
  )
}
