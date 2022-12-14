import React, { FC, ReactNode } from "react"
import Footer from "./footer/Footer"
import Header from "./header/Header"
import * as S from "./DefaultLayout.style"
interface Props {
  children: ReactNode
}
const DefaultLayout: FC<Props> = ({ children }) => {
  return (
    <S.Wrapper>
      <S.Container>
        <div className="header__wrapper">
          <Header />
        </div>
        <div className="contents__wrapper">
          <main>{children}</main>
        </div>
        <div className="footer__wrapper">
          <Footer />
        </div>
      </S.Container>
    </S.Wrapper>
  )
}

export default DefaultLayout
