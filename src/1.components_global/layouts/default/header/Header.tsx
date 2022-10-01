import React, { FC } from "react"

import * as S from "./Header.style"
interface Props {}
const Header: FC<Props> = () => {
  return (
    <S.Wrapper>
      <div className="HeaderContainer">
        <div className="HeaderContainer_titleArea">
          <h1 className="sr-only">siteName</h1>
        </div>
        <div className="HeaderContainer_topMenuArea"></div>
      </div>
    </S.Wrapper>
  )
}

export default Header
