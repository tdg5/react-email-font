import * as React from 'react';

declare type FallbackFont = "Arial" | "Helvetica" | "Verdana" | "Georgia" | "Times New Roman";
declare type FontFormat = "woff" | "woff2" | "truetype" | "opentype" | "embedded-opentype" | "svg";
declare type FontWeight = React.CSSProperties["fontWeight"];
declare type FontStyle = React.CSSProperties["fontSize"];
interface FontProps {
    /** The font you want to use. NOTE: Do not insert multiple fonts here, use fallbackFontFamily for that */
    fontFamily: string;
    /** An array is possible, but the order of the array is the priority order */
    fallbackFontFamily: FallbackFont | FallbackFont[];
    /** Not all clients support web fonts. For support check: https://www.caniemail.com/features/css-at-font-face/ */
    webFont?: {
        url: string;
        format: FontFormat;
    };
    /** Default: 'normal' */
    fontStyle?: FontStyle;
    /** Default: 400 */
    fontWeight?: FontWeight;
}
/** The component MUST be place inside the <head> tag */
declare const Font: React.FC<Readonly<FontProps>>;

export { Font, FontProps };
