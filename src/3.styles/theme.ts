export const dark = {
  typeName: "dark",
  colors: {
    textColor: "#ffffff",
    bgColor: "#000000",
    borderColor: "#b7b7b7",
    buttonBgColor: "#252525"
  }
}

export const light = {
  typeName: "light",
  colors: {
    textColor: "#000000",
    bgColor: "#ffffff",
    borderColor: "#3E3E3E",
    buttonBgColor: "#f2f2f2"
  }
}

const size = {
  mobile: "320px",
  //   mobileM: "375px",
  //   mobileL: "425px",
  tablet: "768px",
  desktop: "1024px"
  //   laptopL: "1440px",
  //   desktop: "2560px",
}

export const device = {
  zeroToMobile: `(max-width:${size.tablet})`,
  MobileOver: `(min-width:${size.tablet})`,
  zeroToTablet: `(max-width:${size.desktop})`,
  tabletOver: `(min-width:${size.desktop})`

  // mobileM: `(min-width: ${size.mobileM})`,
  // mobileL: `(min-width: ${size.mobileL})`,
  //   tablet: `(min-width: ${size.tablet})`,
  //   laptop: `(min-width: ${size.desktop})`,
  // laptopL: `(min-width: ${size.laptopL})`,
  // desktop: `(min-width: ${size.desktop})`,
}

export type ThemeType = typeof dark | typeof light
