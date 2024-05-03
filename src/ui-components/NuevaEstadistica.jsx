/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  TextField,
} from "@aws-amplify/ui-react";
import { Statsequipo } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function NuevaEstadistica(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    partigosj: "",
    partidosg: "",
    partidosp: "",
    partidose: "",
    puntos: "",
  };
  const [partigosj, setPartigosj] = React.useState(initialValues.partigosj);
  const [partidosg, setPartidosg] = React.useState(initialValues.partidosg);
  const [partidosp, setPartidosp] = React.useState(initialValues.partidosp);
  const [partidose, setPartidose] = React.useState(initialValues.partidose);
  const [puntos, setPuntos] = React.useState(initialValues.puntos);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPartigosj(initialValues.partigosj);
    setPartidosg(initialValues.partidosg);
    setPartidosp(initialValues.partidosp);
    setPartidose(initialValues.partidose);
    setPuntos(initialValues.puntos);
    setErrors({});
  };
  const validations = {
    partigosj: [],
    partidosg: [],
    partidosp: [],
    partidose: [],
    puntos: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          partigosj,
          partidosg,
          partidosp,
          partidose,
          puntos,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new Statsequipo(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "NuevaEstadistica")}
      {...rest}
    >
      <Heading
        children="Registra los datos actuales de tu equipo"
        {...getOverrideProps(overrides, "SectionalElement1")}
      ></Heading>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Divider>
      <TextField
        label="Partigos Jugados"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={partigosj}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              partigosj: value,
              partidosg,
              partidosp,
              partidose,
              puntos,
            };
            const result = onChange(modelFields);
            value = result?.partigosj ?? value;
          }
          if (errors.partigosj?.hasError) {
            runValidationTasks("partigosj", value);
          }
          setPartigosj(value);
        }}
        onBlur={() => runValidationTasks("partigosj", partigosj)}
        errorMessage={errors.partigosj?.errorMessage}
        hasError={errors.partigosj?.hasError}
        {...getOverrideProps(overrides, "partigosj")}
      ></TextField>
      <TextField
        label="Partidos Ganados"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={partidosg}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              partigosj,
              partidosg: value,
              partidosp,
              partidose,
              puntos,
            };
            const result = onChange(modelFields);
            value = result?.partidosg ?? value;
          }
          if (errors.partidosg?.hasError) {
            runValidationTasks("partidosg", value);
          }
          setPartidosg(value);
        }}
        onBlur={() => runValidationTasks("partidosg", partidosg)}
        errorMessage={errors.partidosg?.errorMessage}
        hasError={errors.partidosg?.hasError}
        {...getOverrideProps(overrides, "partidosg")}
      ></TextField>
      <TextField
        label="Partidos Perdidos"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={partidosp}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              partigosj,
              partidosg,
              partidosp: value,
              partidose,
              puntos,
            };
            const result = onChange(modelFields);
            value = result?.partidosp ?? value;
          }
          if (errors.partidosp?.hasError) {
            runValidationTasks("partidosp", value);
          }
          setPartidosp(value);
        }}
        onBlur={() => runValidationTasks("partidosp", partidosp)}
        errorMessage={errors.partidosp?.errorMessage}
        hasError={errors.partidosp?.hasError}
        {...getOverrideProps(overrides, "partidosp")}
      ></TextField>
      <TextField
        label="Partidos Empatados"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={partidose}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              partigosj,
              partidosg,
              partidosp,
              partidose: value,
              puntos,
            };
            const result = onChange(modelFields);
            value = result?.partidose ?? value;
          }
          if (errors.partidose?.hasError) {
            runValidationTasks("partidose", value);
          }
          setPartidose(value);
        }}
        onBlur={() => runValidationTasks("partidose", partidose)}
        errorMessage={errors.partidose?.errorMessage}
        hasError={errors.partidose?.hasError}
        {...getOverrideProps(overrides, "partidose")}
      ></TextField>
      <TextField
        label="Puntos Actuales"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={puntos}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              partigosj,
              partidosg,
              partidosp,
              partidose,
              puntos: value,
            };
            const result = onChange(modelFields);
            value = result?.puntos ?? value;
          }
          if (errors.puntos?.hasError) {
            runValidationTasks("puntos", value);
          }
          setPuntos(value);
        }}
        onBlur={() => runValidationTasks("puntos", puntos)}
        errorMessage={errors.puntos?.errorMessage}
        hasError={errors.puntos?.hasError}
        {...getOverrideProps(overrides, "puntos")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Registrar"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
