export const COLORS = {
  white: "#ffffff",
  primary: "#D3DEDC",
  secondary: "#7C99AC",
  urgent: "#3A7575",
  gray: {
    100: "#f1f3f5",
    200: "#e9ecef",
    500: "#868e96",
  }
};

export const WEIGHTS = {
  normal: 400,
  medium: 500,
  bold: 600,
};

export const TYPE_SCALE = {
  header1: "2rem",
  header2: "1.75rem",
  header3: "1.5rem",
  header4: "1.25",
  header5: "1.125rem",
  header6: "1rem",
  paragraph: "0.938rem",
  helperText: "0.875rem"
};

export const FAMILIES = {
  sansSerif: '"Poppins", sans-serif'
};

export const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
  tabletOnly: `
    (min-width: ${BREAKPOINTS.tabletMin / 16}rem) and
    (max-width: ${(BREAKPOINTS.laptopMin - 1) / 16}rem)`,
};