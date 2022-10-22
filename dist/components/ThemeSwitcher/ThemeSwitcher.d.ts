import React from "react";
import { Colors } from "../../theme";
import { Scale } from "../Button/types";
export interface Props {
    isDark: boolean;
    toggleTheme: (isDark: boolean) => void;
    color: keyof Colors;
    buttonScale?: Scale;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
