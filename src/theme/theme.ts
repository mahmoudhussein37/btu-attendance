export type TypographyStyle = {
  fontSize: number;
  lineHeight: number;
  fontWeight: number;
};

export interface Theme {
  colors: {
    primary: {
      grape: string;
      dark: string;
    };
    background: {
      porcelain: string;
    };
    accent: {
      golden: string;
      beige: string;
    };
    status: {
      success: string;
      danger: string;
    };
    neutral: {
      light: string;
      medium: string;
      dark: string;
    };
    text: {
      main: string;
    };
  };
  typography: {
    fontFamily: string;
    display: TypographyStyle;
    h1: TypographyStyle;
    h2: TypographyStyle;
    h3: TypographyStyle;
    body: TypographyStyle;
    bodySm: TypographyStyle;
    label: TypographyStyle;
    caption: TypographyStyle;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
    xxxl: number;
  };
  radii: {
    card: number;
    button: number;
    pill: number;
  };
  shadows: {
    card: string;
  };
}

export const theme: Theme = {
  colors: {
    primary: {
      grape: "#4E477A",
      dark: "#484275",
    },
    background: {
      porcelain: "#FDFDFB",
    },
    accent: {
      golden: "#ECDD2F",
      beige: "#C1B8A1",
    },
    status: {
      success: "#4CAF50",
      danger: "#E53935",
    },
    neutral: {
      light: "#F3F3F3",
      medium: "#BEBEBE",
      dark: "#707070",
    },
    text: {
      main: "#202124",
    },
  },
  typography: {
    fontFamily:
      "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    display: {
      fontSize: 32,
      lineHeight: 40,
      fontWeight: 700,
    },
    h1: {
      fontSize: 28,
      lineHeight: 36,
      fontWeight: 700,
    },
    h2: {
      fontSize: 24,
      lineHeight: 32,
      fontWeight: 700,
    },
    h3: {
      fontSize: 20,
      lineHeight: 28,
      fontWeight: 600,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: 400,
    },
    bodySm: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: 400,
    },
    label: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: 600,
    },
    caption: {
      fontSize: 12,
      lineHeight: 16,
      fontWeight: 400,
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },
  radii: {
    card: 24,
    button: 18,
    pill: 9999,
  },
  shadows: {
    card: "0px 8px 24px rgba(0, 0, 0, 0.08)",
  },
};

export default theme;
