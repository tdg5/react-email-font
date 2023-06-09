// src/font.tsx
import { jsx } from "react/jsx-runtime";
var Font = ({
  fontFamily,
  fallbackFontFamily,
  webFont,
  fontStyle = "normal",
  fontWeight = 400
}) => {
  const src = webFont ? `src: url(${webFont.url}) format('${webFont.format}');` : "";
  const style = `
    @font-face {
      font-family: '${fontFamily}';
      font-style: ${fontStyle};
      font-weight: ${fontWeight};
      mso-font-alt: '${Array.isArray(fallbackFontFamily) ? fallbackFontFamily[0] : fallbackFontFamily}';
      ${src}
    }

    * {
      font-family: '${fontFamily}', ${Array.isArray(fallbackFontFamily) ? fallbackFontFamily.join(", ") : fallbackFontFamily};
    }
  `;
  return /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: style } });
};
Font.displayName = "Font";
export {
  Font
};
