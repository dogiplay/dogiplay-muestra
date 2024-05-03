/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Jugadores } from "../models";
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
export declare type JugadoresUpdateFormInputValues = {
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
    tipocuenta?: number;
    futgoles?: number;
    futasisgol?: number;
    futtarjetasallas?: number;
    futtarjetasrojas?: number;
    beiponches?: number;
    beicarrerashechas?: number;
    beicarrerasproducid?: number;
    beihr?: number;
    beihits?: number;
    beifly?: number;
    beirolas?: number;
    beiporcentajebateo?: number;
    mvp?: number;
    beipitentradaslanzadas?: number;
    beipitcarreraslimpias?: number;
    beipithitstotales?: number;
    beipitponchestotales?: number;
    beipitera?: number;
    beipitjuegosganados?: number;
    beipitjuegosperdidos?: number;
};
export declare type JugadoresUpdateFormValidationValues = {
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
    tipocuenta?: ValidationFunction<number>;
    futgoles?: ValidationFunction<number>;
    futasisgol?: ValidationFunction<number>;
    futtarjetasallas?: ValidationFunction<number>;
    futtarjetasrojas?: ValidationFunction<number>;
    beiponches?: ValidationFunction<number>;
    beicarrerashechas?: ValidationFunction<number>;
    beicarrerasproducid?: ValidationFunction<number>;
    beihr?: ValidationFunction<number>;
    beihits?: ValidationFunction<number>;
    beifly?: ValidationFunction<number>;
    beirolas?: ValidationFunction<number>;
    beiporcentajebateo?: ValidationFunction<number>;
    mvp?: ValidationFunction<number>;
    beipitentradaslanzadas?: ValidationFunction<number>;
    beipitcarreraslimpias?: ValidationFunction<number>;
    beipithitstotales?: ValidationFunction<number>;
    beipitponchestotales?: ValidationFunction<number>;
    beipitera?: ValidationFunction<number>;
    beipitjuegosganados?: ValidationFunction<number>;
    beipitjuegosperdidos?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JugadoresUpdateFormOverridesProps = {
    JugadoresUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
    tipocuenta?: PrimitiveOverrideProps<TextFieldProps>;
    futgoles?: PrimitiveOverrideProps<TextFieldProps>;
    futasisgol?: PrimitiveOverrideProps<TextFieldProps>;
    futtarjetasallas?: PrimitiveOverrideProps<TextFieldProps>;
    futtarjetasrojas?: PrimitiveOverrideProps<TextFieldProps>;
    beiponches?: PrimitiveOverrideProps<TextFieldProps>;
    beicarrerashechas?: PrimitiveOverrideProps<TextFieldProps>;
    beicarrerasproducid?: PrimitiveOverrideProps<TextFieldProps>;
    beihr?: PrimitiveOverrideProps<TextFieldProps>;
    beihits?: PrimitiveOverrideProps<TextFieldProps>;
    beifly?: PrimitiveOverrideProps<TextFieldProps>;
    beirolas?: PrimitiveOverrideProps<TextFieldProps>;
    beiporcentajebateo?: PrimitiveOverrideProps<TextFieldProps>;
    mvp?: PrimitiveOverrideProps<TextFieldProps>;
    beipitentradaslanzadas?: PrimitiveOverrideProps<TextFieldProps>;
    beipitcarreraslimpias?: PrimitiveOverrideProps<TextFieldProps>;
    beipithitstotales?: PrimitiveOverrideProps<TextFieldProps>;
    beipitponchestotales?: PrimitiveOverrideProps<TextFieldProps>;
    beipitera?: PrimitiveOverrideProps<TextFieldProps>;
    beipitjuegosganados?: PrimitiveOverrideProps<TextFieldProps>;
    beipitjuegosperdidos?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type JugadoresUpdateFormProps = React.PropsWithChildren<{
    overrides?: JugadoresUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    jugadores?: Jugadores;
    onSubmit?: (fields: JugadoresUpdateFormInputValues) => JugadoresUpdateFormInputValues;
    onSuccess?: (fields: JugadoresUpdateFormInputValues) => void;
    onError?: (fields: JugadoresUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: JugadoresUpdateFormInputValues) => JugadoresUpdateFormInputValues;
    onValidate?: JugadoresUpdateFormValidationValues;
} & React.CSSProperties>;
export default function JugadoresUpdateForm(props: JugadoresUpdateFormProps): React.ReactElement;
