/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type EncabezadotablabeisbolOverridesProps = {
    Encabezadotablabeisbol?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 11"?: PrimitiveOverrideProps<ViewProps>;
    EQUIPO?: PrimitiveOverrideProps<TextProps>;
    MANAGER?: PrimitiveOverrideProps<TextProps>;
    "C.T."?: PrimitiveOverrideProps<TextProps>;
    "HR T."?: PrimitiveOverrideProps<TextProps>;
    PJ?: PrimitiveOverrideProps<TextProps>;
    PG?: PrimitiveOverrideProps<TextProps>;
    PP?: PrimitiveOverrideProps<TextProps>;
    PE?: PrimitiveOverrideProps<TextProps>;
    PUNTOS?: PrimitiveOverrideProps<TextProps>;
    "Star 3"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 13"?: PrimitiveOverrideProps<ViewProps>;
    RESULTADOS?: PrimitiveOverrideProps<TextProps>;
    "Star 6"?: PrimitiveOverrideProps<IconProps>;
    "Star 7"?: PrimitiveOverrideProps<IconProps>;
    "TODAS LAS JORNADAS"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type EncabezadotablabeisbolProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: EncabezadotablabeisbolOverridesProps | undefined | null;
}>;
export default function Encabezadotablabeisbol(props: EncabezadotablabeisbolProps): React.ReactElement;
