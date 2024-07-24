/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardligaOverridesProps = {
    Cardliga?: PrimitiveOverrideProps<ViewProps>;
    logoequipo?: PrimitiveOverrideProps<ImageProps>;
    "Product name"?: PrimitiveOverrideProps<TextProps>;
    "Contacto: 311 1122111"?: PrimitiveOverrideProps<TextProps>;
    "Estado: Nayarit"?: PrimitiveOverrideProps<TextProps>;
    "Pa\u00EDs: M\u00E9xico"?: PrimitiveOverrideProps<TextProps>;
    "Ciudad: Xalisco"?: PrimitiveOverrideProps<TextProps>;
    "Clave: AMEMEXNAYFUT001"?: PrimitiveOverrideProps<TextProps>;
    "Categor\u00EDa: Primera"?: PrimitiveOverrideProps<TextProps>;
    buttonLiga?: PrimitiveOverrideProps<FlexProps>;
    "Ver liga"?: PrimitiveOverrideProps<TextProps>;
    Header?: PrimitiveOverrideProps<ViewProps>;
    "LIGA MUNICIPAL DE FUTBOL"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CardligaProps = React.PropsWithChildren<Partial<ViewProps> & {
    ligas?: any;
    nayaritfutbolliga1?: String;
} & {
    overrides?: CardligaOverridesProps | undefined | null;
}>;
export default function Cardliga(props: CardligaProps): React.ReactElement;
