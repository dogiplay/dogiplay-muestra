/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { StatsJugadores } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function StatsJugadoresCreateForm(props) {
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
    idjugador: "",
    idpartido: "",
    iddeporte: "",
    idtorneo: "",
    tipocuenta: "",
    futgoles: "",
    bascanastas: "",
    baspuntos: "",
    beicarrerashechas: "",
    beiponches: "",
    beihr: "",
    beihits: "",
    beifly: "",
    beirolas: "",
    futasisgol: "",
    beicarrerasproducidas: "",
    futtarjetasamarillas: "",
    futtarjetasrojas: "",
  };
  const [idjugador, setIdjugador] = React.useState(initialValues.idjugador);
  const [idpartido, setIdpartido] = React.useState(initialValues.idpartido);
  const [iddeporte, setIddeporte] = React.useState(initialValues.iddeporte);
  const [idtorneo, setIdtorneo] = React.useState(initialValues.idtorneo);
  const [tipocuenta, setTipocuenta] = React.useState(initialValues.tipocuenta);
  const [futgoles, setFutgoles] = React.useState(initialValues.futgoles);
  const [bascanastas, setBascanastas] = React.useState(
    initialValues.bascanastas
  );
  const [baspuntos, setBaspuntos] = React.useState(initialValues.baspuntos);
  const [beicarrerashechas, setBeicarrerashechas] = React.useState(
    initialValues.beicarrerashechas
  );
  const [beiponches, setBeiponches] = React.useState(initialValues.beiponches);
  const [beihr, setBeihr] = React.useState(initialValues.beihr);
  const [beihits, setBeihits] = React.useState(initialValues.beihits);
  const [beifly, setBeifly] = React.useState(initialValues.beifly);
  const [beirolas, setBeirolas] = React.useState(initialValues.beirolas);
  const [futasisgol, setFutasisgol] = React.useState(initialValues.futasisgol);
  const [beicarrerasproducidas, setBeicarrerasproducidas] = React.useState(
    initialValues.beicarrerasproducidas
  );
  const [futtarjetasamarillas, setFuttarjetasamarillas] = React.useState(
    initialValues.futtarjetasamarillas
  );
  const [futtarjetasrojas, setFuttarjetasrojas] = React.useState(
    initialValues.futtarjetasrojas
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setIdjugador(initialValues.idjugador);
    setIdpartido(initialValues.idpartido);
    setIddeporte(initialValues.iddeporte);
    setIdtorneo(initialValues.idtorneo);
    setTipocuenta(initialValues.tipocuenta);
    setFutgoles(initialValues.futgoles);
    setBascanastas(initialValues.bascanastas);
    setBaspuntos(initialValues.baspuntos);
    setBeicarrerashechas(initialValues.beicarrerashechas);
    setBeiponches(initialValues.beiponches);
    setBeihr(initialValues.beihr);
    setBeihits(initialValues.beihits);
    setBeifly(initialValues.beifly);
    setBeirolas(initialValues.beirolas);
    setFutasisgol(initialValues.futasisgol);
    setBeicarrerasproducidas(initialValues.beicarrerasproducidas);
    setFuttarjetasamarillas(initialValues.futtarjetasamarillas);
    setFuttarjetasrojas(initialValues.futtarjetasrojas);
    setErrors({});
  };
  const validations = {
    idjugador: [],
    idpartido: [],
    iddeporte: [],
    idtorneo: [],
    tipocuenta: [],
    futgoles: [],
    bascanastas: [],
    baspuntos: [],
    beicarrerashechas: [],
    beiponches: [],
    beihr: [],
    beihits: [],
    beifly: [],
    beirolas: [],
    futasisgol: [],
    beicarrerasproducidas: [],
    futtarjetasamarillas: [],
    futtarjetasrojas: [],
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
          idjugador,
          idpartido,
          iddeporte,
          idtorneo,
          tipocuenta,
          futgoles,
          bascanastas,
          baspuntos,
          beicarrerashechas,
          beiponches,
          beihr,
          beihits,
          beifly,
          beirolas,
          futasisgol,
          beicarrerasproducidas,
          futtarjetasamarillas,
          futtarjetasrojas,
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
          await DataStore.save(new StatsJugadores(modelFields));
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
      {...getOverrideProps(overrides, "StatsJugadoresCreateForm")}
      {...rest}
    >
      <TextField
        label="Idjugador"
        isRequired={false}
        isReadOnly={false}
        value={idjugador}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idjugador: value,
              idpartido,
              iddeporte,
              idtorneo,
              tipocuenta,
              futgoles,
              bascanastas,
              baspuntos,
              beicarrerashechas,
              beiponches,
              beihr,
              beihits,
              beifly,
              beirolas,
              futasisgol,
              beicarrerasproducidas,
              futtarjetasamarillas,
              futtarjetasrojas,
            };
            const result = onChange(modelFields);
            value = result?.idjugador ?? value;
          }
          if (errors.idjugador?.hasError) {
            runValidationTasks("idjugador", value);
          }
          setIdjugador(value);
        }}
        onBlur={() => runValidationTasks("idjugador", idjugador)}
        errorMessage={errors.idjugador?.errorMessage}
        hasError={errors.idjugador?.hasError}
        {...getOverrideProps(overrides, "idjugador")}
      ></TextField>
      <TextField
        label="Idpartido"
        isRequired={false}
        isReadOnly={false}
        value={idpartido}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idjugador,
              idpartido: value,
              iddeporte,
              idtorneo,
              tipocuenta,
              futgoles,
              bascanastas,
              baspuntos,
              beicarrerashechas,
              beiponches,
              beihr,
              beihits,
              beifly,
              beirolas,
              futasisgol,
              beicarrerasproducidas,
              futtarjetasamarillas,
              futtarjetasrojas,
            };
            const result = onChange(modelFields);
            value = result?.idpartido ?? value;
          }
          if (errors.idpartido?.hasError) {
            runValidationTasks("idpartido", value);
          }
          setIdpartido(value);
        }}
        onBlur={() => runValidationTasks("idpartido", idpartido)}
        errorMessage={errors.idpartido?.errorMessage}
        hasError={errors.idpartido?.hasError}
        {...getOverrideProps(overrides, "idpartido")}
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
              idjugador,
              idpartido,
              iddeporte: value,
              idtorneo,
              tipocuenta,
              futgoles,
              bascanastas,
              baspuntos,
              beicarrerashechas,
              beiponches,
              beihr,
              beihits,
              beifly,
              beirolas,
              futasisgol,
              beicarrerasproducidas,
              futtarjetasamarillas,
              futtarjetasrojas,
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
        value={idtorneo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idjugador,
              idpartido,
              iddeporte,
              idtorneo: value,
              tipocuenta,
              futgoles,
              bascanastas,
              baspuntos,
              beicarrerashechas,
              beiponches,
              beihr,
              beihits,
              beifly,
              beirolas,
              futasisgol,
              beicarrerasproducidas,
              futtarjetasamarillas,
              futtarjetasrojas,
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
        label="Tipocuenta"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={tipocuenta}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              idjugador,
              idpartido,
              iddeporte,
              idtorneo,
              tipocuenta: value,
              futgoles,
              bascanastas,
              baspuntos,
              beicarrerashechas,
              beiponches,
              beihr,
              beihits,
              beifly,
              beirolas,
              futasisgol,
              beicarrerasproducidas,
              futtarjetasamarillas,
              futtarjetasrojas,
            };
            const result = onChange(modelFields);
            value = result?.tipocuenta ?? value;
          }
          if (errors.tipocuenta?.hasError) {
            runValidationTasks("tipocuenta", value);
          }
          setTipocuenta(value);
        }}
        onBlur={() => runValidationTasks("tipocuenta", tipocuenta)}
        errorMessage={errors.tipocuenta?.errorMessage}
        hasError={errors.tipocuenta?.hasError}
        {...getOverrideProps(overrides, "tipocuenta")}
      ></TextField>
      <TextField
        label="Futgoles"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={futgoles}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              idjugador,
              idpartido,
              iddeporte,
              idtorneo,
              tipocuenta,
              futgoles: value,
              bascanastas,
              baspuntos,
              beicarrerashechas,
              beiponches,
              beihr,
              beihits,
              beifly,
              beirolas,
              futasisgol,
              beicarrerasproducidas,
              futtarjetasamarillas,
              futtarjetasrojas,
            };
            const result = onChange(modelFields);
            value = result?.futgoles ?? value;
          }
          if (errors.futgoles?.hasError) {
            runValidationTasks("futgoles", value);
          }
          setFutgoles(value);
        }}
        onBlur={() => runValidationTasks("futgoles", futgoles)}
        errorMessage={errors.futgoles?.errorMessage}
        hasError={errors.futgoles?.hasError}
        {...getOverrideProps(overrides, "futgoles")}
      ></TextField>
      <TextField
        label="Bascanastas"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={bascanastas}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              idjugador,
              idpartido,
              iddeporte,
              idtorneo,
              tipocuenta,
              futgoles,
              bascanastas: value,
              baspuntos,
              beicarrerashechas,
              beiponches,
              beihr,
              beihits,
              beifly,
              beirolas,
              futasisgol,
              beicarrerasproducidas,
              futtarjetasamarillas,
              futtarjetasrojas,
            };
            const result = onChange(modelFields);
            value = result?.bascanastas ?? value;
          }
          if (errors.bascanastas?.hasError) {
            runValidationTasks("bascanastas", value);
          }
          setBascanastas(value);
        }}
        onBlur={() => runValidationTasks("bascanastas", bascanastas)}
        errorMessage={errors.bascanastas?.errorMessage}
        hasError={errors.bascanastas?.hasError}
        {...getOverrideProps(overrides, "bascanastas")}
      ></TextField>
      <TextField
        label="Baspuntos"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={baspuntos}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              idjugador,
              idpartido,
              iddeporte,
              idtorneo,
              tipocuenta,
              futgoles,
              bascanastas,
              baspuntos: value,
              beicarrerashechas,
              beiponches,
              beihr,
              beihits,
              beifly,
              beirolas,
              futasisgol,
              beicarrerasproducidas,
              futtarjetasamarillas,
              futtarjetasrojas,
            };
            const result = onChange(modelFields);
            value = result?.baspuntos ?? value;
          }
          if (errors.baspuntos?.hasError) {
            runValidationTasks("baspuntos", value);
          }
          setBaspuntos(value);
        }}
        onBlur={() => runValidationTasks("baspuntos", baspuntos)}
        errorMessage={errors.baspuntos?.errorMessage}
        hasError={errors.baspuntos?.hasError}
        {...getOverrideProps(overrides, "baspuntos")}
      ></TextField>
      <TextField
        label="Beicarrerashechas"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={beicarrerashechas}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              idjugador,
              idpartido,
              iddeporte,
              idtorneo,
              tipocuenta,
              futgoles,
              bascanastas,
              baspuntos,
              beicarrerashechas: value,
              beiponches,
              beihr,
              beihits,
              beifly,
              beirolas,
              futasisgol,
              beicarrerasproducidas,
              futtarjetasamarillas,
              futtarjetasrojas,
            };
            const result = onChange(modelFields);
            value = result?.beicarrerashechas ?? value;
          }
          if (errors.beicarrerashechas?.hasError) {
            runValidationTasks("beicarrerashechas", value);
          }
          setBeicarrerashechas(value);
        }}
        onBlur={() =>
          runValidationTasks("beicarrerashechas", beicarrerashechas)
        }
        errorMessage={errors.beicarrerashechas?.errorMessage}
        hasError={errors.beicarrerashechas?.hasError}
        {...getOverrideProps(overrides, "beicarrerashechas")}
      ></TextField>
      <TextField
        label="Beiponches"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={beiponches}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              idjugador,
              idpartido,
              iddeporte,
              idtorneo,
              tipocuenta,
              futgoles,
              bascanastas,
              baspuntos,
              beicarrerashechas,
              beiponches: value,
              beihr,
              beihits,
              beifly,
              beirolas,
              futasisgol,
              beicarrerasproducidas,
              futtarjetasamarillas,
              futtarjetasrojas,
            };
            const result = onChange(modelFields);
            value = result?.beiponches ?? value;
          }
          if (errors.beiponches?.hasError) {
            runValidationTasks("beiponches", value);
          }
          setBeiponches(value);
        }}
        onBlur={() => runValidationTasks("beiponches", beiponches)}
        errorMessage={errors.beiponches?.errorMessage}
        hasError={errors.beiponches?.hasError}
        {...getOverrideProps(overrides, "beiponches")}
      ></TextField>
      <TextField
        label="Beihr"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={beihr}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              idjugador,
              idpartido,
              iddeporte,
              idtorneo,
              tipocuenta,
              futgoles,
              bascanastas,
              baspuntos,
              beicarrerashechas,
              beiponches,
              beihr: value,
              beihits,
              beifly,
              beirolas,
              futasisgol,
              beicarrerasproducidas,
              futtarjetasamarillas,
              futtarjetasrojas,
            };
            const result = onChange(modelFields);
            value = result?.beihr ?? value;
          }
          if (errors.beihr?.hasError) {
            runValidationTasks("beihr", value);
          }
          setBeihr(value);
        }}
        onBlur={() => runValidationTasks("beihr", beihr)}
        errorMessage={errors.beihr?.errorMessage}
        hasError={errors.beihr?.hasError}
        {...getOverrideProps(overrides, "beihr")}
      ></TextField>
      <TextField
        label="Beihits"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={beihits}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              idjugador,
              idpartido,
              iddeporte,
              idtorneo,
              tipocuenta,
              futgoles,
              bascanastas,
              baspuntos,
              beicarrerashechas,
              beiponches,
              beihr,
              beihits: value,
              beifly,
              beirolas,
              futasisgol,
              beicarrerasproducidas,
              futtarjetasamarillas,
              futtarjetasrojas,
            };
            const result = onChange(modelFields);
            value = result?.beihits ?? value;
          }
          if (errors.beihits?.hasError) {
            runValidationTasks("beihits", value);
          }
          setBeihits(value);
        }}
        onBlur={() => runValidationTasks("beihits", beihits)}
        errorMessage={errors.beihits?.errorMessage}
        hasError={errors.beihits?.hasError}
        {...getOverrideProps(overrides, "beihits")}
      ></TextField>
      <TextField
        label="Beifly"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={beifly}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              idjugador,
              idpartido,
              iddeporte,
              idtorneo,
              tipocuenta,
              futgoles,
              bascanastas,
              baspuntos,
              beicarrerashechas,
              beiponches,
              beihr,
              beihits,
              beifly: value,
              beirolas,
              futasisgol,
              beicarrerasproducidas,
              futtarjetasamarillas,
              futtarjetasrojas,
            };
            const result = onChange(modelFields);
            value = result?.beifly ?? value;
          }
          if (errors.beifly?.hasError) {
            runValidationTasks("beifly", value);
          }
          setBeifly(value);
        }}
        onBlur={() => runValidationTasks("beifly", beifly)}
        errorMessage={errors.beifly?.errorMessage}
        hasError={errors.beifly?.hasError}
        {...getOverrideProps(overrides, "beifly")}
      ></TextField>
      <TextField
        label="Beirolas"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={beirolas}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              idjugador,
              idpartido,
              iddeporte,
              idtorneo,
              tipocuenta,
              futgoles,
              bascanastas,
              baspuntos,
              beicarrerashechas,
              beiponches,
              beihr,
              beihits,
              beifly,
              beirolas: value,
              futasisgol,
              beicarrerasproducidas,
              futtarjetasamarillas,
              futtarjetasrojas,
            };
            const result = onChange(modelFields);
            value = result?.beirolas ?? value;
          }
          if (errors.beirolas?.hasError) {
            runValidationTasks("beirolas", value);
          }
          setBeirolas(value);
        }}
        onBlur={() => runValidationTasks("beirolas", beirolas)}
        errorMessage={errors.beirolas?.errorMessage}
        hasError={errors.beirolas?.hasError}
        {...getOverrideProps(overrides, "beirolas")}
      ></TextField>
      <TextField
        label="Futasisgol"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={futasisgol}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              idjugador,
              idpartido,
              iddeporte,
              idtorneo,
              tipocuenta,
              futgoles,
              bascanastas,
              baspuntos,
              beicarrerashechas,
              beiponches,
              beihr,
              beihits,
              beifly,
              beirolas,
              futasisgol: value,
              beicarrerasproducidas,
              futtarjetasamarillas,
              futtarjetasrojas,
            };
            const result = onChange(modelFields);
            value = result?.futasisgol ?? value;
          }
          if (errors.futasisgol?.hasError) {
            runValidationTasks("futasisgol", value);
          }
          setFutasisgol(value);
        }}
        onBlur={() => runValidationTasks("futasisgol", futasisgol)}
        errorMessage={errors.futasisgol?.errorMessage}
        hasError={errors.futasisgol?.hasError}
        {...getOverrideProps(overrides, "futasisgol")}
      ></TextField>
      <TextField
        label="Beicarrerasproducidas"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={beicarrerasproducidas}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              idjugador,
              idpartido,
              iddeporte,
              idtorneo,
              tipocuenta,
              futgoles,
              bascanastas,
              baspuntos,
              beicarrerashechas,
              beiponches,
              beihr,
              beihits,
              beifly,
              beirolas,
              futasisgol,
              beicarrerasproducidas: value,
              futtarjetasamarillas,
              futtarjetasrojas,
            };
            const result = onChange(modelFields);
            value = result?.beicarrerasproducidas ?? value;
          }
          if (errors.beicarrerasproducidas?.hasError) {
            runValidationTasks("beicarrerasproducidas", value);
          }
          setBeicarrerasproducidas(value);
        }}
        onBlur={() =>
          runValidationTasks("beicarrerasproducidas", beicarrerasproducidas)
        }
        errorMessage={errors.beicarrerasproducidas?.errorMessage}
        hasError={errors.beicarrerasproducidas?.hasError}
        {...getOverrideProps(overrides, "beicarrerasproducidas")}
      ></TextField>
      <TextField
        label="Futtarjetasamarillas"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={futtarjetasamarillas}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              idjugador,
              idpartido,
              iddeporte,
              idtorneo,
              tipocuenta,
              futgoles,
              bascanastas,
              baspuntos,
              beicarrerashechas,
              beiponches,
              beihr,
              beihits,
              beifly,
              beirolas,
              futasisgol,
              beicarrerasproducidas,
              futtarjetasamarillas: value,
              futtarjetasrojas,
            };
            const result = onChange(modelFields);
            value = result?.futtarjetasamarillas ?? value;
          }
          if (errors.futtarjetasamarillas?.hasError) {
            runValidationTasks("futtarjetasamarillas", value);
          }
          setFuttarjetasamarillas(value);
        }}
        onBlur={() =>
          runValidationTasks("futtarjetasamarillas", futtarjetasamarillas)
        }
        errorMessage={errors.futtarjetasamarillas?.errorMessage}
        hasError={errors.futtarjetasamarillas?.hasError}
        {...getOverrideProps(overrides, "futtarjetasamarillas")}
      ></TextField>
      <TextField
        label="Futtarjetasrojas"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={futtarjetasrojas}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              idjugador,
              idpartido,
              iddeporte,
              idtorneo,
              tipocuenta,
              futgoles,
              bascanastas,
              baspuntos,
              beicarrerashechas,
              beiponches,
              beihr,
              beihits,
              beifly,
              beirolas,
              futasisgol,
              beicarrerasproducidas,
              futtarjetasamarillas,
              futtarjetasrojas: value,
            };
            const result = onChange(modelFields);
            value = result?.futtarjetasrojas ?? value;
          }
          if (errors.futtarjetasrojas?.hasError) {
            runValidationTasks("futtarjetasrojas", value);
          }
          setFuttarjetasrojas(value);
        }}
        onBlur={() => runValidationTasks("futtarjetasrojas", futtarjetasrojas)}
        errorMessage={errors.futtarjetasrojas?.errorMessage}
        hasError={errors.futtarjetasrojas?.hasError}
        {...getOverrideProps(overrides, "futtarjetasrojas")}
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
