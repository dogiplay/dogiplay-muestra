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
import { createJugadores as createJugadoresMutations} from "../graphql/mutations";
const client = generateClient();
export default function JugadoresCreateForm(props) {
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
    iddeporte: "",
    idequipo: "",
    nombre: "",
    idjugador: "",
    idtorneo: "",
    deporte: "",
    user: "",
    perfil: "",
    posicion: "",
    edad: "",
    numero: "",
    equipo: "",
    foto: "",
    alias: "",
    tipocuenta: "",
    futgoles: "",
    futasisgol: "",
    futtarjetasallas: "",
    futtarjetasrojas: "",
    beiponches: "",
    beicarrerashechas: "",
    beicarrerasproducid: "",
    beihr: "",
    beihits: "",
    beifly: "",
    beirolas: "",
    beiporcentajebateo: "",
    mvp: "",
  };
  const [iddeporte, setIddeporte] = React.useState(initialValues.iddeporte);
  const [idequipo, setIdequipo] = React.useState(initialValues.idequipo);
  const [nombre, setNombre] = React.useState(initialValues.nombre);
  const [idjugador, setIdjugador] = React.useState(initialValues.idjugador);
  const [idtorneo, setIdtorneo] = React.useState(initialValues.idtorneo);
  const [deporte, setDeporte] = React.useState(initialValues.deporte);
  const [user, setUser] = React.useState(initialValues.user);
  const [perfil, setPerfil] = React.useState(initialValues.perfil);
  const [posicion, setPosicion] = React.useState(initialValues.posicion);
  const [edad, setEdad] = React.useState(initialValues.edad);
  const [numero, setNumero] = React.useState(initialValues.numero);
  const [equipo, setEquipo] = React.useState(initialValues.equipo);
  const [foto, setFoto] = React.useState(initialValues.foto);
  const [alias, setAlias] = React.useState(initialValues.alias);
  const [tipocuenta, setTipocuenta] = React.useState(initialValues.tipocuenta);
  const [futgoles, setFutgoles] = React.useState(initialValues.futgoles);
  const [futasisgol, setFutasisgol] = React.useState(initialValues.futasisgol);
  const [futtarjetasallas, setFuttarjetasallas] = React.useState(
    initialValues.futtarjetasallas
  );
  const [futtarjetasrojas, setFuttarjetasrojas] = React.useState(
    initialValues.futtarjetasrojas
  );
  const [beiponches, setBeiponches] = React.useState(initialValues.beiponches);
  const [beicarrerashechas, setBeicarrerashechas] = React.useState(
    initialValues.beicarrerashechas
  );
  const [beicarrerasproducid, setBeicarrerasproducid] = React.useState(
    initialValues.beicarrerasproducid
  );
  const [beihr, setBeihr] = React.useState(initialValues.beihr);
  const [beihits, setBeihits] = React.useState(initialValues.beihits);
  const [beifly, setBeifly] = React.useState(initialValues.beifly);
  const [beirolas, setBeirolas] = React.useState(initialValues.beirolas);
  const [beiporcentajebateo, setBeiporcentajebateo] = React.useState(
    initialValues.beiporcentajebateo
  );
  const [mvp, setMvp] = React.useState(initialValues.mvp);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setIddeporte(initialValues.iddeporte);
    setIdequipo(initialValues.idequipo);
    setNombre(initialValues.nombre);
    setIdjugador(initialValues.idjugador);
    setIdtorneo(initialValues.idtorneo);
    setDeporte(initialValues.deporte);
    setUser(initialValues.user);
    setPerfil(initialValues.perfil);
    setPosicion(initialValues.posicion);
    setEdad(initialValues.edad);
    setNumero(initialValues.numero);
    setEquipo(initialValues.equipo);
    setFoto(initialValues.foto);
    setAlias(initialValues.alias);
    setTipocuenta(initialValues.tipocuenta);
    setFutgoles(initialValues.futgoles);
    setFutasisgol(initialValues.futasisgol);
    setFuttarjetasallas(initialValues.futtarjetasallas);
    setFuttarjetasrojas(initialValues.futtarjetasrojas);
    setBeiponches(initialValues.beiponches);
    setBeicarrerashechas(initialValues.beicarrerashechas);
    setBeicarrerasproducid(initialValues.beicarrerasproducid);
    setBeihr(initialValues.beihr);
    setBeihits(initialValues.beihits);
    setBeifly(initialValues.beifly);
    setBeirolas(initialValues.beirolas);
    setBeiporcentajebateo(initialValues.beiporcentajebateo);
    setMvp(initialValues.mvp);
    setErrors({});
  };
  const validations = {
    iddeporte: [],
    idequipo: [],
    nombre: [],
    idjugador: [],
    idtorneo: [],
    deporte: [],
    user: [],
    perfil: [],
    posicion: [],
    edad: [],
    numero: [],
    equipo: [],
    foto: [{ type: "URL" }],
    alias: [],
    tipocuenta: [],
    futgoles: [],
    futasisgol: [],
    futtarjetasallas: [],
    futtarjetasrojas: [],
    beiponches: [],
    beicarrerashechas: [],
    beicarrerasproducid: [],
    beihr: [],
    beihits: [],
    beifly: [],
    beirolas: [],
    beiporcentajebateo: [],
    mvp: [],
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
          iddeporte,
          idequipo,
          nombre,
          idjugador,
          idtorneo,
          deporte,
          user,
          perfil,
          posicion,
          edad,
          numero,
          equipo,
          foto,
          alias,
          tipocuenta,
          futgoles,
          futasisgol,
          futtarjetasallas,
          futtarjetasrojas,
          beiponches,
          beicarrerashechas,
          beicarrerasproducid,
          beihr,
          beihits,
          beifly,
          beirolas,
          beiporcentajebateo,
          mvp,
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
            query: createJugadores.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "JugadoresCreateForm")}
      {...rest}
    >
      <TextField
        label="Iddeporte"
        isRequired={false}
        isReadOnly={false}
        value={iddeporte}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              iddeporte: value,
              idequipo,
              nombre,
              idjugador,
              idtorneo,
              deporte,
              user,
              perfil,
              posicion,
              edad,
              numero,
              equipo,
              foto,
              alias,
              tipocuenta,
              futgoles,
              futasisgol,
              futtarjetasallas,
              futtarjetasrojas,
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
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
        label="Idequipo"
        isRequired={false}
        isReadOnly={false}
        value={idequipo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              iddeporte,
              idequipo: value,
              nombre,
              idjugador,
              idtorneo,
              deporte,
              user,
              perfil,
              posicion,
              edad,
              numero,
              equipo,
              foto,
              alias,
              tipocuenta,
              futgoles,
              futasisgol,
              futtarjetasallas,
              futtarjetasrojas,
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
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
        label="Nombre"
        isRequired={false}
        isReadOnly={false}
        value={nombre}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              iddeporte,
              idequipo,
              nombre: value,
              idjugador,
              idtorneo,
              deporte,
              user,
              perfil,
              posicion,
              edad,
              numero,
              equipo,
              foto,
              alias,
              tipocuenta,
              futgoles,
              futasisgol,
              futtarjetasallas,
              futtarjetasrojas,
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
            };
            const result = onChange(modelFields);
            value = result?.nombre ?? value;
          }
          if (errors.nombre?.hasError) {
            runValidationTasks("nombre", value);
          }
          setNombre(value);
        }}
        onBlur={() => runValidationTasks("nombre", nombre)}
        errorMessage={errors.nombre?.errorMessage}
        hasError={errors.nombre?.hasError}
        {...getOverrideProps(overrides, "nombre")}
      ></TextField>
      <TextField
        label="Idjugador"
        isRequired={false}
        isReadOnly={false}
        value={idjugador}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              iddeporte,
              idequipo,
              nombre,
              idjugador: value,
              idtorneo,
              deporte,
              user,
              perfil,
              posicion,
              edad,
              numero,
              equipo,
              foto,
              alias,
              tipocuenta,
              futgoles,
              futasisgol,
              futtarjetasallas,
              futtarjetasrojas,
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
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
        label="Idtorneo"
        isRequired={false}
        isReadOnly={false}
        value={idtorneo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              iddeporte,
              idequipo,
              nombre,
              idjugador,
              idtorneo: value,
              deporte,
              user,
              perfil,
              posicion,
              edad,
              numero,
              equipo,
              foto,
              alias,
              tipocuenta,
              futgoles,
              futasisgol,
              futtarjetasallas,
              futtarjetasrojas,
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
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
        label="Deporte"
        isRequired={false}
        isReadOnly={false}
        value={deporte}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              iddeporte,
              idequipo,
              nombre,
              idjugador,
              idtorneo,
              deporte: value,
              user,
              perfil,
              posicion,
              edad,
              numero,
              equipo,
              foto,
              alias,
              tipocuenta,
              futgoles,
              futasisgol,
              futtarjetasallas,
              futtarjetasrojas,
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
            };
            const result = onChange(modelFields);
            value = result?.deporte ?? value;
          }
          if (errors.deporte?.hasError) {
            runValidationTasks("deporte", value);
          }
          setDeporte(value);
        }}
        onBlur={() => runValidationTasks("deporte", deporte)}
        errorMessage={errors.deporte?.errorMessage}
        hasError={errors.deporte?.hasError}
        {...getOverrideProps(overrides, "deporte")}
      ></TextField>
      <TextField
        label="User"
        isRequired={false}
        isReadOnly={false}
        value={user}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              iddeporte,
              idequipo,
              nombre,
              idjugador,
              idtorneo,
              deporte,
              user: value,
              perfil,
              posicion,
              edad,
              numero,
              equipo,
              foto,
              alias,
              tipocuenta,
              futgoles,
              futasisgol,
              futtarjetasallas,
              futtarjetasrojas,
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
            };
            const result = onChange(modelFields);
            value = result?.user ?? value;
          }
          if (errors.user?.hasError) {
            runValidationTasks("user", value);
          }
          setUser(value);
        }}
        onBlur={() => runValidationTasks("user", user)}
        errorMessage={errors.user?.errorMessage}
        hasError={errors.user?.hasError}
        {...getOverrideProps(overrides, "user")}
      ></TextField>
      <TextField
        label="Perfil"
        isRequired={false}
        isReadOnly={false}
        value={perfil}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              iddeporte,
              idequipo,
              nombre,
              idjugador,
              idtorneo,
              deporte,
              user,
              perfil: value,
              posicion,
              edad,
              numero,
              equipo,
              foto,
              alias,
              tipocuenta,
              futgoles,
              futasisgol,
              futtarjetasallas,
              futtarjetasrojas,
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
            };
            const result = onChange(modelFields);
            value = result?.perfil ?? value;
          }
          if (errors.perfil?.hasError) {
            runValidationTasks("perfil", value);
          }
          setPerfil(value);
        }}
        onBlur={() => runValidationTasks("perfil", perfil)}
        errorMessage={errors.perfil?.errorMessage}
        hasError={errors.perfil?.hasError}
        {...getOverrideProps(overrides, "perfil")}
      ></TextField>
      <TextField
        label="Posicion"
        isRequired={false}
        isReadOnly={false}
        value={posicion}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              iddeporte,
              idequipo,
              nombre,
              idjugador,
              idtorneo,
              deporte,
              user,
              perfil,
              posicion: value,
              edad,
              numero,
              equipo,
              foto,
              alias,
              tipocuenta,
              futgoles,
              futasisgol,
              futtarjetasallas,
              futtarjetasrojas,
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
            };
            const result = onChange(modelFields);
            value = result?.posicion ?? value;
          }
          if (errors.posicion?.hasError) {
            runValidationTasks("posicion", value);
          }
          setPosicion(value);
        }}
        onBlur={() => runValidationTasks("posicion", posicion)}
        errorMessage={errors.posicion?.errorMessage}
        hasError={errors.posicion?.hasError}
        {...getOverrideProps(overrides, "posicion")}
      ></TextField>
      <TextField
        label="Edad"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={edad}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              iddeporte,
              idequipo,
              nombre,
              idjugador,
              idtorneo,
              deporte,
              user,
              perfil,
              posicion,
              edad: value,
              numero,
              equipo,
              foto,
              alias,
              tipocuenta,
              futgoles,
              futasisgol,
              futtarjetasallas,
              futtarjetasrojas,
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
            };
            const result = onChange(modelFields);
            value = result?.edad ?? value;
          }
          if (errors.edad?.hasError) {
            runValidationTasks("edad", value);
          }
          setEdad(value);
        }}
        onBlur={() => runValidationTasks("edad", edad)}
        errorMessage={errors.edad?.errorMessage}
        hasError={errors.edad?.hasError}
        {...getOverrideProps(overrides, "edad")}
      ></TextField>
      <TextField
        label="Numero"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={numero}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              iddeporte,
              idequipo,
              nombre,
              idjugador,
              idtorneo,
              deporte,
              user,
              perfil,
              posicion,
              edad,
              numero: value,
              equipo,
              foto,
              alias,
              tipocuenta,
              futgoles,
              futasisgol,
              futtarjetasallas,
              futtarjetasrojas,
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
            };
            const result = onChange(modelFields);
            value = result?.numero ?? value;
          }
          if (errors.numero?.hasError) {
            runValidationTasks("numero", value);
          }
          setNumero(value);
        }}
        onBlur={() => runValidationTasks("numero", numero)}
        errorMessage={errors.numero?.errorMessage}
        hasError={errors.numero?.hasError}
        {...getOverrideProps(overrides, "numero")}
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
              iddeporte,
              idequipo,
              nombre,
              idjugador,
              idtorneo,
              deporte,
              user,
              perfil,
              posicion,
              edad,
              numero,
              equipo: value,
              foto,
              alias,
              tipocuenta,
              futgoles,
              futasisgol,
              futtarjetasallas,
              futtarjetasrojas,
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
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
        label="Foto"
        isRequired={false}
        isReadOnly={false}
        value={foto}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              iddeporte,
              idequipo,
              nombre,
              idjugador,
              idtorneo,
              deporte,
              user,
              perfil,
              posicion,
              edad,
              numero,
              equipo,
              foto: value,
              alias,
              tipocuenta,
              futgoles,
              futasisgol,
              futtarjetasallas,
              futtarjetasrojas,
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
            };
            const result = onChange(modelFields);
            value = result?.foto ?? value;
          }
          if (errors.foto?.hasError) {
            runValidationTasks("foto", value);
          }
          setFoto(value);
        }}
        onBlur={() => runValidationTasks("foto", foto)}
        errorMessage={errors.foto?.errorMessage}
        hasError={errors.foto?.hasError}
        {...getOverrideProps(overrides, "foto")}
      ></TextField>
      <TextField
        label="Alias"
        isRequired={false}
        isReadOnly={false}
        value={alias}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              iddeporte,
              idequipo,
              nombre,
              idjugador,
              idtorneo,
              deporte,
              user,
              perfil,
              posicion,
              edad,
              numero,
              equipo,
              foto,
              alias: value,
              tipocuenta,
              futgoles,
              futasisgol,
              futtarjetasallas,
              futtarjetasrojas,
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
            };
            const result = onChange(modelFields);
            value = result?.alias ?? value;
          }
          if (errors.alias?.hasError) {
            runValidationTasks("alias", value);
          }
          setAlias(value);
        }}
        onBlur={() => runValidationTasks("alias", alias)}
        errorMessage={errors.alias?.errorMessage}
        hasError={errors.alias?.hasError}
        {...getOverrideProps(overrides, "alias")}
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
              iddeporte,
              idequipo,
              nombre,
              idjugador,
              idtorneo,
              deporte,
              user,
              perfil,
              posicion,
              edad,
              numero,
              equipo,
              foto,
              alias,
              tipocuenta: value,
              futgoles,
              futasisgol,
              futtarjetasallas,
              futtarjetasrojas,
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
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
              iddeporte,
              idequipo,
              nombre,
              idjugador,
              idtorneo,
              deporte,
              user,
              perfil,
              posicion,
              edad,
              numero,
              equipo,
              foto,
              alias,
              tipocuenta,
              futgoles: value,
              futasisgol,
              futtarjetasallas,
              futtarjetasrojas,
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
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
              iddeporte,
              idequipo,
              nombre,
              idjugador,
              idtorneo,
              deporte,
              user,
              perfil,
              posicion,
              edad,
              numero,
              equipo,
              foto,
              alias,
              tipocuenta,
              futgoles,
              futasisgol: value,
              futtarjetasallas,
              futtarjetasrojas,
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
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
        label="Futtarjetasallas"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={futtarjetasallas}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              iddeporte,
              idequipo,
              nombre,
              idjugador,
              idtorneo,
              deporte,
              user,
              perfil,
              posicion,
              edad,
              numero,
              equipo,
              foto,
              alias,
              tipocuenta,
              futgoles,
              futasisgol,
              futtarjetasallas: value,
              futtarjetasrojas,
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
            };
            const result = onChange(modelFields);
            value = result?.futtarjetasallas ?? value;
          }
          if (errors.futtarjetasallas?.hasError) {
            runValidationTasks("futtarjetasallas", value);
          }
          setFuttarjetasallas(value);
        }}
        onBlur={() => runValidationTasks("futtarjetasallas", futtarjetasallas)}
        errorMessage={errors.futtarjetasallas?.errorMessage}
        hasError={errors.futtarjetasallas?.hasError}
        {...getOverrideProps(overrides, "futtarjetasallas")}
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
              iddeporte,
              idequipo,
              nombre,
              idjugador,
              idtorneo,
              deporte,
              user,
              perfil,
              posicion,
              edad,
              numero,
              equipo,
              foto,
              alias,
              tipocuenta,
              futgoles,
              futasisgol,
              futtarjetasallas,
              futtarjetasrojas: value,
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
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
              iddeporte,
              idequipo,
              nombre,
              idjugador,
              idtorneo,
              deporte,
              user,
              perfil,
              posicion,
              edad,
              numero,
              equipo,
              foto,
              alias,
              tipocuenta,
              futgoles,
              futasisgol,
              futtarjetasallas,
              futtarjetasrojas,
              beiponches: value,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
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
              iddeporte,
              idequipo,
              nombre,
              idjugador,
              idtorneo,
              deporte,
              user,
              perfil,
              posicion,
              edad,
              numero,
              equipo,
              foto,
              alias,
              tipocuenta,
              futgoles,
              futasisgol,
              futtarjetasallas,
              futtarjetasrojas,
              beiponches,
              beicarrerashechas: value,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
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
        label="Beicarrerasproducid"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={beicarrerasproducid}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              iddeporte,
              idequipo,
              nombre,
              idjugador,
              idtorneo,
              deporte,
              user,
              perfil,
              posicion,
              edad,
              numero,
              equipo,
              foto,
              alias,
              tipocuenta,
              futgoles,
              futasisgol,
              futtarjetasallas,
              futtarjetasrojas,
              beiponches,
              beicarrerashechas,
              beicarrerasproducid: value,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
            };
            const result = onChange(modelFields);
            value = result?.beicarrerasproducid ?? value;
          }
          if (errors.beicarrerasproducid?.hasError) {
            runValidationTasks("beicarrerasproducid", value);
          }
          setBeicarrerasproducid(value);
        }}
        onBlur={() =>
          runValidationTasks("beicarrerasproducid", beicarrerasproducid)
        }
        errorMessage={errors.beicarrerasproducid?.errorMessage}
        hasError={errors.beicarrerasproducid?.hasError}
        {...getOverrideProps(overrides, "beicarrerasproducid")}
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
              iddeporte,
              idequipo,
              nombre,
              idjugador,
              idtorneo,
              deporte,
              user,
              perfil,
              posicion,
              edad,
              numero,
              equipo,
              foto,
              alias,
              tipocuenta,
              futgoles,
              futasisgol,
              futtarjetasallas,
              futtarjetasrojas,
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr: value,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
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
              iddeporte,
              idequipo,
              nombre,
              idjugador,
              idtorneo,
              deporte,
              user,
              perfil,
              posicion,
              edad,
              numero,
              equipo,
              foto,
              alias,
              tipocuenta,
              futgoles,
              futasisgol,
              futtarjetasallas,
              futtarjetasrojas,
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits: value,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
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
              iddeporte,
              idequipo,
              nombre,
              idjugador,
              idtorneo,
              deporte,
              user,
              perfil,
              posicion,
              edad,
              numero,
              equipo,
              foto,
              alias,
              tipocuenta,
              futgoles,
              futasisgol,
              futtarjetasallas,
              futtarjetasrojas,
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly: value,
              beirolas,
              beiporcentajebateo,
              mvp,
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
              iddeporte,
              idequipo,
              nombre,
              idjugador,
              idtorneo,
              deporte,
              user,
              perfil,
              posicion,
              edad,
              numero,
              equipo,
              foto,
              alias,
              tipocuenta,
              futgoles,
              futasisgol,
              futtarjetasallas,
              futtarjetasrojas,
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas: value,
              beiporcentajebateo,
              mvp,
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
        label="Beiporcentajebateo"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={beiporcentajebateo}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              iddeporte,
              idequipo,
              nombre,
              idjugador,
              idtorneo,
              deporte,
              user,
              perfil,
              posicion,
              edad,
              numero,
              equipo,
              foto,
              alias,
              tipocuenta,
              futgoles,
              futasisgol,
              futtarjetasallas,
              futtarjetasrojas,
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo: value,
              mvp,
            };
            const result = onChange(modelFields);
            value = result?.beiporcentajebateo ?? value;
          }
          if (errors.beiporcentajebateo?.hasError) {
            runValidationTasks("beiporcentajebateo", value);
          }
          setBeiporcentajebateo(value);
        }}
        onBlur={() =>
          runValidationTasks("beiporcentajebateo", beiporcentajebateo)
        }
        errorMessage={errors.beiporcentajebateo?.errorMessage}
        hasError={errors.beiporcentajebateo?.hasError}
        {...getOverrideProps(overrides, "beiporcentajebateo")}
      ></TextField>
      <TextField
        label="Mvp"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={mvp}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              iddeporte,
              idequipo,
              nombre,
              idjugador,
              idtorneo,
              deporte,
              user,
              perfil,
              posicion,
              edad,
              numero,
              equipo,
              foto,
              alias,
              tipocuenta,
              futgoles,
              futasisgol,
              futtarjetasallas,
              futtarjetasrojas,
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp: value,
            };
            const result = onChange(modelFields);
            value = result?.mvp ?? value;
          }
          if (errors.mvp?.hasError) {
            runValidationTasks("mvp", value);
          }
          setMvp(value);
        }}
        onBlur={() => runValidationTasks("mvp", mvp)}
        errorMessage={errors.mvp?.errorMessage}
        hasError={errors.mvp?.hasError}
        {...getOverrideProps(overrides, "mvp")}
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
