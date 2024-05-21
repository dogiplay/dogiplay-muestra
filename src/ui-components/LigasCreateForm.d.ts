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
export declare type LigasCreateFormInputValues = {
    idliga?: string;
    idpresidente?: string;
    clave?: string;
    foto?: string;
    descripcion?: string;
    nombre?: string;
    estado?: string;
    municipio?: string;
    telefono?: string;
    equipos?: number;
    presidente?: string;
    deporte?: string;
    categoria?: string;
};
export declare type LigasCreateFormValidationValues = {
    idliga?: ValidationFunction<string>;
    idpresidente?: ValidationFunction<string>;
    clave?: ValidationFunction<string>;
    foto?: ValidationFunction<string>;
    descripcion?: ValidationFunction<string>;
    nombre?: ValidationFunction<string>;
    estado?: ValidationFunction<string>;
    municipio?: ValidationFunction<string>;
    telefono?: ValidationFunction<string>;
    equipos?: ValidationFunction<number>;
    presidente?: ValidationFunction<string>;
    deporte?: ValidationFunction<string>;
    categoria?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LigasCreateFormOverridesProps = {
    LigasCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    idliga?: PrimitiveOverrideProps<TextFieldProps>;
    idpresidente?: PrimitiveOverrideProps<TextFieldProps>;
    clave?: PrimitiveOverrideProps<TextFieldProps>;
    foto?: PrimitiveOverrideProps<TextFieldProps>;
    descripcion?: PrimitiveOverrideProps<TextFieldProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    estado?: PrimitiveOverrideProps<TextFieldProps>;
    municipio?: PrimitiveOverrideProps<TextFieldProps>;
    telefono?: PrimitiveOverrideProps<TextFieldProps>;
    equipos?: PrimitiveOverrideProps<TextFieldProps>;
    presidente?: PrimitiveOverrideProps<TextFieldProps>;
    deporte?: PrimitiveOverrideProps<TextFieldProps>;
    categoria?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LigasCreateFormProps = React.PropsWithChildren<{
    overrides?: LigasCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LigasCreateFormInputValues) => LigasCreateFormInputValues;
    onSuccess?: (fields: LigasCreateFormInputValues) => void;
    onError?: (fields: LigasCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LigasCreateFormInputValues) => LigasCreateFormInputValues;
    onValidate?: LigasCreateFormValidationValues;
} & React.CSSProperties>;
export default function LigasCreateForm(props: LigasCreateFormProps): React.ReactElement;
