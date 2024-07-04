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
export declare type AtletasCreateFormInputValues = {
    nombre?: string;
    foto?: string;
    equipoclub?: string;
    disciplina?: string;
    edad?: number;
    recordActual?: string;
    pais?: string;
    ciudad?: string;
    telefono?: string;
    categoria?: string;
    espacio2?: string;
    espacio1?: string;
    espacio4?: string;
    espacio5?: string;
    espacio3?: string;
    especialidad?: number;
    recordespecialidad?: number;
    estado?: string;
    peso?: string;
    espacio6fiscul?: string;
    espacio7fiscul?: string;
    espacio8fiscul?: string;
    tipo?: string;
};
export declare type AtletasCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    foto?: ValidationFunction<string>;
    equipoclub?: ValidationFunction<string>;
    disciplina?: ValidationFunction<string>;
    edad?: ValidationFunction<number>;
    recordActual?: ValidationFunction<string>;
    pais?: ValidationFunction<string>;
    ciudad?: ValidationFunction<string>;
    telefono?: ValidationFunction<string>;
    categoria?: ValidationFunction<string>;
    espacio2?: ValidationFunction<string>;
    espacio1?: ValidationFunction<string>;
    espacio4?: ValidationFunction<string>;
    espacio5?: ValidationFunction<string>;
    espacio3?: ValidationFunction<string>;
    especialidad?: ValidationFunction<number>;
    recordespecialidad?: ValidationFunction<number>;
    estado?: ValidationFunction<string>;
    peso?: ValidationFunction<string>;
    espacio6fiscul?: ValidationFunction<string>;
    espacio7fiscul?: ValidationFunction<string>;
    espacio8fiscul?: ValidationFunction<string>;
    tipo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AtletasCreateFormOverridesProps = {
    AtletasCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    foto?: PrimitiveOverrideProps<TextFieldProps>;
    equipoclub?: PrimitiveOverrideProps<TextFieldProps>;
    disciplina?: PrimitiveOverrideProps<TextFieldProps>;
    edad?: PrimitiveOverrideProps<TextFieldProps>;
    recordActual?: PrimitiveOverrideProps<TextFieldProps>;
    pais?: PrimitiveOverrideProps<TextFieldProps>;
    ciudad?: PrimitiveOverrideProps<TextFieldProps>;
    telefono?: PrimitiveOverrideProps<TextFieldProps>;
    categoria?: PrimitiveOverrideProps<TextFieldProps>;
    espacio2?: PrimitiveOverrideProps<TextFieldProps>;
    espacio1?: PrimitiveOverrideProps<TextFieldProps>;
    espacio4?: PrimitiveOverrideProps<TextFieldProps>;
    espacio5?: PrimitiveOverrideProps<TextFieldProps>;
    espacio3?: PrimitiveOverrideProps<TextFieldProps>;
    especialidad?: PrimitiveOverrideProps<TextFieldProps>;
    recordespecialidad?: PrimitiveOverrideProps<TextFieldProps>;
    estado?: PrimitiveOverrideProps<TextFieldProps>;
    peso?: PrimitiveOverrideProps<TextFieldProps>;
    espacio6fiscul?: PrimitiveOverrideProps<TextFieldProps>;
    espacio7fiscul?: PrimitiveOverrideProps<TextFieldProps>;
    espacio8fiscul?: PrimitiveOverrideProps<TextFieldProps>;
    tipo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AtletasCreateFormProps = React.PropsWithChildren<{
    overrides?: AtletasCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AtletasCreateFormInputValues) => AtletasCreateFormInputValues;
    onSuccess?: (fields: AtletasCreateFormInputValues) => void;
    onError?: (fields: AtletasCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AtletasCreateFormInputValues) => AtletasCreateFormInputValues;
    onValidate?: AtletasCreateFormValidationValues;
} & React.CSSProperties>;
export default function AtletasCreateForm(props: AtletasCreateFormProps): React.ReactElement;
