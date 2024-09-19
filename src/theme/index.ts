
import { createTheme } from "@mui/material";
import "@fontsource/inter"; // Defaults to weight 400
// export const hhhhhhhhhhhhhhhhh* = Inter({ subsets: ["latin"] });
declare module '@mui/material/styles' {
  interface Palette {
    customGray: {
      gray: string;
      gray2: string;
      gray3: string;
      gray4: string;
      gray5: string;
      gray6: string;
      gray7: string;
      gray8: string;
      gray9: string;
    };
    semantic: {
      red: string;
      green: string;
      yellow: string;
    };
    supporting: {
      main: string;
      light: string;
      tone: string;
    }
  }

  interface PaletteOptions {
    customGray: {
      gray: string;
      gray2: string;
      gray3: string;
      gray4: string;
      gray5: string;
      gray6: string;
      gray7: string;
      gray8: string;
      gray9: string;
    };
    semantic: {
      red: string;
      green: string;
      yellow: string;
    };
    supporting: {
      main: string;
      light: string;
      tone: string;
    }
  }
}
const theme = createTheme({
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    fontSize: 12
  },

  palette: {
    primary: {
      main: '#496DF2',
      dark: "#88A0F6",
      light: "#ECF0FE"    
    },
    secondary: {
      dark: '#00123B',
      main: '#002A8A',
      light: '#EBF1FF'
    },
    customGray: {
      gray: '#222222',
      gray2: '#444444',
      gray3: '#777777',
      gray4: '#AAAAAA',
      gray5: '#C2C2C2',
      gray6: '#D9D9D9',
      gray7: '#E5E5E5',
      gray8: '#F2F2F2',
      gray9: '#F6F7F8'
    },
    semantic: {
      red: '#EB2E45',
      green: '#0BCB45',
      yellow: '#FFB906',
    },
    supporting: {
      main: '#06AFF7',
      light: '#6AD0F8',
      tone: '#EBF9FF',
    }
  },
});

export default theme;
