/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Equipos } from "../models";
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
export declare type TablabeisbolOverridesProps = {
    "11"?: PrimitiveOverrideProps<TextProps>;
    "22"?: PrimitiveOverrideProps<TextProps>;
    "30"?: PrimitiveOverrideProps<TextProps>;
    Tablabeisbol?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 12"?: PrimitiveOverrideProps<ViewProps>;
    "logotipo 1"?: PrimitiveOverrideProps<ImageProps>;
    EQUIPO?: PrimitiveOverrideProps<TextProps>;
    MANAGER?: PrimitiveOverrideProps<TextProps>;
    PJ?: PrimitiveOverrideProps<TextProps>;
    PG?: PrimitiveOverrideProps<TextProps>;
    PP?: PrimitiveOverrideProps<TextProps>;
    PE?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TablabeisbolProps = React.PropsWithChildren<Partial<ViewProps> & {
    equipos?: Equipos;
} & {
    overrides?: TablabeisbolOverridesProps | undefined | null;
}>;
export default function Tablabeisbol(props: TablabeisbolProps): React.ReactElement;
