/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Managers } from "../models";
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
export declare type ManagersUpdateFormInputValues = {
    idliga?: string;
    idmanager?: string;
    idequipo?: string;
    alias?: string;
    foto?: string;
    deporte?: string;
    telefono?: string;
    clave?: string;
    usuario?: string;
    nombre?: string;
    idtorneo?: string;
};
export declare type ManagersUpdateFormValidationValues = {
    idliga?: ValidationFunction<string>;
    idmanager?: ValidationFunction<string>;
    idequipo?: ValidationFunction<string>;
    alias?: ValidationFunction<string>;
    foto?: ValidationFunction<string>;
    deporte?: ValidationFunction<string>;
    telefono?: ValidationFunction<string>;
    clave?: ValidationFunction<string>;
    usuario?: ValidationFunction<string>;
    nombre?: ValidationFunction<string>;
    idtorneo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ManagersUpdateFormOverridesProps = {
    ManagersUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    idliga?: PrimitiveOverrideProps<TextFieldProps>;
    idmanager?: PrimitiveOverrideProps<TextFieldProps>;
    idequipo?: PrimitiveOverrideProps<TextFieldProps>;
    alias?: PrimitiveOverrideProps<TextFieldProps>;
    foto?: PrimitiveOverrideProps<TextFieldProps>;
    deporte?: PrimitiveOverrideProps<TextFieldProps>;
    telefono?: PrimitiveOverrideProps<TextFieldProps>;
    clave?: PrimitiveOverrideProps<TextFieldProps>;
    usuario?: PrimitiveOverrideProps<TextFieldProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    idtorneo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ManagersUpdateFormProps = React.PropsWithChildren<{
    overrides?: ManagersUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    managers?: Managers;
    onSubmit?: (fields: ManagersUpdateFormInputValues) => ManagersUpdateFormInputValues;
    onSuccess?: (fields: ManagersUpdateFormInputValues) => void;
    onError?: (fields: ManagersUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ManagersUpdateFormInputValues) => ManagersUpdateFormInputValues;
    onValidate?: ManagersUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ManagersUpdateForm(props: ManagersUpdateFormProps): React.ReactElement;
