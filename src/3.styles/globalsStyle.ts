import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { ThemeType } from './theme'

export const GlobalStyle = createGlobalStyle`


    ${reset}
    * {
    	margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        height: 100%;
    }
    body {
        height: 100%;   
        color: ${({ theme }: { theme: ThemeType }) => {
          return theme.colors.textColor
        }};
  background: ${({ theme }: { theme: ThemeType }) => {
    return theme.colors.bgColor
  }};
    }
    #__next{
        width:100%;
        height: 100%;

    }
    main{height:auto;
    display:flex;
flex-direction:column}
    button { 
        cursor: pointer;
        border: none;
        outline: none;
        background: none;
        color: ${({ theme }: { theme: ThemeType }) => {
          return theme.colors.textColor
        }};
    }
    .sr-only {
        border: 0 !important;
        clip: rect(1px, 1px, 1px, 1px) !important;
        -webkit-clip-path: inset(50%) !important;
        clip-path: inset(50%) !important;
        height: 1px !important;
        overflow: hidden !important;
        padding: 0 !important;
        position: absolute !important;
        width: 1px !important;
        white-space: nowrap !important;
    }
`
