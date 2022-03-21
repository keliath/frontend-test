import * as createTheme from "@mui/material/styles/createTheme";
import { customShadows } from "../modules/shared/themes/shadows";

declare module "@mui/material/styles/createTheme" {
  export interface ThemeOptions {
    customShadows?: customShadows;
    customization?:
      | TypographyOptions
      | ((palette: Palette) => TypographyOptions);
    darkTextSecondary?: string;
    textDark?: string;
    darkTextPrimary?: string;
    grey500?: string;
  }
  interface Theme {
    customShadows: customShadows;
    customization: Typography;
    darkTextSecondary: string;
    textDark: string;
    grey500: string;
    darkTextPrimary: string;
  }
}
