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
export declare type DeportesOverridesProps = {
    Deportes?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 8"?: PrimitiveOverrideProps<ViewProps>;
    "Star 4"?: PrimitiveOverrideProps<IconProps>;
    "Star 5"?: PrimitiveOverrideProps<IconProps>;
    botonBeisbol?: PrimitiveOverrideProps<FlexProps>;
    Beisbol?: PrimitiveOverrideProps<TextProps>;
    "Jugador que se respeta debe estar aqu\u00ED"?: PrimitiveOverrideProps<TextProps>;
    botonFutbol?: PrimitiveOverrideProps<FlexProps>;
    Futbol?: PrimitiveOverrideProps<TextProps>;
    "Estad\u00EDsticas por equipo y jugador, tablas de posiciones, lider de goleo, lider de HR, y mucho m\u00E1s."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DeportesProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DeportesOverridesProps | undefined | null;
}>;
export default function Deportes(props: DeportesProps): React.ReactElement;
