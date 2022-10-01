import styled from "styled-components"
import { device, ThemeType } from "../../../3.styles/theme"

export const Wrapper = styled.div`
  background: ${({ theme }: { theme: ThemeType }) => {
    return theme.colors.bgColor
  }};
  height: auto;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  .header__wrapper {
    display: flex;
    justify-content: center;
  }
  .contents__wrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  .footer__wrapper {
  }

  @media ${device.zeroToTablet} {
  }

  @media ${device.zeroToMobile} {
  }
`
