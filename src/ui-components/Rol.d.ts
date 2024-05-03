/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type RolOverridesProps = {
    Rol?: PrimitiveOverrideProps<ViewProps>;
    "Las Estrellas del Deporte"?: PrimitiveOverrideProps<TextProps>;
    "Star 2"?: PrimitiveOverrideProps<IconProps>;
    xplay?: PrimitiveOverrideProps<TextProps>;
    "Selecciona tu Rol Principal"?: PrimitiveOverrideProps<TextProps>;
    ButtonPresidente?: PrimitiveOverrideProps<FlexProps>;
    "Presidente de Liga"?: PrimitiveOverrideProps<TextProps>;
    ButtonManager?: PrimitiveOverrideProps<FlexProps>;
    "Manager/Capit\u00E1n"?: PrimitiveOverrideProps<TextProps>;
    ButtonJugador?: PrimitiveOverrideProps<FlexProps>;
    Jugador?: PrimitiveOverrideProps<TextProps>;
    ButtonAnotador?: PrimitiveOverrideProps<FlexProps>;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    Anotador?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    Cerrar?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type RolProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: RolOverridesProps | undefined | null;
}>;
export default function Rol(props: RolProps): React.ReactElement;
