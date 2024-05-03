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
export declare type TorneosCreateFormInputValues = {
    idliga?: string;
    iddeporte?: string;
    idtorneo?: number;
    nombretorneo?: string;
    nombredeporte?: string;
};
export declare type TorneosCreateFormValidationValues = {
    idliga?: ValidationFunction<string>;
    iddeporte?: ValidationFunction<string>;
    idtorneo?: ValidationFunction<number>;
    nombretorneo?: ValidationFunction<string>;
    nombredeporte?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TorneosCreateFormOverridesProps = {
    TorneosCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    idliga?: PrimitiveOverrideProps<TextFieldProps>;
    iddeporte?: PrimitiveOverrideProps<TextFieldProps>;
    idtorneo?: PrimitiveOverrideProps<TextFieldProps>;
    nombretorneo?: PrimitiveOverrideProps<TextFieldProps>;
    nombredeporte?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TorneosCreateFormProps = React.PropsWithChildren<{
    overrides?: TorneosCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TorneosCreateFormInputValues) => TorneosCreateFormInputValues;
    onSuccess?: (fields: TorneosCreateFormInputValues) => void;
    onError?: (fields: TorneosCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TorneosCreateFormInputValues) => TorneosCreateFormInputValues;
    onValidate?: TorneosCreateFormValidationValues;
} & React.CSSProperties>;
export default function TorneosCreateForm(props: TorneosCreateFormProps): React.ReactElement;
