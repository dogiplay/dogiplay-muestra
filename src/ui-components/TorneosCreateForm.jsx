/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Torneos } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function TorneosCreateForm(props) {
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
    idliga: "",
    iddeporte: "",
    idtorneo: "",
    nombretorneo: "",
    nombredeporte: "",
  };
  const [idliga, setIdliga] = React.useState(initialValues.idliga);
  const [iddeporte, setIddeporte] = React.useState(initialValues.iddeporte);
  const [idtorneo, setIdtorneo] = React.useState(initialValues.idtorneo);
  const [nombretorneo, setNombretorneo] = React.useState(
    initialValues.nombretorneo
  );
  const [nombredeporte, setNombredeporte] = React.useState(
    initialValues.nombredeporte
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setIdliga(initialValues.idliga);
    setIddeporte(initialValues.iddeporte);
    setIdtorneo(initialValues.idtorneo);
    setNombretorneo(initialValues.nombretorneo);
    setNombredeporte(initialValues.nombredeporte);
    setErrors({});
  };
  const validations = {
    idliga: [],
    iddeporte: [],
    idtorneo: [],
    nombretorneo: [],
    nombredeporte: [],
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
          idliga,
          iddeporte,
          idtorneo,
          nombretorneo,
          nombredeporte,
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
          await DataStore.save(new Torneos(modelFields));
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
      {...getOverrideProps(overrides, "TorneosCreateForm")}
      {...rest}
    >
      <TextField
        label="Idliga"
        isRequired={false}
        isReadOnly={false}
        value={idliga}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idliga: value,
              iddeporte,
              idtorneo,
              nombretorneo,
              nombredeporte,
            };
            const result = onChange(modelFields);
            value = result?.idliga ?? value;
          }
          if (errors.idliga?.hasError) {
            runValidationTasks("idliga", value);
          }
          setIdliga(value);
        }}
        onBlur={() => runValidationTasks("idliga", idliga)}
        errorMessage={errors.idliga?.errorMessage}
        hasError={errors.idliga?.hasError}
        {...getOverrideProps(overrides, "idliga")}
      ></TextField>
      <TextField
        label="Iddeporte"
        isRequired={false}
        isReadOnly={false}
        value={iddeporte}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idliga,
              iddeporte: value,
              idtorneo,
              nombretorneo,
              nombredeporte,
            };
            const result = onChange(modelFields);
            value = result?.iddeporte ?? value;
          }
          if (errors.iddeporte?.hasError) {
            runValidationTasks("iddeporte", value);
          }
          setIddeporte(value);
        }}
        onBlur={() => runValidationTasks("iddeporte", iddeporte)}
        errorMessage={errors.iddeporte?.errorMessage}
        hasError={errors.iddeporte?.hasError}
        {...getOverrideProps(overrides, "iddeporte")}
      ></TextField>
      <TextField
        label="Idtorneo"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={idtorneo}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              idliga,
              iddeporte,
              idtorneo: value,
              nombretorneo,
              nombredeporte,
            };
            const result = onChange(modelFields);
            value = result?.idtorneo ?? value;
          }
          if (errors.idtorneo?.hasError) {
            runValidationTasks("idtorneo", value);
          }
          setIdtorneo(value);
        }}
        onBlur={() => runValidationTasks("idtorneo", idtorneo)}
        errorMessage={errors.idtorneo?.errorMessage}
        hasError={errors.idtorneo?.hasError}
        {...getOverrideProps(overrides, "idtorneo")}
      ></TextField>
      <TextField
        label="Nombretorneo"
        isRequired={false}
        isReadOnly={false}
        value={nombretorneo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idliga,
              iddeporte,
              idtorneo,
              nombretorneo: value,
              nombredeporte,
            };
            const result = onChange(modelFields);
            value = result?.nombretorneo ?? value;
          }
          if (errors.nombretorneo?.hasError) {
            runValidationTasks("nombretorneo", value);
          }
          setNombretorneo(value);
        }}
        onBlur={() => runValidationTasks("nombretorneo", nombretorneo)}
        errorMessage={errors.nombretorneo?.errorMessage}
        hasError={errors.nombretorneo?.hasError}
        {...getOverrideProps(overrides, "nombretorneo")}
      ></TextField>
      <TextField
        label="Nombredeporte"
        isRequired={false}
        isReadOnly={false}
        value={nombredeporte}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idliga,
              iddeporte,
              idtorneo,
              nombretorneo,
              nombredeporte: value,
            };
            const result = onChange(modelFields);
            value = result?.nombredeporte ?? value;
          }
          if (errors.nombredeporte?.hasError) {
            runValidationTasks("nombredeporte", value);
          }
          setNombredeporte(value);
        }}
        onBlur={() => runValidationTasks("nombredeporte", nombredeporte)}
        errorMessage={errors.nombredeporte?.errorMessage}
        hasError={errors.nombredeporte?.hasError}
        {...getOverrideProps(overrides, "nombredeporte")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
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
