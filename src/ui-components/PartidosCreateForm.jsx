/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Partidos } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function PartidosCreateForm(props) {
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
    idequipo: "",
    equipo1: "",
    equipo2: "",
    hora: "",
    resultado_equipo1: "",
    resultado_equipo2: "",
    lugar: "",
    observaciones: "",
    jugador_partido: "",
    jornada: "",
    fecha: "",
  };
  const [idequipo, setIdequipo] = React.useState(initialValues.idequipo);
  const [equipo1, setEquipo1] = React.useState(initialValues.equipo1);
  const [equipo2, setEquipo2] = React.useState(initialValues.equipo2);
  const [hora, setHora] = React.useState(initialValues.hora);
  const [resultado_equipo1, setResultado_equipo1] = React.useState(
    initialValues.resultado_equipo1
  );
  const [resultado_equipo2, setResultado_equipo2] = React.useState(
    initialValues.resultado_equipo2
  );
  const [lugar, setLugar] = React.useState(initialValues.lugar);
  const [observaciones, setObservaciones] = React.useState(
    initialValues.observaciones
  );
  const [jugador_partido, setJugador_partido] = React.useState(
    initialValues.jugador_partido
  );
  const [jornada, setJornada] = React.useState(initialValues.jornada);
  const [fecha, setFecha] = React.useState(initialValues.fecha);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setIdequipo(initialValues.idequipo);
    setEquipo1(initialValues.equipo1);
    setEquipo2(initialValues.equipo2);
    setHora(initialValues.hora);
    setResultado_equipo1(initialValues.resultado_equipo1);
    setResultado_equipo2(initialValues.resultado_equipo2);
    setLugar(initialValues.lugar);
    setObservaciones(initialValues.observaciones);
    setJugador_partido(initialValues.jugador_partido);
    setJornada(initialValues.jornada);
    setFecha(initialValues.fecha);
    setErrors({});
  };
  const validations = {
    idequipo: [],
    equipo1: [],
    equipo2: [],
    hora: [],
    resultado_equipo1: [],
    resultado_equipo2: [],
    lugar: [],
    observaciones: [],
    jugador_partido: [],
    jornada: [],
    fecha: [],
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
          idequipo,
          equipo1,
          equipo2,
          hora,
          resultado_equipo1,
          resultado_equipo2,
          lugar,
          observaciones,
          jugador_partido,
          jornada,
          fecha,
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
          await DataStore.save(new Partidos(modelFields));
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
      {...getOverrideProps(overrides, "PartidosCreateForm")}
      {...rest}
    >
      <TextField
        label="Idequipo"
        isRequired={false}
        isReadOnly={false}
        value={idequipo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idequipo: value,
              equipo1,
              equipo2,
              hora,
              resultado_equipo1,
              resultado_equipo2,
              lugar,
              observaciones,
              jugador_partido,
              jornada,
              fecha,
            };
            const result = onChange(modelFields);
            value = result?.idequipo ?? value;
          }
          if (errors.idequipo?.hasError) {
            runValidationTasks("idequipo", value);
          }
          setIdequipo(value);
        }}
        onBlur={() => runValidationTasks("idequipo", idequipo)}
        errorMessage={errors.idequipo?.errorMessage}
        hasError={errors.idequipo?.hasError}
        {...getOverrideProps(overrides, "idequipo")}
      ></TextField>
      <TextField
        label="Equipo1"
        isRequired={false}
        isReadOnly={false}
        value={equipo1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idequipo,
              equipo1: value,
              equipo2,
              hora,
              resultado_equipo1,
              resultado_equipo2,
              lugar,
              observaciones,
              jugador_partido,
              jornada,
              fecha,
            };
            const result = onChange(modelFields);
            value = result?.equipo1 ?? value;
          }
          if (errors.equipo1?.hasError) {
            runValidationTasks("equipo1", value);
          }
          setEquipo1(value);
        }}
        onBlur={() => runValidationTasks("equipo1", equipo1)}
        errorMessage={errors.equipo1?.errorMessage}
        hasError={errors.equipo1?.hasError}
        {...getOverrideProps(overrides, "equipo1")}
      ></TextField>
      <TextField
        label="Equipo2"
        isRequired={false}
        isReadOnly={false}
        value={equipo2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idequipo,
              equipo1,
              equipo2: value,
              hora,
              resultado_equipo1,
              resultado_equipo2,
              lugar,
              observaciones,
              jugador_partido,
              jornada,
              fecha,
            };
            const result = onChange(modelFields);
            value = result?.equipo2 ?? value;
          }
          if (errors.equipo2?.hasError) {
            runValidationTasks("equipo2", value);
          }
          setEquipo2(value);
        }}
        onBlur={() => runValidationTasks("equipo2", equipo2)}
        errorMessage={errors.equipo2?.errorMessage}
        hasError={errors.equipo2?.hasError}
        {...getOverrideProps(overrides, "equipo2")}
      ></TextField>
      <TextField
        label="Hora"
        isRequired={false}
        isReadOnly={false}
        value={hora}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idequipo,
              equipo1,
              equipo2,
              hora: value,
              resultado_equipo1,
              resultado_equipo2,
              lugar,
              observaciones,
              jugador_partido,
              jornada,
              fecha,
            };
            const result = onChange(modelFields);
            value = result?.hora ?? value;
          }
          if (errors.hora?.hasError) {
            runValidationTasks("hora", value);
          }
          setHora(value);
        }}
        onBlur={() => runValidationTasks("hora", hora)}
        errorMessage={errors.hora?.errorMessage}
        hasError={errors.hora?.hasError}
        {...getOverrideProps(overrides, "hora")}
      ></TextField>
      <TextField
        label="Resultado equipo1"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={resultado_equipo1}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              idequipo,
              equipo1,
              equipo2,
              hora,
              resultado_equipo1: value,
              resultado_equipo2,
              lugar,
              observaciones,
              jugador_partido,
              jornada,
              fecha,
            };
            const result = onChange(modelFields);
            value = result?.resultado_equipo1 ?? value;
          }
          if (errors.resultado_equipo1?.hasError) {
            runValidationTasks("resultado_equipo1", value);
          }
          setResultado_equipo1(value);
        }}
        onBlur={() =>
          runValidationTasks("resultado_equipo1", resultado_equipo1)
        }
        errorMessage={errors.resultado_equipo1?.errorMessage}
        hasError={errors.resultado_equipo1?.hasError}
        {...getOverrideProps(overrides, "resultado_equipo1")}
      ></TextField>
      <TextField
        label="Resultado equipo2"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={resultado_equipo2}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              idequipo,
              equipo1,
              equipo2,
              hora,
              resultado_equipo1,
              resultado_equipo2: value,
              lugar,
              observaciones,
              jugador_partido,
              jornada,
              fecha,
            };
            const result = onChange(modelFields);
            value = result?.resultado_equipo2 ?? value;
          }
          if (errors.resultado_equipo2?.hasError) {
            runValidationTasks("resultado_equipo2", value);
          }
          setResultado_equipo2(value);
        }}
        onBlur={() =>
          runValidationTasks("resultado_equipo2", resultado_equipo2)
        }
        errorMessage={errors.resultado_equipo2?.errorMessage}
        hasError={errors.resultado_equipo2?.hasError}
        {...getOverrideProps(overrides, "resultado_equipo2")}
      ></TextField>
      <TextField
        label="Lugar"
        isRequired={false}
        isReadOnly={false}
        value={lugar}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idequipo,
              equipo1,
              equipo2,
              hora,
              resultado_equipo1,
              resultado_equipo2,
              lugar: value,
              observaciones,
              jugador_partido,
              jornada,
              fecha,
            };
            const result = onChange(modelFields);
            value = result?.lugar ?? value;
          }
          if (errors.lugar?.hasError) {
            runValidationTasks("lugar", value);
          }
          setLugar(value);
        }}
        onBlur={() => runValidationTasks("lugar", lugar)}
        errorMessage={errors.lugar?.errorMessage}
        hasError={errors.lugar?.hasError}
        {...getOverrideProps(overrides, "lugar")}
      ></TextField>
      <TextField
        label="Observaciones"
        isRequired={false}
        isReadOnly={false}
        value={observaciones}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idequipo,
              equipo1,
              equipo2,
              hora,
              resultado_equipo1,
              resultado_equipo2,
              lugar,
              observaciones: value,
              jugador_partido,
              jornada,
              fecha,
            };
            const result = onChange(modelFields);
            value = result?.observaciones ?? value;
          }
          if (errors.observaciones?.hasError) {
            runValidationTasks("observaciones", value);
          }
          setObservaciones(value);
        }}
        onBlur={() => runValidationTasks("observaciones", observaciones)}
        errorMessage={errors.observaciones?.errorMessage}
        hasError={errors.observaciones?.hasError}
        {...getOverrideProps(overrides, "observaciones")}
      ></TextField>
      <TextField
        label="Jugador partido"
        isRequired={false}
        isReadOnly={false}
        value={jugador_partido}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idequipo,
              equipo1,
              equipo2,
              hora,
              resultado_equipo1,
              resultado_equipo2,
              lugar,
              observaciones,
              jugador_partido: value,
              jornada,
              fecha,
            };
            const result = onChange(modelFields);
            value = result?.jugador_partido ?? value;
          }
          if (errors.jugador_partido?.hasError) {
            runValidationTasks("jugador_partido", value);
          }
          setJugador_partido(value);
        }}
        onBlur={() => runValidationTasks("jugador_partido", jugador_partido)}
        errorMessage={errors.jugador_partido?.errorMessage}
        hasError={errors.jugador_partido?.hasError}
        {...getOverrideProps(overrides, "jugador_partido")}
      ></TextField>
      <TextField
        label="Jornada"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={jornada}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              idequipo,
              equipo1,
              equipo2,
              hora,
              resultado_equipo1,
              resultado_equipo2,
              lugar,
              observaciones,
              jugador_partido,
              jornada: value,
              fecha,
            };
            const result = onChange(modelFields);
            value = result?.jornada ?? value;
          }
          if (errors.jornada?.hasError) {
            runValidationTasks("jornada", value);
          }
          setJornada(value);
        }}
        onBlur={() => runValidationTasks("jornada", jornada)}
        errorMessage={errors.jornada?.errorMessage}
        hasError={errors.jornada?.hasError}
        {...getOverrideProps(overrides, "jornada")}
      ></TextField>
      <TextField
        label="Fecha"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={fecha}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idequipo,
              equipo1,
              equipo2,
              hora,
              resultado_equipo1,
              resultado_equipo2,
              lugar,
              observaciones,
              jugador_partido,
              jornada,
              fecha: value,
            };
            const result = onChange(modelFields);
            value = result?.fecha ?? value;
          }
          if (errors.fecha?.hasError) {
            runValidationTasks("fecha", value);
          }
          setFecha(value);
        }}
        onBlur={() => runValidationTasks("fecha", fecha)}
        errorMessage={errors.fecha?.errorMessage}
        hasError={errors.fecha?.hasError}
        {...getOverrideProps(overrides, "fecha")}
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
