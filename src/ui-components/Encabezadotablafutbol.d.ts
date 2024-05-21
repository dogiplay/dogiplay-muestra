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
export declare type EncabezadotablafutbolOverridesProps = {
    Encabezadotablafutbol?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 22"?: PrimitiveOverrideProps<ViewProps>;
    J?: PrimitiveOverrideProps<TextProps>;
    G?: PrimitiveOverrideProps<TextProps>;
    P?: PrimitiveOverrideProps<TextProps>;
    E?: PrimitiveOverrideProps<TextProps>;
    PTS?: PrimitiveOverrideProps<TextProps>;
    EQUIPO?: PrimitiveOverrideProps<TextProps>;
    MANAGER?: PrimitiveOverrideProps<TextProps>;
    GF?: PrimitiveOverrideProps<TextProps>;
    GC?: PrimitiveOverrideProps<TextProps>;
    DG?: PrimitiveOverrideProps<TextProps>;
    "Star 3"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 13"?: PrimitiveOverrideProps<IconProps>;
    "Star 6"?: PrimitiveOverrideProps<IconProps>;
    "Star 7"?: PrimitiveOverrideProps<IconProps>;
    RESULTADOS?: PrimitiveOverrideProps<TextProps>;
    "TODAS LAS JORNADAS"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type EncabezadotablafutbolProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: EncabezadotablafutbolOverridesProps | undefined | null;
}>;
export default function Encabezadotablafutbol(props: EncabezadotablafutbolProps): React.ReactElement;
