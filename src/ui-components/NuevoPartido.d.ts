/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DividerProps, GridProps, HeadingProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NuevoPartidoInputValues = {
    rival?: string;
    fecha?: string;
    hora?: string;
    resultado_equipo?: string;
    resultado_rival?: string;
    lugar?: string;
    observaciones?: string;
    jugador_partido?: string;
    jornada?: number;
    equipo1?: string;
    equipo2?: string;
    resultado_equipo1?: number;
    resultado_equipo2?: number;
    clave_liga?: string;
};
export declare type NuevoPartidoValidationValues = {
    rival?: ValidationFunction<string>;
    fecha?: ValidationFunction<string>;
    hora?: ValidationFunction<string>;
    resultado_equipo?: ValidationFunction<string>;
    resultado_rival?: ValidationFunction<string>;
    lugar?: ValidationFunction<string>;
    observaciones?: ValidationFunction<string>;
    jugador_partido?: ValidationFunction<string>;
    jornada?: ValidationFunction<number>;
    equipo1?: ValidationFunction<string>;
    equipo2?: ValidationFunction<string>;
    resultado_equipo1?: ValidationFunction<number>;
    resultado_equipo2?: ValidationFunction<number>;
    clave_liga?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NuevoPartidoOverridesProps = {
    NuevoPartidoGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement1?: PrimitiveOverrideProps<HeadingProps>;
    SectionalElement0?: PrimitiveOverrideProps<DividerProps>;
    rival?: PrimitiveOverrideProps<TextFieldProps>;
    fecha?: PrimitiveOverrideProps<TextFieldProps>;
    hora?: PrimitiveOverrideProps<TextFieldProps>;
    resultado_equipo?: PrimitiveOverrideProps<TextFieldProps>;
    resultado_rival?: PrimitiveOverrideProps<TextFieldProps>;
    lugar?: PrimitiveOverrideProps<TextFieldProps>;
    observaciones?: PrimitiveOverrideProps<TextFieldProps>;
    jugador_partido?: PrimitiveOverrideProps<TextFieldProps>;
    jornada?: PrimitiveOverrideProps<TextFieldProps>;
    equipo1?: PrimitiveOverrideProps<TextFieldProps>;
    equipo2?: PrimitiveOverrideProps<TextFieldProps>;
    resultado_equipo1?: PrimitiveOverrideProps<TextFieldProps>;
    resultado_equipo2?: PrimitiveOverrideProps<TextFieldProps>;
    clave_liga?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NuevoPartidoProps = React.PropsWithChildren<{
    overrides?: NuevoPartidoOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NuevoPartidoInputValues) => NuevoPartidoInputValues;
    onSuccess?: (fields: NuevoPartidoInputValues) => void;
    onError?: (fields: NuevoPartidoInputValues, errorMessage: string) => void;
    onChange?: (fields: NuevoPartidoInputValues) => NuevoPartidoInputValues;
    onValidate?: NuevoPartidoValidationValues;
} & React.CSSProperties>;
export default function NuevoPartido(props: NuevoPartidoProps): React.ReactElement;
