import { AppProps } from "next/app"
// import { ThemeProvider } from "styled-components"
import { PersistGate } from "redux-persist/integration/react"
import { useStore } from "react-redux"
import { ReduxStore, reduxWrapper } from "../5.redux/store"
import Head from "next/head"
import { GlobalStyle } from "../3.styles/globalsStyle"
import DefaultLayout from "../1.components_global/layouts/default/DefaultLayout"
// import { dark, light } from "@styls/theme"

const App = ({ Component, pageProps }: AppProps) => {
  const reduxStore = useStore()

  // const [themeMode, toggleTheme] = useTheme() // hook 함수 하용
  // const theme = themeMode === "dark" ? dark : light

  return (
    <>
      <PersistGate loading={null} persistor={(reduxStore as ReduxStore).reduxPersistData}>
        {/* <ThemeProvider theme={theme}> */}
        <GlobalStyle />
        <Head>
          <title>name</title>
        </Head>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
        {/* </ThemeProvider> */}
      </PersistGate>
    </>
  )
}

export default reduxWrapper.withRedux(App)
