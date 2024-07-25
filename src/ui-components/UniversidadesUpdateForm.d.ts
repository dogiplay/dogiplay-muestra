/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Universidades } from "../models";
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
export declare type UniversidadesUpdateFormInputValues = {
    nombreuniversidad?: string;
    pais?: string;
    estado?: string;
    telefono?: string;
    fotopais?: string;
    foto?: string;
    nombredeportista?: string;
    logouniversidad?: string;
    carrera?: string;
    deporte?: string;
    descripcion?: string;
    tipo?: number;
};
export declare type UniversidadesUpdateFormValidationValues = {
    nombreuniversidad?: ValidationFunction<string>;
    pais?: ValidationFunction<string>;
    estado?: ValidationFunction<string>;
    telefono?: ValidationFunction<string>;
    fotopais?: ValidationFunction<string>;
    foto?: ValidationFunction<string>;
    nombredeportista?: ValidationFunction<string>;
    logouniversidad?: ValidationFunction<string>;
    carrera?: ValidationFunction<string>;
    deporte?: ValidationFunction<string>;
    descripcion?: ValidationFunction<string>;
    tipo?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UniversidadesUpdateFormOverridesProps = {
    UniversidadesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombreuniversidad?: PrimitiveOverrideProps<TextFieldProps>;
    pais?: PrimitiveOverrideProps<TextFieldProps>;
    estado?: PrimitiveOverrideProps<TextFieldProps>;
    telefono?: PrimitiveOverrideProps<TextFieldProps>;
    fotopais?: PrimitiveOverrideProps<TextFieldProps>;
    foto?: PrimitiveOverrideProps<TextFieldProps>;
    nombredeportista?: PrimitiveOverrideProps<TextFieldProps>;
    logouniversidad?: PrimitiveOverrideProps<TextFieldProps>;
    carrera?: PrimitiveOverrideProps<TextFieldProps>;
    deporte?: PrimitiveOverrideProps<TextFieldProps>;
    descripcion?: PrimitiveOverrideProps<TextFieldProps>;
    tipo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UniversidadesUpdateFormProps = React.PropsWithChildren<{
    overrides?: UniversidadesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    universidades?: Universidades;
    onSubmit?: (fields: UniversidadesUpdateFormInputValues) => UniversidadesUpdateFormInputValues;
    onSuccess?: (fields: UniversidadesUpdateFormInputValues) => void;
    onError?: (fields: UniversidadesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UniversidadesUpdateFormInputValues) => UniversidadesUpdateFormInputValues;
    onValidate?: UniversidadesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UniversidadesUpdateForm(props: UniversidadesUpdateFormProps): React.ReactElement;
