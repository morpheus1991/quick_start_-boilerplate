import Link from "next/link"
import { useRouter } from "next/router"
import React, { FC, useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import * as S from "./Header.style"
interface Props {
  toggleTheme: () => void
}
const Header: FC<Props> = ({ toggleTheme }) => {
  const router = useRouter()

  const isMyVideoPage = router.route === "/myVideo"
  const linkHref = isMyVideoPage ? "/" : "/myVideo"
  const linkText = isMyVideoPage ? "home" : "my video"

  const dispatch = useDispatch()

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
