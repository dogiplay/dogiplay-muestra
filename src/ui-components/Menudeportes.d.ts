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
export declare type MenudeportesOverridesProps = {
    Menudeportes?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    "05 Tag139159"?: PrimitiveOverrideProps<FlexProps>;
    Label139160?: PrimitiveOverrideProps<TextProps>;
    "05 Tag139155"?: PrimitiveOverrideProps<FlexProps>;
    Label139156?: PrimitiveOverrideProps<TextProps>;
    "05 Tag139157"?: PrimitiveOverrideProps<FlexProps>;
    Label139158?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MenudeportesProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: MenudeportesOverridesProps | undefined | null;
}>;
export default function Menudeportes(props: MenudeportesProps): React.ReactElement;
