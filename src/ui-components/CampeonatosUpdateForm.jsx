/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Campeonatos } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function CampeonatosUpdateForm(props) {
  const {
    id: idProp,
    campeonatos: campeonatosModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    clave_liga: "",
    equipo: "",
    logo: "",
    manager: "",
    temporada: "",
    numero_campeonato: "",
    categoria: "",
    anoc: "",
  };
  const [clave_liga, setClave_liga] = React.useState(initialValues.clave_liga);
  const [equipo, setEquipo] = React.useState(initialValues.equipo);
  const [logo, setLogo] = React.useState(initialValues.logo);
  const [manager, setManager] = React.useState(initialValues.manager);
  const [temporada, setTemporada] = React.useState(initialValues.temporada);
  const [numero_campeonato, setNumero_campeonato] = React.useState(
    initialValues.numero_campeonato
  );
  const [categoria, setCategoria] = React.useState(initialValues.categoria);
  const [anoc, setAnoc] = React.useState(initialValues.anoc);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = campeonatosRecord
      ? { ...initialValues, ...campeonatosRecord }
      : initialValues;
    setClave_liga(cleanValues.clave_liga);
    setEquipo(cleanValues.equipo);
    setLogo(cleanValues.logo);
    setManager(cleanValues.manager);
    setTemporada(cleanValues.temporada);
    setNumero_campeonato(cleanValues.numero_campeonato);
    setCategoria(cleanValues.categoria);
    setAnoc(cleanValues.anoc);
    setErrors({});
  };
  const [campeonatosRecord, setCampeonatosRecord] =
    React.useState(campeonatosModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Campeonatos, idProp)
        : campeonatosModelProp;
      setCampeonatosRecord(record);
    };
    queryData();
  }, [idProp, campeonatosModelProp]);
  React.useEffect(resetStateValues, [campeonatosRecord]);
  const validations = {
    clave_liga: [],
    equipo: [],
    logo: [],
    manager: [],
    temporada: [],
    numero_campeonato: [],
    categoria: [],
    anoc: [],
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
          clave_liga,
          equipo,
          logo,
          manager,
          temporada,
          numero_campeonato,
          categoria,
          anoc,
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
          await DataStore.save(
            Campeonatos.copyOf(campeonatosRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CampeonatosUpdateForm")}
      {...rest}
    >
      <TextField
        label="Clave liga"
        isRequired={false}
        isReadOnly={false}
        value={clave_liga}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clave_liga: value,
              equipo,
              logo,
              manager,
              temporada,
              numero_campeonato,
              categoria,
              anoc,
            };
            const result = onChange(modelFields);
            value = result?.clave_liga ?? value;
          }
          if (errors.clave_liga?.hasError) {
            runValidationTasks("clave_liga", value);
          }
          setClave_liga(value);
        }}
        onBlur={() => runValidationTasks("clave_liga", clave_liga)}
        errorMessage={errors.clave_liga?.errorMessage}
        hasError={errors.clave_liga?.hasError}
        {...getOverrideProps(overrides, "clave_liga")}
      ></TextField>
      <TextField
        label="Equipo"
        isRequired={false}
        isReadOnly={false}
        value={equipo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clave_liga,
              equipo: value,
              logo,
              manager,
              temporada,
              numero_campeonato,
              categoria,
              anoc,
            };
            const result = onChange(modelFields);
            value = result?.equipo ?? value;
          }
          if (errors.equipo?.hasError) {
            runValidationTasks("equipo", value);
          }
          setEquipo(value);
        }}
        onBlur={() => runValidationTasks("equipo", equipo)}
        errorMessage={errors.equipo?.errorMessage}
        hasError={errors.equipo?.hasError}
        {...getOverrideProps(overrides, "equipo")}
      ></TextField>
      <TextField
        label="Logo"
        isRequired={false}
        isReadOnly={false}
        value={logo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clave_liga,
              equipo,
              logo: value,
              manager,
              temporada,
              numero_campeonato,
              categoria,
              anoc,
            };
            const result = onChange(modelFields);
            value = result?.logo ?? value;
          }
          if (errors.logo?.hasError) {
            runValidationTasks("logo", value);
          }
          setLogo(value);
        }}
        onBlur={() => runValidationTasks("logo", logo)}
        errorMessage={errors.logo?.errorMessage}
        hasError={errors.logo?.hasError}
        {...getOverrideProps(overrides, "logo")}
      ></TextField>
      <TextField
        label="Manager"
        isRequired={false}
        isReadOnly={false}
        value={manager}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clave_liga,
              equipo,
              logo,
              manager: value,
              temporada,
              numero_campeonato,
              categoria,
              anoc,
            };
            const result = onChange(modelFields);
            value = result?.manager ?? value;
          }
          if (errors.manager?.hasError) {
            runValidationTasks("manager", value);
          }
          setManager(value);
        }}
        onBlur={() => runValidationTasks("manager", manager)}
        errorMessage={errors.manager?.errorMessage}
        hasError={errors.manager?.hasError}
        {...getOverrideProps(overrides, "manager")}
      ></TextField>
      <TextField
        label="Temporada"
        isRequired={false}
        isReadOnly={false}
        value={temporada}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clave_liga,
              equipo,
              logo,
              manager,
              temporada: value,
              numero_campeonato,
              categoria,
              anoc,
            };
            const result = onChange(modelFields);
            value = result?.temporada ?? value;
          }
          if (errors.temporada?.hasError) {
            runValidationTasks("temporada", value);
          }
          setTemporada(value);
        }}
        onBlur={() => runValidationTasks("temporada", temporada)}
        errorMessage={errors.temporada?.errorMessage}
        hasError={errors.temporada?.hasError}
        {...getOverrideProps(overrides, "temporada")}
      ></TextField>
      <TextField
        label="Numero campeonato"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={numero_campeonato}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              clave_liga,
              equipo,
              logo,
              manager,
              temporada,
              numero_campeonato: value,
              categoria,
              anoc,
            };
            const result = onChange(modelFields);
            value = result?.numero_campeonato ?? value;
          }
          if (errors.numero_campeonato?.hasError) {
            runValidationTasks("numero_campeonato", value);
          }
          setNumero_campeonato(value);
        }}
        onBlur={() =>
          runValidationTasks("numero_campeonato", numero_campeonato)
        }
        errorMessage={errors.numero_campeonato?.errorMessage}
        hasError={errors.numero_campeonato?.hasError}
        {...getOverrideProps(overrides, "numero_campeonato")}
      ></TextField>
      <TextField
        label="Categoria"
        isRequired={false}
        isReadOnly={false}
        value={categoria}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clave_liga,
              equipo,
              logo,
              manager,
              temporada,
              numero_campeonato,
              categoria: value,
              anoc,
            };
            const result = onChange(modelFields);
            value = result?.categoria ?? value;
          }
          if (errors.categoria?.hasError) {
            runValidationTasks("categoria", value);
          }
          setCategoria(value);
        }}
        onBlur={() => runValidationTasks("categoria", categoria)}
        errorMessage={errors.categoria?.errorMessage}
        hasError={errors.categoria?.hasError}
        {...getOverrideProps(overrides, "categoria")}
      ></TextField>
      <TextField
        label="Anoc"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={anoc}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              clave_liga,
              equipo,
              logo,
              manager,
              temporada,
              numero_campeonato,
              categoria,
              anoc: value,
            };
            const result = onChange(modelFields);
            value = result?.anoc ?? value;
          }
          if (errors.anoc?.hasError) {
            runValidationTasks("anoc", value);
          }
          setAnoc(value);
        }}
        onBlur={() => runValidationTasks("anoc", anoc)}
        errorMessage={errors.anoc?.errorMessage}
        hasError={errors.anoc?.hasError}
        {...getOverrideProps(overrides, "anoc")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || campeonatosModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || campeonatosModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
