/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
    "Product Info"?: PrimitiveOverrideProps<FlexProps>;
    "Product info"?: PrimitiveOverrideProps<FlexProps>;
    "Product name"?: PrimitiveOverrideProps<TextProps>;
    " Subheading51664"?: PrimitiveOverrideProps<TextProps>;
    " Subheading52688"?: PrimitiveOverrideProps<TextProps>;
    Price51665?: PrimitiveOverrideProps<TextProps>;
    Description?: PrimitiveOverrideProps<TextProps>;
    Price51667?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    "Ver equipos"?: PrimitiveOverrideProps<TextProps>;
    Carousel?: PrimitiveOverrideProps<FlexProps>;
    Image?: PrimitiveOverrideProps<ViewProps>;
    Header?: PrimitiveOverrideProps<ViewProps>;
    Liga?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CardligaProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CardligaOverridesProps | undefined | null;
}>;
export default function Cardliga(props: CardligaProps): React.ReactElement;
