import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    global: {
      bgColor: string;
      textColor: string;
      mainColor: string;
      borderColor: string;
    };
    ui: {
      iconBtnBgColor: string;
    };
  }
}
