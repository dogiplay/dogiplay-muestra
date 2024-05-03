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
export declare type StatsJugadoresCreateFormInputValues = {
    idjugador?: string;
    idpartido?: string;
    iddeporte?: string;
    idtorneo?: string;
    tipocuenta?: number;
    futgoles?: number;
    bascanastas?: number;
    baspuntos?: number;
    beicarrerashechas?: number;
    beiponches?: number;
    beihr?: number;
    beihits?: number;
    beifly?: number;
    beirolas?: number;
    futasisgol?: number;
    beicarrerasproducidas?: number;
    futtarjetasamarillas?: number;
    futtarjetasrojas?: number;
};
export declare type StatsJugadoresCreateFormValidationValues = {
    idjugador?: ValidationFunction<string>;
    idpartido?: ValidationFunction<string>;
    iddeporte?: ValidationFunction<string>;
    idtorneo?: ValidationFunction<string>;
    tipocuenta?: ValidationFunction<number>;
    futgoles?: ValidationFunction<number>;
    bascanastas?: ValidationFunction<number>;
    baspuntos?: ValidationFunction<number>;
    beicarrerashechas?: ValidationFunction<number>;
    beiponches?: ValidationFunction<number>;
    beihr?: ValidationFunction<number>;
    beihits?: ValidationFunction<number>;
    beifly?: ValidationFunction<number>;
    beirolas?: ValidationFunction<number>;
    futasisgol?: ValidationFunction<number>;
    beicarrerasproducidas?: ValidationFunction<number>;
    futtarjetasamarillas?: ValidationFunction<number>;
    futtarjetasrojas?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StatsJugadoresCreateFormOverridesProps = {
    StatsJugadoresCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    idjugador?: PrimitiveOverrideProps<TextFieldProps>;
    idpartido?: PrimitiveOverrideProps<TextFieldProps>;
    iddeporte?: PrimitiveOverrideProps<TextFieldProps>;
    idtorneo?: PrimitiveOverrideProps<TextFieldProps>;
    tipocuenta?: PrimitiveOverrideProps<TextFieldProps>;
    futgoles?: PrimitiveOverrideProps<TextFieldProps>;
    bascanastas?: PrimitiveOverrideProps<TextFieldProps>;
    baspuntos?: PrimitiveOverrideProps<TextFieldProps>;
    beicarrerashechas?: PrimitiveOverrideProps<TextFieldProps>;
    beiponches?: PrimitiveOverrideProps<TextFieldProps>;
    beihr?: PrimitiveOverrideProps<TextFieldProps>;
    beihits?: PrimitiveOverrideProps<TextFieldProps>;
    beifly?: PrimitiveOverrideProps<TextFieldProps>;
    beirolas?: PrimitiveOverrideProps<TextFieldProps>;
    futasisgol?: PrimitiveOverrideProps<TextFieldProps>;
    beicarrerasproducidas?: PrimitiveOverrideProps<TextFieldProps>;
    futtarjetasamarillas?: PrimitiveOverrideProps<TextFieldProps>;
    futtarjetasrojas?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StatsJugadoresCreateFormProps = React.PropsWithChildren<{
    overrides?: StatsJugadoresCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StatsJugadoresCreateFormInputValues) => StatsJugadoresCreateFormInputValues;
    onSuccess?: (fields: StatsJugadoresCreateFormInputValues) => void;
    onError?: (fields: StatsJugadoresCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StatsJugadoresCreateFormInputValues) => StatsJugadoresCreateFormInputValues;
    onValidate?: StatsJugadoresCreateFormValidationValues;
} & React.CSSProperties>;
export default function StatsJugadoresCreateForm(props: StatsJugadoresCreateFormProps): React.ReactElement;
