// 1. Import `extendTheme`
import {
  StyleFunctionProps,
  baseTheme,
  extendTheme,
  withDefaultColorScheme,
  // withDefaultVariant,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { colors } from "./colors";

const inputStyles = {
  defaultProps: {
    focusBorderColor: "primary.500",
  },
  baseStyle: {
    field: {
      // borderRadius: "none",
    },
  },
};
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme(
  {
    colors: {
      // ...baseTheme.colors,
      ...colors,
    },

    // breakpoints: {
    //   base: "0px",
    //   sm: "320px",
    //   md: "768px",
    //   lg: "960px",
    //   xl: "1200px",
    //   "2xl": "1536px",
    // },
    fonts: {
      body: `Manrope, ${baseTheme.fonts.body}`, // Set font family for body text
      heading: `Manrope, ${baseTheme.fonts.heading}`, // Set font family for headings
      digits: `digital-7, ${baseTheme.fonts.body}`,
    },

    config: {
      initialColorMode: "light",
      useSystemColorMode: true,
    },
    styles: {
      global: (props: StyleFunctionProps) => ({
        body: {
          bg: mode("gray.100", "gray.800")(props),
          // bg: props.colorMode === "light" ? "gray.100" : "gray.800",
        },
      }),
    },

    components: {
      Stepper: {
        defaultProps: {
          colorScheme: "primary", // Set default color scheme here
        },
      },

      Input: { ...inputStyles },
      PinInput: { ...inputStyles },
      Textarea: { ...inputStyles },
      Select: { ...inputStyles },
      Checkbox: {
        baseStyle: {
          control: {
            _focus: {
              ring: 2,
              ringColor: "primary.200",
            },
          },
        },
      },
      Radio: {
        baseStyle: {
          control: {
            _focus: {
              ring: 2,
              ringColor: "primary.200",
            },
          },
        },
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: "primary",
    components: ["Checkbox", "Radio"],
  })
  // withDefaultVariant({
  //   variant: "filled",
  //   components: ["Input", "Select"],
  // })
);

export default theme;
