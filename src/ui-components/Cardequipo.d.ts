/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Equipos } from "../models";
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
export declare type CardequipoOverridesProps = {
    "13"?: PrimitiveOverrideProps<TextProps>;
    "33"?: PrimitiveOverrideProps<TextProps>;
    Cardequipo?: PrimitiveOverrideProps<ViewProps>;
    Carousel?: PrimitiveOverrideProps<FlexProps>;
    "05 Tab list"?: PrimitiveOverrideProps<FlexProps>;
    Pill52719?: PrimitiveOverrideProps<FlexProps>;
    "PJ:"?: PrimitiveOverrideProps<TextProps>;
    Pill52721?: PrimitiveOverrideProps<FlexProps>;
    "PG:"?: PrimitiveOverrideProps<TextProps>;
    Pill52723?: PrimitiveOverrideProps<FlexProps>;
    "PP:"?: PrimitiveOverrideProps<TextProps>;
    Pill52725?: PrimitiveOverrideProps<FlexProps>;
    "PE:"?: PrimitiveOverrideProps<TextProps>;
    Header?: PrimitiveOverrideProps<ViewProps>;
    Equipo?: PrimitiveOverrideProps<TextProps>;
    " Subheading"?: PrimitiveOverrideProps<TextProps>;
    "Product name52677"?: PrimitiveOverrideProps<TextProps>;
    "Product name1921953"?: PrimitiveOverrideProps<TextProps>;
    "Product name1921950"?: PrimitiveOverrideProps<TextProps>;
    "Product name1921949"?: PrimitiveOverrideProps<TextProps>;
    logoequipo?: PrimitiveOverrideProps<ImageProps>;
    "05 Tag"?: PrimitiveOverrideProps<FlexProps>;
    Label?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CardequipoProps = React.PropsWithChildren<Partial<ViewProps> & {
    equipos?: Equipos;
} & {
    overrides?: CardequipoOverridesProps | undefined | null;
}>;
export default function Cardequipo(props: CardequipoProps): React.ReactElement;
