/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Ligas } from "../models";
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
export declare type LigasUpdateFormInputValues = {
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
export declare type LigasUpdateFormValidationValues = {
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
export declare type LigasUpdateFormOverridesProps = {
    LigasUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type LigasUpdateFormProps = React.PropsWithChildren<{
    overrides?: LigasUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    ligas?: Ligas;
    onSubmit?: (fields: LigasUpdateFormInputValues) => LigasUpdateFormInputValues;
    onSuccess?: (fields: LigasUpdateFormInputValues) => void;
    onError?: (fields: LigasUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LigasUpdateFormInputValues) => LigasUpdateFormInputValues;
    onValidate?: LigasUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LigasUpdateForm(props: LigasUpdateFormProps): React.ReactElement;
