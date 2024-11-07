import { defineConfig } from "@pandacss/dev";
import { colors } from "@sopt-makers/colors";
import { fontsObject } from "@sopt-makers/fonts";

interface TextStyleValue {
  value: {
    fontFamily: string;
    fontSize: string;
    fontWeight: string | number;
    lineHeight: string;
    letterSpacing: string;
  };
}

function generateTextStyles(): Record<string, TextStyleValue> {
  const styles: Record<string, TextStyleValue> = {};

  Object.entries(fontsObject).forEach(([key, value]) => {
    const kebabKey = key.toLowerCase().replace(/_/g, "-");
    styles[kebabKey] = {
      value: {
        fontFamily: "'SUIT', sans-serif",
        fontSize: value.fontSize,
        fontWeight: value.fontWeight,
        lineHeight: value.lineHeight,
        letterSpacing: value.letterSpacing,
      },
    };
  });

  return styles;
}

export default defineConfig({
  // 기본 설정
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  outdir: "styled-system",

  globalCss: {},

  theme: {
    extend: {
      tokens: {
        colors: {
          white: { value: colors.white },
          gray: {
            10: { value: colors.gray10 },
            30: { value: colors.gray30 },
            50: { value: colors.gray50 },
            100: { value: colors.gray100 },
            200: { value: colors.gray200 },
            300: { value: colors.gray300 },
            400: { value: colors.gray400 },
            500: { value: colors.gray500 },
            600: { value: colors.gray600 },
            700: { value: colors.gray700 },
            800: { value: colors.gray800 },
            900: { value: colors.gray900 },
            950: { value: colors.gray950 },
          },
          black: { value: colors.black },
          blue: {
            50: { value: colors.blue50 },
            100: { value: colors.blue100 },
            200: { value: colors.blue200 },
            300: { value: colors.blue300 },
            400: { value: colors.blue400 },
            500: { value: colors.blue500 },
            600: { value: colors.blue600 },
            700: { value: colors.blue700 },
            800: { value: colors.blue800 },
            900: { value: colors.blue900 },
          },
          red: {
            50: { value: colors.red50 },
            100: { value: colors.red100 },
            200: { value: colors.red200 },
            300: { value: colors.red300 },
            400: { value: colors.red400 },
            500: { value: colors.red500 },
            600: { value: colors.red600 },
            700: { value: colors.red700 },
            800: { value: colors.red800 },
            900: { value: colors.red900 },
          },
          green: {
            50: { value: colors.green50 },
            100: { value: colors.green100 },
            200: { value: colors.green200 },
            300: { value: colors.green300 },
            400: { value: colors.green400 },
            500: { value: colors.green500 },
            600: { value: colors.green600 },
            700: { value: colors.green700 },
            800: { value: colors.green800 },
            900: { value: colors.green900 },
          },
          yellow: {
            50: { value: colors.yellow50 },
            100: { value: colors.yellow100 },
            200: { value: colors.yellow200 },
            300: { value: colors.yellow300 },
            400: { value: colors.yellow400 },
            500: { value: colors.yellow500 },
            600: { value: colors.yellow600 },
            700: { value: colors.yellow700 },
            800: { value: colors.yellow800 },
            900: { value: colors.yellow900 },
          },
          orange: {
            50: { value: colors.orange50 },
            100: { value: colors.orange100 },
            200: { value: colors.orange200 },
            300: { value: colors.orange300 },
            400: { value: colors.orange400 },
            500: { value: colors.orange500 },
            600: { value: colors.orange600 },
            700: { value: colors.orange700 },
            800: { value: colors.orange800 },
            900: { value: colors.orange900 },
          },
          // 시맨틱 컬러
          attention: { value: colors.attention },
          error: { value: colors.error },
          background: { value: colors.background },
          backgroundDimmed: { value: colors.backgroundDimmed },
          secondary: { value: colors.secondary },
          success: { value: colors.success },
          information: { value: colors.information },
          // Alpha 컬러
          redAlpha: {
            100: { value: colors.redAlpha100 },
            200: { value: colors.redAlpha200 },
            300: { value: colors.redAlpha300 },
            400: { value: colors.redAlpha400 },
            500: { value: colors.redAlpha500 },
            600: { value: colors.redAlpha600 },
            700: { value: colors.redAlpha700 },
            800: { value: colors.redAlpha800 },
            900: { value: colors.redAlpha900 },
          },
          orangeAlpha: {
            100: { value: colors.orangeAlpha100 },
            200: { value: colors.orangeAlpha200 },
            300: { value: colors.orangeAlpha300 },
            400: { value: colors.orangeAlpha400 },
            500: { value: colors.orangeAlpha500 },
            600: { value: colors.orangeAlpha600 },
            700: { value: colors.orangeAlpha700 },
            800: { value: colors.orangeAlpha800 },
            900: { value: colors.orangeAlpha900 },
          },
          blueAlpha: {
            100: { value: colors.blueAlpha100 },
            200: { value: colors.blueAlpha200 },
            300: { value: colors.blueAlpha300 },
            400: { value: colors.blueAlpha400 },
            500: { value: colors.blueAlpha500 },
            600: { value: colors.blueAlpha600 },
            700: { value: colors.blueAlpha700 },
            800: { value: colors.blueAlpha800 },
            900: { value: colors.blueAlpha900 },
          },
          grayAlpha: {
            100: { value: colors.grayAlpha100 },
            200: { value: colors.grayAlpha200 },
            300: { value: colors.grayAlpha300 },
            400: { value: colors.grayAlpha400 },
            500: { value: colors.grayAlpha500 },
            600: { value: colors.grayAlpha600 },
            700: { value: colors.grayAlpha700 },
            800: { value: colors.grayAlpha800 },
            900: { value: colors.grayAlpha900 },
          },
        },
      },
      textStyles: generateTextStyles(),
    },
  },

  utilities: {
    extend: {
      textStyle: {
        shorthand: "text",
        className: "text",
        values: "textStyles",
      },
    },
  },
});
