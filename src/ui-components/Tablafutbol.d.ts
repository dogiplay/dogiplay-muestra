/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Equipos } from "../models";
import { TablabeisbolProps } from "./Tablabeisbol";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type TablafutbolOverridesProps = {
    "30"?: PrimitiveOverrideProps<TextProps>;
    Tablafutbol?: PrimitiveOverrideProps<ViewProps>;
    tablabeisbol?: TablabeisbolProps;
    "Frame 1"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 12"?: PrimitiveOverrideProps<ViewProps>;
    PJ?: PrimitiveOverrideProps<TextProps>;
    PG?: PrimitiveOverrideProps<TextProps>;
    PP?: PrimitiveOverrideProps<TextProps>;
    PE?: PrimitiveOverrideProps<TextProps>;
    "logotipo 1"?: PrimitiveOverrideProps<ImageProps>;
    EQUIPO?: PrimitiveOverrideProps<TextProps>;
    MANAGER?: PrimitiveOverrideProps<TextProps>;
    GF?: PrimitiveOverrideProps<TextProps>;
    GC?: PrimitiveOverrideProps<TextProps>;
    DG?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TablafutbolProps = React.PropsWithChildren<Partial<ViewProps> & {
    equipos?: Equipos;
} & {
    overrides?: TablafutbolOverridesProps | undefined | null;
}>;
export default function Tablafutbol(props: TablafutbolProps): React.ReactElement;
