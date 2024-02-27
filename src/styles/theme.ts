import type { ThemeConfig } from "antd"

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    fontFamily: "Nunito",
    colorPrimary: "#6B47ED",
  },
  components: {
    Switch: {
      handleBg: "#6B47ED",
    },
    Form: {
      labelFontSize: 18,
      labelColor: "#000000",
    },
    Card: {
      paddingLG: 35,
    },
  },
}

export default theme
