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
export declare type SalonFamaCreateFormInputValues = {
    nombre?: string;
    pais?: string;
    estado?: string;
    deporte?: string;
    logros?: string;
    foto?: string;
    descripcion1?: string;
    descripcion2?: string;
    fotopais?: string;
};
export declare type SalonFamaCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    pais?: ValidationFunction<string>;
    estado?: ValidationFunction<string>;
    deporte?: ValidationFunction<string>;
    logros?: ValidationFunction<string>;
    foto?: ValidationFunction<string>;
    descripcion1?: ValidationFunction<string>;
    descripcion2?: ValidationFunction<string>;
    fotopais?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SalonFamaCreateFormOverridesProps = {
    SalonFamaCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    pais?: PrimitiveOverrideProps<TextFieldProps>;
    estado?: PrimitiveOverrideProps<TextFieldProps>;
    deporte?: PrimitiveOverrideProps<TextFieldProps>;
    logros?: PrimitiveOverrideProps<TextFieldProps>;
    foto?: PrimitiveOverrideProps<TextFieldProps>;
    descripcion1?: PrimitiveOverrideProps<TextFieldProps>;
    descripcion2?: PrimitiveOverrideProps<TextFieldProps>;
    fotopais?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SalonFamaCreateFormProps = React.PropsWithChildren<{
    overrides?: SalonFamaCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SalonFamaCreateFormInputValues) => SalonFamaCreateFormInputValues;
    onSuccess?: (fields: SalonFamaCreateFormInputValues) => void;
    onError?: (fields: SalonFamaCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SalonFamaCreateFormInputValues) => SalonFamaCreateFormInputValues;
    onValidate?: SalonFamaCreateFormValidationValues;
} & React.CSSProperties>;
export default function SalonFamaCreateForm(props: SalonFamaCreateFormProps): React.ReactElement;
