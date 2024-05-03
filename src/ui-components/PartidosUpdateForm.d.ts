/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Partidos } from "../models";
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
export declare type PartidosUpdateFormInputValues = {
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
export declare type PartidosUpdateFormValidationValues = {
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
export declare type PartidosUpdateFormOverridesProps = {
    PartidosUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type PartidosUpdateFormProps = React.PropsWithChildren<{
    overrides?: PartidosUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    partidos?: Partidos;
    onSubmit?: (fields: PartidosUpdateFormInputValues) => PartidosUpdateFormInputValues;
    onSuccess?: (fields: PartidosUpdateFormInputValues) => void;
    onError?: (fields: PartidosUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PartidosUpdateFormInputValues) => PartidosUpdateFormInputValues;
    onValidate?: PartidosUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PartidosUpdateForm(props: PartidosUpdateFormProps): React.ReactElement;
