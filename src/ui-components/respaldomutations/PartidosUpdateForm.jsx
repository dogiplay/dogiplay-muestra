/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getPartidos } from "../graphql/queries";
import { updatePartidos } from "../graphql/mutations";
const client = generateClient();
export default function PartidosUpdateForm(props) {
  const {
    id: idProp,
    partidos: partidosModelProp,
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
    rival: "",
    fecha: "",
    hora: "",
    resultado_equipo: "",
    resultado_rival: "",
    lugar: "",
    observaciones: "",
    jugador_partido: "",
    jornada: "",
  };
  const [idequipo, setIdequipo] = React.useState(initialValues.idequipo);
  const [rival, setRival] = React.useState(initialValues.rival);
  const [fecha, setFecha] = React.useState(initialValues.fecha);
  const [hora, setHora] = React.useState(initialValues.hora);
  const [resultado_equipo, setResultado_equipo] = React.useState(
    initialValues.resultado_equipo
  );
  const [resultado_rival, setResultado_rival] = React.useState(
    initialValues.resultado_rival
  );
  const [lugar, setLugar] = React.useState(initialValues.lugar);
  const [observaciones, setObservaciones] = React.useState(
    initialValues.observaciones
  );
  const [jugador_partido, setJugador_partido] = React.useState(
    initialValues.jugador_partido
  );
  const [jornada, setJornada] = React.useState(initialValues.jornada);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = partidosRecord
      ? { ...initialValues, ...partidosRecord }
      : initialValues;
    setIdequipo(cleanValues.idequipo);
    setRival(cleanValues.rival);
    setFecha(cleanValues.fecha);
    setHora(cleanValues.hora);
    setResultado_equipo(cleanValues.resultado_equipo);
    setResultado_rival(cleanValues.resultado_rival);
    setLugar(cleanValues.lugar);
    setObservaciones(cleanValues.observaciones);
    setJugador_partido(cleanValues.jugador_partido);
    setJornada(cleanValues.jornada);
    setErrors({});
  };
  const [partidosRecord, setPartidosRecord] = React.useState(partidosModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getPartidos.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getPartidos
        : partidosModelProp;
      setPartidosRecord(record);
    };
    queryData();
  }, [idProp, partidosModelProp]);
  React.useEffect(resetStateValues, [partidosRecord]);
  const validations = {
    idequipo: [],
    rival: [],
    fecha: [],
    hora: [],
    resultado_equipo: [],
    resultado_rival: [],
    lugar: [],
    observaciones: [],
    jugador_partido: [],
    jornada: [],
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
          idequipo: idequipo ?? null,
          rival: rival ?? null,
          fecha: fecha ?? null,
          hora: hora ?? null,
          resultado_equipo: resultado_equipo ?? null,
          resultado_rival: resultado_rival ?? null,
          lugar: lugar ?? null,
          observaciones: observaciones ?? null,
          jugador_partido: jugador_partido ?? null,
          jornada: jornada ?? null,
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
          await client.graphql({
            query: updatePartidos.replaceAll("__typename", ""),
            variables: {
              input: {
                id: partidosRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "PartidosUpdateForm")}
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
              rival,
              fecha,
              hora,
              resultado_equipo,
              resultado_rival,
              lugar,
              observaciones,
              jugador_partido,
              jornada,
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
        label="Rival"
        isRequired={false}
        isReadOnly={false}
        value={rival}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idequipo,
              rival: value,
              fecha,
              hora,
              resultado_equipo,
              resultado_rival,
              lugar,
              observaciones,
              jugador_partido,
              jornada,
            };
            const result = onChange(modelFields);
            value = result?.rival ?? value;
          }
          if (errors.rival?.hasError) {
            runValidationTasks("rival", value);
          }
          setRival(value);
        }}
        onBlur={() => runValidationTasks("rival", rival)}
        errorMessage={errors.rival?.errorMessage}
        hasError={errors.rival?.hasError}
        {...getOverrideProps(overrides, "rival")}
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
              rival,
              fecha: value,
              hora,
              resultado_equipo,
              resultado_rival,
              lugar,
              observaciones,
              jugador_partido,
              jornada,
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
              rival,
              fecha,
              hora: value,
              resultado_equipo,
              resultado_rival,
              lugar,
              observaciones,
              jugador_partido,
              jornada,
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
        label="Resultado equipo"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={resultado_equipo}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              idequipo,
              rival,
              fecha,
              hora,
              resultado_equipo: value,
              resultado_rival,
              lugar,
              observaciones,
              jugador_partido,
              jornada,
            };
            const result = onChange(modelFields);
            value = result?.resultado_equipo ?? value;
          }
          if (errors.resultado_equipo?.hasError) {
            runValidationTasks("resultado_equipo", value);
          }
          setResultado_equipo(value);
        }}
        onBlur={() => runValidationTasks("resultado_equipo", resultado_equipo)}
        errorMessage={errors.resultado_equipo?.errorMessage}
        hasError={errors.resultado_equipo?.hasError}
        {...getOverrideProps(overrides, "resultado_equipo")}
      ></TextField>
      <TextField
        label="Resultado rival"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={resultado_rival}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              idequipo,
              rival,
              fecha,
              hora,
              resultado_equipo,
              resultado_rival: value,
              lugar,
              observaciones,
              jugador_partido,
              jornada,
            };
            const result = onChange(modelFields);
            value = result?.resultado_rival ?? value;
          }
          if (errors.resultado_rival?.hasError) {
            runValidationTasks("resultado_rival", value);
          }
          setResultado_rival(value);
        }}
        onBlur={() => runValidationTasks("resultado_rival", resultado_rival)}
        errorMessage={errors.resultado_rival?.errorMessage}
        hasError={errors.resultado_rival?.hasError}
        {...getOverrideProps(overrides, "resultado_rival")}
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
              rival,
              fecha,
              hora,
              resultado_equipo,
              resultado_rival,
              lugar: value,
              observaciones,
              jugador_partido,
              jornada,
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
              rival,
              fecha,
              hora,
              resultado_equipo,
              resultado_rival,
              lugar,
              observaciones: value,
              jugador_partido,
              jornada,
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
              rival,
              fecha,
              hora,
              resultado_equipo,
              resultado_rival,
              lugar,
              observaciones,
              jugador_partido: value,
              jornada,
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
              rival,
              fecha,
              hora,
              resultado_equipo,
              resultado_rival,
              lugar,
              observaciones,
              jugador_partido,
              jornada: value,
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
          isDisabled={!(idProp || partidosModelProp)}
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
              !(idProp || partidosModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
