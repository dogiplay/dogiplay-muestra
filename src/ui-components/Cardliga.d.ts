/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Ligas } from "../models";
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
    "30"?: PrimitiveOverrideProps<TextProps>;
    "3117436503"?: PrimitiveOverrideProps<TextProps>;
    Cardliga?: PrimitiveOverrideProps<ViewProps>;
    Header?: PrimitiveOverrideProps<ViewProps>;
    "LIGA MUNICIPAL DE FUTBOL"?: PrimitiveOverrideProps<TextProps>;
    " Subheading"?: PrimitiveOverrideProps<TextProps>;
    "Product name52677"?: PrimitiveOverrideProps<TextProps>;
    "Product name1921953"?: PrimitiveOverrideProps<TextProps>;
    "Product name1921950"?: PrimitiveOverrideProps<TextProps>;
    "Product name1921949"?: PrimitiveOverrideProps<TextProps>;
    logoequipo?: PrimitiveOverrideProps<ImageProps>;
    Nayarit?: PrimitiveOverrideProps<TextProps>;
    Xalisco?: PrimitiveOverrideProps<TextProps>;
    FUTBOL?: PrimitiveOverrideProps<TextProps>;
    Contacto?: PrimitiveOverrideProps<TextProps>;
    buttonLiga?: PrimitiveOverrideProps<FlexProps>;
    "Ver liga"?: PrimitiveOverrideProps<TextProps>;
    Deporte?: PrimitiveOverrideProps<TextProps>;
    Categoria?: PrimitiveOverrideProps<TextProps>;
    Primera?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CardligaProps = React.PropsWithChildren<Partial<ViewProps> & {
    ligas?: Ligas;
    nayaritfutbolliga1?: String;
} & {
    overrides?: CardligaOverridesProps | undefined | null;
}>;
export default function Cardliga(props: CardligaProps): React.ReactElement;
