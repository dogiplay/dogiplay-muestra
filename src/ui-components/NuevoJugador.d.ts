/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type NuevoJugadorInputValues = {
    iddeporte?: string;
    idequipo?: string;
    nombre?: string;
    idjugador?: string;
    idtorneo?: string;
    deporte?: string;
    user?: string;
    perfil?: string;
    posicion?: string;
    edad?: number;
    numero?: number;
    equipo?: string;
    foto?: string;
    alias?: string;
    beiponches?: number;
    beicarrerashechas?: number;
    beicarrerasproducid?: number;
    beihr?: number;
    beihits?: number;
    beifly?: number;
    beirolas?: number;
    beiporcentajebateo?: number;
    mvp?: number;
    futgoleadorsemana?: number;
    beipitentradaslanzadas?: number;
    beipitcarreraslimpias?: number;
    beipithitstotales?: number;
    beipitponchestotales?: number;
    beipitera?: number;
    beipitjuegosganados?: number;
    beipitjuegosperdidos?: number;
    clave_liga?: string;
    boxajecombates?: number;
    boxajetriunfos?: number;
    boxajederrotas?: number;
    boxajeempates?: number;
    boxKO?: number;
    boxgimnasio?: string;
    pais?: string;
    ciudad?: string;
    categoria?: string;
    ajedrezelo?: number;
    beipitchervelmax?: number;
    beipitchervelprom?: number;
    telefono?: string;
};
export declare type NuevoJugadorValidationValues = {
    iddeporte?: ValidationFunction<string>;
    idequipo?: ValidationFunction<string>;
    nombre?: ValidationFunction<string>;
    idjugador?: ValidationFunction<string>;
    idtorneo?: ValidationFunction<string>;
    deporte?: ValidationFunction<string>;
    user?: ValidationFunction<string>;
    perfil?: ValidationFunction<string>;
    posicion?: ValidationFunction<string>;
    edad?: ValidationFunction<number>;
    numero?: ValidationFunction<number>;
    equipo?: ValidationFunction<string>;
    foto?: ValidationFunction<string>;
    alias?: ValidationFunction<string>;
    beiponches?: ValidationFunction<number>;
    beicarrerashechas?: ValidationFunction<number>;
    beicarrerasproducid?: ValidationFunction<number>;
    beihr?: ValidationFunction<number>;
    beihits?: ValidationFunction<number>;
    beifly?: ValidationFunction<number>;
    beirolas?: ValidationFunction<number>;
    beiporcentajebateo?: ValidationFunction<number>;
    mvp?: ValidationFunction<number>;
    futgoleadorsemana?: ValidationFunction<number>;
    beipitentradaslanzadas?: ValidationFunction<number>;
    beipitcarreraslimpias?: ValidationFunction<number>;
    beipithitstotales?: ValidationFunction<number>;
    beipitponchestotales?: ValidationFunction<number>;
    beipitera?: ValidationFunction<number>;
    beipitjuegosganados?: ValidationFunction<number>;
    beipitjuegosperdidos?: ValidationFunction<number>;
    clave_liga?: ValidationFunction<string>;
    boxajecombates?: ValidationFunction<number>;
    boxajetriunfos?: ValidationFunction<number>;
    boxajederrotas?: ValidationFunction<number>;
    boxajeempates?: ValidationFunction<number>;
    boxKO?: ValidationFunction<number>;
    boxgimnasio?: ValidationFunction<string>;
    pais?: ValidationFunction<string>;
    ciudad?: ValidationFunction<string>;
    categoria?: ValidationFunction<string>;
    ajedrezelo?: ValidationFunction<number>;
    beipitchervelmax?: ValidationFunction<number>;
    beipitchervelprom?: ValidationFunction<number>;
    telefono?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NuevoJugadorOverridesProps = {
    NuevoJugadorGrid?: PrimitiveOverrideProps<GridProps>;
    iddeporte?: PrimitiveOverrideProps<TextFieldProps>;
    idequipo?: PrimitiveOverrideProps<TextFieldProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    idjugador?: PrimitiveOverrideProps<TextFieldProps>;
    idtorneo?: PrimitiveOverrideProps<TextFieldProps>;
    deporte?: PrimitiveOverrideProps<TextFieldProps>;
    user?: PrimitiveOverrideProps<TextFieldProps>;
    perfil?: PrimitiveOverrideProps<TextFieldProps>;
    posicion?: PrimitiveOverrideProps<TextFieldProps>;
    edad?: PrimitiveOverrideProps<TextFieldProps>;
    numero?: PrimitiveOverrideProps<TextFieldProps>;
    equipo?: PrimitiveOverrideProps<TextFieldProps>;
    foto?: PrimitiveOverrideProps<TextFieldProps>;
    alias?: PrimitiveOverrideProps<TextFieldProps>;
    beiponches?: PrimitiveOverrideProps<TextFieldProps>;
    beicarrerashechas?: PrimitiveOverrideProps<TextFieldProps>;
    beicarrerasproducid?: PrimitiveOverrideProps<TextFieldProps>;
    beihr?: PrimitiveOverrideProps<TextFieldProps>;
    beihits?: PrimitiveOverrideProps<TextFieldProps>;
    beifly?: PrimitiveOverrideProps<TextFieldProps>;
    beirolas?: PrimitiveOverrideProps<TextFieldProps>;
    beiporcentajebateo?: PrimitiveOverrideProps<TextFieldProps>;
    mvp?: PrimitiveOverrideProps<TextFieldProps>;
    futgoleadorsemana?: PrimitiveOverrideProps<TextFieldProps>;
    beipitentradaslanzadas?: PrimitiveOverrideProps<TextFieldProps>;
    beipitcarreraslimpias?: PrimitiveOverrideProps<TextFieldProps>;
    beipithitstotales?: PrimitiveOverrideProps<TextFieldProps>;
    beipitponchestotales?: PrimitiveOverrideProps<TextFieldProps>;
    beipitera?: PrimitiveOverrideProps<TextFieldProps>;
    beipitjuegosganados?: PrimitiveOverrideProps<TextFieldProps>;
    beipitjuegosperdidos?: PrimitiveOverrideProps<TextFieldProps>;
    clave_liga?: PrimitiveOverrideProps<TextFieldProps>;
    boxajecombates?: PrimitiveOverrideProps<TextFieldProps>;
    boxajetriunfos?: PrimitiveOverrideProps<TextFieldProps>;
    boxajederrotas?: PrimitiveOverrideProps<TextFieldProps>;
    boxajeempates?: PrimitiveOverrideProps<TextFieldProps>;
    boxKO?: PrimitiveOverrideProps<TextFieldProps>;
    boxgimnasio?: PrimitiveOverrideProps<TextFieldProps>;
    pais?: PrimitiveOverrideProps<TextFieldProps>;
    ciudad?: PrimitiveOverrideProps<TextFieldProps>;
    categoria?: PrimitiveOverrideProps<TextFieldProps>;
    ajedrezelo?: PrimitiveOverrideProps<TextFieldProps>;
    beipitchervelmax?: PrimitiveOverrideProps<TextFieldProps>;
    beipitchervelprom?: PrimitiveOverrideProps<TextFieldProps>;
    telefono?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NuevoJugadorProps = React.PropsWithChildren<{
    overrides?: NuevoJugadorOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NuevoJugadorInputValues) => NuevoJugadorInputValues;
    onSuccess?: (fields: NuevoJugadorInputValues) => void;
    onError?: (fields: NuevoJugadorInputValues, errorMessage: string) => void;
    onChange?: (fields: NuevoJugadorInputValues) => NuevoJugadorInputValues;
    onValidate?: NuevoJugadorValidationValues;
} & React.CSSProperties>;
export default function NuevoJugador(props: NuevoJugadorProps): React.ReactElement;
