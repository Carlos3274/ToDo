import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;

      textPrimary: string;
      textSecondary: string;

      background: string;
      brand: string;

      positive: string;
      success: string;
      warning: string;
      danger: string;
      gray: string;

      borderInput: string;
      backgroundInput: string;
      backgroundInputDisabled: string;
    };

    font: {
      family: string;
    };
  }
}
