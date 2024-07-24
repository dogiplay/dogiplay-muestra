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
export declare type PatrocinadorOverridesProps = {
    Patrocinador?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 113"?: PrimitiveOverrideProps<ViewProps>;
    "ANUANCIATE AQUI 1"?: PrimitiveOverrideProps<ImageProps>;
    buttonLiga?: PrimitiveOverrideProps<FlexProps>;
    "Ver sitio"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PatrocinadorProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PatrocinadorOverridesProps | undefined | null;
}>;
export default function Patrocinador(props: PatrocinadorProps): React.ReactElement;
