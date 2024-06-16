/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { LogodogiplayProps } from "./Logodogiplay";
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
export declare type CardContactoOverridesProps = {
    CardContacto?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 17"?: PrimitiveOverrideProps<IconProps>;
    logodogiplay?: LogodogiplayProps;
    "Star 6"?: PrimitiveOverrideProps<IconProps>;
    "Star 7"?: PrimitiveOverrideProps<IconProps>;
    "Registra tu equipo o liga por Whatsapp al"?: PrimitiveOverrideProps<TextProps>;
    "Ofrecemos control total de estad\u00EDsticas por equipo y jugadores"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 18"?: PrimitiveOverrideProps<ViewProps>;
    "311 7436503"?: PrimitiveOverrideProps<TextProps>;
    "Tabla de posiciones general Goleadores / MVPs / HR TOP Resultados de todas las jornadas Todo listo para consultar en cualquier momento"?: PrimitiveOverrideProps<TextProps>;
    "Todas las ligas serias de M\u00E9xico estar\u00E1n AQUI, no dejes la tuya fuera."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CardContactoProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CardContactoOverridesProps | undefined | null;
}>;
export default function CardContacto(props: CardContactoProps): React.ReactElement;
