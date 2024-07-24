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
export declare type UniversidadesCreateFormInputValues = {
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
export declare type UniversidadesCreateFormValidationValues = {
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
export declare type UniversidadesCreateFormOverridesProps = {
    UniversidadesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type UniversidadesCreateFormProps = React.PropsWithChildren<{
    overrides?: UniversidadesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UniversidadesCreateFormInputValues) => UniversidadesCreateFormInputValues;
    onSuccess?: (fields: UniversidadesCreateFormInputValues) => void;
    onError?: (fields: UniversidadesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UniversidadesCreateFormInputValues) => UniversidadesCreateFormInputValues;
    onValidate?: UniversidadesCreateFormValidationValues;
} & React.CSSProperties>;
export default function UniversidadesCreateForm(props: UniversidadesCreateFormProps): React.ReactElement;
