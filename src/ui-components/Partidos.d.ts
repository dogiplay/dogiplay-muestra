/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Partidos } from "../models";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type PartidosOverridesProps = {
    "32412918"?: PrimitiveOverrideProps<TextProps>;
    "32412919"?: PrimitiveOverrideProps<TextProps>;
    Partidos?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 14"?: PrimitiveOverrideProps<ViewProps>;
    VS?: PrimitiveOverrideProps<TextProps>;
    EQUIPO12412916?: PrimitiveOverrideProps<TextProps>;
    EQUIPO12412917?: PrimitiveOverrideProps<TextProps>;
    J11?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 15"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 16"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type PartidosProps = React.PropsWithChildren<Partial<ViewProps> & {
    partidos?: Partidos;
} & {
    overrides?: PartidosOverridesProps | undefined | null;
}>;
export default function Partidos(props: PartidosProps): React.ReactElement;
