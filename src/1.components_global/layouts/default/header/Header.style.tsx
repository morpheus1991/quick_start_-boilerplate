import styled from "styled-components"
import { device } from "../../../../3.styles/theme"

export const Wrapper = styled.header`
  width: 100%;
  padding: 0 20px;
  margin-top: 20px;
  .HeaderContainer {
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
    .HeaderContainer_titleArea {
      text-align: center;
    }
  }

  .HeaderContainer_topMenuArea {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    a {
      display: flex;
      align-items: center;
    }
  }

  @media ${device.zeroToTablet} {
  }

  @media ${device.zeroToMobile} {
  }
`
