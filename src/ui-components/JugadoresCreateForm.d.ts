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
export declare type JugadoresCreateFormInputValues = {
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
};
export declare type JugadoresCreateFormValidationValues = {
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
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JugadoresCreateFormOverridesProps = {
    JugadoresCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
} & EscapeHatchProps;
export declare type JugadoresCreateFormProps = React.PropsWithChildren<{
    overrides?: JugadoresCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: JugadoresCreateFormInputValues) => JugadoresCreateFormInputValues;
    onSuccess?: (fields: JugadoresCreateFormInputValues) => void;
    onError?: (fields: JugadoresCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: JugadoresCreateFormInputValues) => JugadoresCreateFormInputValues;
    onValidate?: JugadoresCreateFormValidationValues;
} & React.CSSProperties>;
export default function JugadoresCreateForm(props: JugadoresCreateFormProps): React.ReactElement;
