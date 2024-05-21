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
export declare type CardligaBeisbolOverridesProps = {
    "30"?: PrimitiveOverrideProps<TextProps>;
    "3117436503"?: PrimitiveOverrideProps<TextProps>;
    CardligaBeisbol?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 23"?: PrimitiveOverrideProps<ViewProps>;
    "00 Primary button"?: PrimitiveOverrideProps<FlexProps>;
    "Ver Liga"?: PrimitiveOverrideProps<TextProps>;
    logoequipo?: PrimitiveOverrideProps<ImageProps>;
    Header?: PrimitiveOverrideProps<ViewProps>;
    "LIGA MUNICIPAL DE BEISBOL"?: PrimitiveOverrideProps<TextProps>;
    Deporte?: PrimitiveOverrideProps<TextProps>;
    Categoria?: PrimitiveOverrideProps<TextProps>;
    " Subheading"?: PrimitiveOverrideProps<TextProps>;
    "Product name303119"?: PrimitiveOverrideProps<TextProps>;
    "Product name303118"?: PrimitiveOverrideProps<TextProps>;
    "Product name303117"?: PrimitiveOverrideProps<TextProps>;
    BEISBOL?: PrimitiveOverrideProps<TextProps>;
    Xalisco?: PrimitiveOverrideProps<TextProps>;
    Primera?: PrimitiveOverrideProps<TextProps>;
    Contacto?: PrimitiveOverrideProps<TextProps>;
    "Product name303110"?: PrimitiveOverrideProps<TextProps>;
    Nayarit?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CardligaBeisbolProps = React.PropsWithChildren<Partial<ViewProps> & {
    ligas?: Ligas;
} & {
    overrides?: CardligaBeisbolOverridesProps | undefined | null;
}>;
export default function CardligaBeisbol(props: CardligaBeisbolProps): React.ReactElement;
