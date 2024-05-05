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
export declare type PartidosCreateFormInputValues = {
    idequipo?: string;
    equipo1?: string;
    equipo2?: string;
    hora?: string;
    resultado_equipo1?: number;
    resultado_equipo2?: number;
    lugar?: string;
    observaciones?: string;
    jugador_partido?: string;
    jornada?: number;
    fecha?: string;
};
export declare type PartidosCreateFormValidationValues = {
    idequipo?: ValidationFunction<string>;
    equipo1?: ValidationFunction<string>;
    equipo2?: ValidationFunction<string>;
    hora?: ValidationFunction<string>;
    resultado_equipo1?: ValidationFunction<number>;
    resultado_equipo2?: ValidationFunction<number>;
    lugar?: ValidationFunction<string>;
    observaciones?: ValidationFunction<string>;
    jugador_partido?: ValidationFunction<string>;
    jornada?: ValidationFunction<number>;
    fecha?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PartidosCreateFormOverridesProps = {
    PartidosCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    idequipo?: PrimitiveOverrideProps<TextFieldProps>;
    equipo1?: PrimitiveOverrideProps<TextFieldProps>;
    equipo2?: PrimitiveOverrideProps<TextFieldProps>;
    hora?: PrimitiveOverrideProps<TextFieldProps>;
    resultado_equipo1?: PrimitiveOverrideProps<TextFieldProps>;
    resultado_equipo2?: PrimitiveOverrideProps<TextFieldProps>;
    lugar?: PrimitiveOverrideProps<TextFieldProps>;
    observaciones?: PrimitiveOverrideProps<TextFieldProps>;
    jugador_partido?: PrimitiveOverrideProps<TextFieldProps>;
    jornada?: PrimitiveOverrideProps<TextFieldProps>;
    fecha?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PartidosCreateFormProps = React.PropsWithChildren<{
    overrides?: PartidosCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PartidosCreateFormInputValues) => PartidosCreateFormInputValues;
    onSuccess?: (fields: PartidosCreateFormInputValues) => void;
    onError?: (fields: PartidosCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PartidosCreateFormInputValues) => PartidosCreateFormInputValues;
    onValidate?: PartidosCreateFormValidationValues;
} & React.CSSProperties>;
export default function PartidosCreateForm(props: PartidosCreateFormProps): React.ReactElement;