import Typography from "typography";

const config = require("../../config/SiteConfig");

const typography = new Typography({
  title: "Charmi Cooks",
  baseFontSize: config.baseFontSize,
  baseLineHeight: 1.5,
  headerFontFamily: [config.headerFontFamily, "sans-serif"],
  bodyFontFamily: [config.bodyFontFamily, "sans-serif"],
  scaleRatio: 2.5,
  headerWeight: 100,
  googleFonts: [
    {
      name: config.headerFontFamily,
      styles: ["700"]
    },
    {
      name: config.bodyFontFamily,
      styles: ["400"]
    }
  ]
});

export default typography;
