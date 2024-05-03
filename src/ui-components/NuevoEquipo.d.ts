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
export declare type NuevoEquipoInputValues = {
    nombre?: string;
    torneo?: string;
    logo?: string;
    categoria?: string;
    idliga?: string;
    idtorneo?: string;
    club?: string;
    idcategoria?: number;
    manager?: string;
    futgolesfavor?: number;
    futgolescontra?: number;
    partidosjugados?: number;
    partidosganados?: number;
    partidosperdidos?: number;
    partidosempatados?: number;
    puntos?: number;
    posiciontabla?: number;
    patrocinador?: string;
    beicarreras?: number;
    beihr?: number;
};
export declare type NuevoEquipoValidationValues = {
    nombre?: ValidationFunction<string>;
    torneo?: ValidationFunction<string>;
    logo?: ValidationFunction<string>;
    categoria?: ValidationFunction<string>;
    idliga?: ValidationFunction<string>;
    idtorneo?: ValidationFunction<string>;
    club?: ValidationFunction<string>;
    idcategoria?: ValidationFunction<number>;
    manager?: ValidationFunction<string>;
    futgolesfavor?: ValidationFunction<number>;
    futgolescontra?: ValidationFunction<number>;
    partidosjugados?: ValidationFunction<number>;
    partidosganados?: ValidationFunction<number>;
    partidosperdidos?: ValidationFunction<number>;
    partidosempatados?: ValidationFunction<number>;
    puntos?: ValidationFunction<number>;
    posiciontabla?: ValidationFunction<number>;
    patrocinador?: ValidationFunction<string>;
    beicarreras?: ValidationFunction<number>;
    beihr?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NuevoEquipoOverridesProps = {
    NuevoEquipoGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement1?: PrimitiveOverrideProps<HeadingProps>;
    SectionalElement0?: PrimitiveOverrideProps<DividerProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    torneo?: PrimitiveOverrideProps<TextFieldProps>;
    logo?: PrimitiveOverrideProps<TextFieldProps>;
    categoria?: PrimitiveOverrideProps<TextFieldProps>;
    idliga?: PrimitiveOverrideProps<TextFieldProps>;
    idtorneo?: PrimitiveOverrideProps<TextFieldProps>;
    club?: PrimitiveOverrideProps<TextFieldProps>;
    idcategoria?: PrimitiveOverrideProps<TextFieldProps>;
    manager?: PrimitiveOverrideProps<TextFieldProps>;
    futgolesfavor?: PrimitiveOverrideProps<TextFieldProps>;
    futgolescontra?: PrimitiveOverrideProps<TextFieldProps>;
    partidosjugados?: PrimitiveOverrideProps<TextFieldProps>;
    partidosganados?: PrimitiveOverrideProps<TextFieldProps>;
    partidosperdidos?: PrimitiveOverrideProps<TextFieldProps>;
    partidosempatados?: PrimitiveOverrideProps<TextFieldProps>;
    puntos?: PrimitiveOverrideProps<TextFieldProps>;
    posiciontabla?: PrimitiveOverrideProps<TextFieldProps>;
    patrocinador?: PrimitiveOverrideProps<TextFieldProps>;
    beicarreras?: PrimitiveOverrideProps<TextFieldProps>;
    beihr?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NuevoEquipoProps = React.PropsWithChildren<{
    overrides?: NuevoEquipoOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NuevoEquipoInputValues) => NuevoEquipoInputValues;
    onSuccess?: (fields: NuevoEquipoInputValues) => void;
    onError?: (fields: NuevoEquipoInputValues, errorMessage: string) => void;
    onChange?: (fields: NuevoEquipoInputValues) => NuevoEquipoInputValues;
    onValidate?: NuevoEquipoValidationValues;
} & React.CSSProperties>;
export default function NuevoEquipo(props: NuevoEquipoProps): React.ReactElement;
