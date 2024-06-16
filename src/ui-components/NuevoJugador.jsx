/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Jugadores } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function NuevoJugador(props) {
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
    beiponches: "",
    beicarrerashechas: "",
    beicarrerasproducid: "",
    beihr: "",
    beihits: "",
    beifly: "",
    beirolas: "",
    beiporcentajebateo: "",
    mvp: "",
    futgoleadorsemana: "",
    beipitentradaslanzadas: "",
    beipitcarreraslimpias: "",
    beipithitstotales: "",
    beipitponchestotales: "",
    beipitera: "",
    beipitjuegosganados: "",
    beipitjuegosperdidos: "",
    clave_liga: "",
    boxajecombates: "",
    boxajetriunfos: "",
    boxajederrotas: "",
    boxajeempates: "",
    boxKO: "",
    boxgimnasio: "",
    pais: "",
    ciudad: "",
    categoria: "",
    ajedrezelo: "",
    beipitchervelmax: "",
    beipitchervelprom: "",
    telefono: "",
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
  const [futgoleadorsemana, setFutgoleadorsemana] = React.useState(
    initialValues.futgoleadorsemana
  );
  const [beipitentradaslanzadas, setBeipitentradaslanzadas] = React.useState(
    initialValues.beipitentradaslanzadas
  );
  const [beipitcarreraslimpias, setBeipitcarreraslimpias] = React.useState(
    initialValues.beipitcarreraslimpias
  );
  const [beipithitstotales, setBeipithitstotales] = React.useState(
    initialValues.beipithitstotales
  );
  const [beipitponchestotales, setBeipitponchestotales] = React.useState(
    initialValues.beipitponchestotales
  );
  const [beipitera, setBeipitera] = React.useState(initialValues.beipitera);
  const [beipitjuegosganados, setBeipitjuegosganados] = React.useState(
    initialValues.beipitjuegosganados
  );
  const [beipitjuegosperdidos, setBeipitjuegosperdidos] = React.useState(
    initialValues.beipitjuegosperdidos
  );
  const [clave_liga, setClave_liga] = React.useState(initialValues.clave_liga);
  const [boxajecombates, setBoxajecombates] = React.useState(
    initialValues.boxajecombates
  );
  const [boxajetriunfos, setBoxajetriunfos] = React.useState(
    initialValues.boxajetriunfos
  );
  const [boxajederrotas, setBoxajederrotas] = React.useState(
    initialValues.boxajederrotas
  );
  const [boxajeempates, setBoxajeempates] = React.useState(
    initialValues.boxajeempates
  );
  const [boxKO, setBoxKO] = React.useState(initialValues.boxKO);
  const [boxgimnasio, setBoxgimnasio] = React.useState(
    initialValues.boxgimnasio
  );
  const [pais, setPais] = React.useState(initialValues.pais);
  const [ciudad, setCiudad] = React.useState(initialValues.ciudad);
  const [categoria, setCategoria] = React.useState(initialValues.categoria);
  const [ajedrezelo, setAjedrezelo] = React.useState(initialValues.ajedrezelo);
  const [beipitchervelmax, setBeipitchervelmax] = React.useState(
    initialValues.beipitchervelmax
  );
  const [beipitchervelprom, setBeipitchervelprom] = React.useState(
    initialValues.beipitchervelprom
  );
  const [telefono, setTelefono] = React.useState(initialValues.telefono);
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
    setBeiponches(initialValues.beiponches);
    setBeicarrerashechas(initialValues.beicarrerashechas);
    setBeicarrerasproducid(initialValues.beicarrerasproducid);
    setBeihr(initialValues.beihr);
    setBeihits(initialValues.beihits);
    setBeifly(initialValues.beifly);
    setBeirolas(initialValues.beirolas);
    setBeiporcentajebateo(initialValues.beiporcentajebateo);
    setMvp(initialValues.mvp);
    setFutgoleadorsemana(initialValues.futgoleadorsemana);
    setBeipitentradaslanzadas(initialValues.beipitentradaslanzadas);
    setBeipitcarreraslimpias(initialValues.beipitcarreraslimpias);
    setBeipithitstotales(initialValues.beipithitstotales);
    setBeipitponchestotales(initialValues.beipitponchestotales);
    setBeipitera(initialValues.beipitera);
    setBeipitjuegosganados(initialValues.beipitjuegosganados);
    setBeipitjuegosperdidos(initialValues.beipitjuegosperdidos);
    setClave_liga(initialValues.clave_liga);
    setBoxajecombates(initialValues.boxajecombates);
    setBoxajetriunfos(initialValues.boxajetriunfos);
    setBoxajederrotas(initialValues.boxajederrotas);
    setBoxajeempates(initialValues.boxajeempates);
    setBoxKO(initialValues.boxKO);
    setBoxgimnasio(initialValues.boxgimnasio);
    setPais(initialValues.pais);
    setCiudad(initialValues.ciudad);
    setCategoria(initialValues.categoria);
    setAjedrezelo(initialValues.ajedrezelo);
    setBeipitchervelmax(initialValues.beipitchervelmax);
    setBeipitchervelprom(initialValues.beipitchervelprom);
    setTelefono(initialValues.telefono);
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
    beiponches: [],
    beicarrerashechas: [],
    beicarrerasproducid: [],
    beihr: [],
    beihits: [],
    beifly: [],
    beirolas: [],
    beiporcentajebateo: [],
    mvp: [],
    futgoleadorsemana: [],
    beipitentradaslanzadas: [],
    beipitcarreraslimpias: [],
    beipithitstotales: [],
    beipitponchestotales: [],
    beipitera: [],
    beipitjuegosganados: [],
    beipitjuegosperdidos: [],
    clave_liga: [],
    boxajecombates: [],
    boxajetriunfos: [],
    boxajederrotas: [],
    boxajeempates: [],
    boxKO: [],
    boxgimnasio: [],
    pais: [],
    ciudad: [],
    categoria: [],
    ajedrezelo: [],
    beipitchervelmax: [],
    beipitchervelprom: [],
    telefono: [],
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
          beiponches,
          beicarrerashechas,
          beicarrerasproducid,
          beihr,
          beihits,
          beifly,
          beirolas,
          beiporcentajebateo,
          mvp,
          futgoleadorsemana,
          beipitentradaslanzadas,
          beipitcarreraslimpias,
          beipithitstotales,
          beipitponchestotales,
          beipitera,
          beipitjuegosganados,
          beipitjuegosperdidos,
          clave_liga,
          boxajecombates,
          boxajetriunfos,
          boxajederrotas,
          boxajeempates,
          boxKO,
          boxgimnasio,
          pais,
          ciudad,
          categoria,
          ajedrezelo,
          beipitchervelmax,
          beipitchervelprom,
          telefono,
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
          await DataStore.save(new Jugadores(modelFields));
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
      {...getOverrideProps(overrides, "NuevoJugador")}
      {...rest}
    >
      <TextField
        label="Deporte"
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
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
        label="Equipo"
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
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
        label="Clave del jugador"
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
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
        label="Clave del torneo"
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
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
        label="Ponches"
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
              beiponches: value,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
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
        label="Carreras hechas"
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
              beiponches,
              beicarrerashechas: value,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
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
        label="Carreras producidas"
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid: value,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
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
        label="Numero de home runs"
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr: value,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
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
        label="Numero de hits"
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits: value,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
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
        label="Numero de flys"
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly: value,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
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
        label="Numero de rolas"
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas: value,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
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
        label="Porcentaje de bateo"
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo: value,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
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
        label="Numero de MVP"
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp: value,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
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
      <TextField
        label="Futgoleadorsemana"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={futgoleadorsemana}
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana: value,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
            };
            const result = onChange(modelFields);
            value = result?.futgoleadorsemana ?? value;
          }
          if (errors.futgoleadorsemana?.hasError) {
            runValidationTasks("futgoleadorsemana", value);
          }
          setFutgoleadorsemana(value);
        }}
        onBlur={() =>
          runValidationTasks("futgoleadorsemana", futgoleadorsemana)
        }
        errorMessage={errors.futgoleadorsemana?.errorMessage}
        hasError={errors.futgoleadorsemana?.hasError}
        {...getOverrideProps(overrides, "futgoleadorsemana")}
      ></TextField>
      <TextField
        label="Beipitentradaslanzadas"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={beipitentradaslanzadas}
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas: value,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
            };
            const result = onChange(modelFields);
            value = result?.beipitentradaslanzadas ?? value;
          }
          if (errors.beipitentradaslanzadas?.hasError) {
            runValidationTasks("beipitentradaslanzadas", value);
          }
          setBeipitentradaslanzadas(value);
        }}
        onBlur={() =>
          runValidationTasks("beipitentradaslanzadas", beipitentradaslanzadas)
        }
        errorMessage={errors.beipitentradaslanzadas?.errorMessage}
        hasError={errors.beipitentradaslanzadas?.hasError}
        {...getOverrideProps(overrides, "beipitentradaslanzadas")}
      ></TextField>
      <TextField
        label="Beipitcarreraslimpias"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={beipitcarreraslimpias}
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias: value,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
            };
            const result = onChange(modelFields);
            value = result?.beipitcarreraslimpias ?? value;
          }
          if (errors.beipitcarreraslimpias?.hasError) {
            runValidationTasks("beipitcarreraslimpias", value);
          }
          setBeipitcarreraslimpias(value);
        }}
        onBlur={() =>
          runValidationTasks("beipitcarreraslimpias", beipitcarreraslimpias)
        }
        errorMessage={errors.beipitcarreraslimpias?.errorMessage}
        hasError={errors.beipitcarreraslimpias?.hasError}
        {...getOverrideProps(overrides, "beipitcarreraslimpias")}
      ></TextField>
      <TextField
        label="Beipithitstotales"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={beipithitstotales}
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales: value,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
            };
            const result = onChange(modelFields);
            value = result?.beipithitstotales ?? value;
          }
          if (errors.beipithitstotales?.hasError) {
            runValidationTasks("beipithitstotales", value);
          }
          setBeipithitstotales(value);
        }}
        onBlur={() =>
          runValidationTasks("beipithitstotales", beipithitstotales)
        }
        errorMessage={errors.beipithitstotales?.errorMessage}
        hasError={errors.beipithitstotales?.hasError}
        {...getOverrideProps(overrides, "beipithitstotales")}
      ></TextField>
      <TextField
        label="Beipitponchestotales"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={beipitponchestotales}
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales: value,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
            };
            const result = onChange(modelFields);
            value = result?.beipitponchestotales ?? value;
          }
          if (errors.beipitponchestotales?.hasError) {
            runValidationTasks("beipitponchestotales", value);
          }
          setBeipitponchestotales(value);
        }}
        onBlur={() =>
          runValidationTasks("beipitponchestotales", beipitponchestotales)
        }
        errorMessage={errors.beipitponchestotales?.errorMessage}
        hasError={errors.beipitponchestotales?.hasError}
        {...getOverrideProps(overrides, "beipitponchestotales")}
      ></TextField>
      <TextField
        label="Beipitera"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={beipitera}
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera: value,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
            };
            const result = onChange(modelFields);
            value = result?.beipitera ?? value;
          }
          if (errors.beipitera?.hasError) {
            runValidationTasks("beipitera", value);
          }
          setBeipitera(value);
        }}
        onBlur={() => runValidationTasks("beipitera", beipitera)}
        errorMessage={errors.beipitera?.errorMessage}
        hasError={errors.beipitera?.hasError}
        {...getOverrideProps(overrides, "beipitera")}
      ></TextField>
      <TextField
        label="Beipitjuegosganados"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={beipitjuegosganados}
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados: value,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
            };
            const result = onChange(modelFields);
            value = result?.beipitjuegosganados ?? value;
          }
          if (errors.beipitjuegosganados?.hasError) {
            runValidationTasks("beipitjuegosganados", value);
          }
          setBeipitjuegosganados(value);
        }}
        onBlur={() =>
          runValidationTasks("beipitjuegosganados", beipitjuegosganados)
        }
        errorMessage={errors.beipitjuegosganados?.errorMessage}
        hasError={errors.beipitjuegosganados?.hasError}
        {...getOverrideProps(overrides, "beipitjuegosganados")}
      ></TextField>
      <TextField
        label="Beipitjuegosperdidos"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={beipitjuegosperdidos}
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos: value,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
            };
            const result = onChange(modelFields);
            value = result?.beipitjuegosperdidos ?? value;
          }
          if (errors.beipitjuegosperdidos?.hasError) {
            runValidationTasks("beipitjuegosperdidos", value);
          }
          setBeipitjuegosperdidos(value);
        }}
        onBlur={() =>
          runValidationTasks("beipitjuegosperdidos", beipitjuegosperdidos)
        }
        errorMessage={errors.beipitjuegosperdidos?.errorMessage}
        hasError={errors.beipitjuegosperdidos?.hasError}
        {...getOverrideProps(overrides, "beipitjuegosperdidos")}
      ></TextField>
      <TextField
        label="Clave liga"
        isRequired={false}
        isReadOnly={false}
        value={clave_liga}
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
              alias,
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga: value,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
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
        label="Boxajecombates"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={boxajecombates}
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates: value,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
            };
            const result = onChange(modelFields);
            value = result?.boxajecombates ?? value;
          }
          if (errors.boxajecombates?.hasError) {
            runValidationTasks("boxajecombates", value);
          }
          setBoxajecombates(value);
        }}
        onBlur={() => runValidationTasks("boxajecombates", boxajecombates)}
        errorMessage={errors.boxajecombates?.errorMessage}
        hasError={errors.boxajecombates?.hasError}
        {...getOverrideProps(overrides, "boxajecombates")}
      ></TextField>
      <TextField
        label="Boxajetriunfos"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={boxajetriunfos}
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos: value,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
            };
            const result = onChange(modelFields);
            value = result?.boxajetriunfos ?? value;
          }
          if (errors.boxajetriunfos?.hasError) {
            runValidationTasks("boxajetriunfos", value);
          }
          setBoxajetriunfos(value);
        }}
        onBlur={() => runValidationTasks("boxajetriunfos", boxajetriunfos)}
        errorMessage={errors.boxajetriunfos?.errorMessage}
        hasError={errors.boxajetriunfos?.hasError}
        {...getOverrideProps(overrides, "boxajetriunfos")}
      ></TextField>
      <TextField
        label="Boxajederrotas"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={boxajederrotas}
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas: value,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
            };
            const result = onChange(modelFields);
            value = result?.boxajederrotas ?? value;
          }
          if (errors.boxajederrotas?.hasError) {
            runValidationTasks("boxajederrotas", value);
          }
          setBoxajederrotas(value);
        }}
        onBlur={() => runValidationTasks("boxajederrotas", boxajederrotas)}
        errorMessage={errors.boxajederrotas?.errorMessage}
        hasError={errors.boxajederrotas?.hasError}
        {...getOverrideProps(overrides, "boxajederrotas")}
      ></TextField>
      <TextField
        label="Boxajeempates"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={boxajeempates}
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates: value,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
            };
            const result = onChange(modelFields);
            value = result?.boxajeempates ?? value;
          }
          if (errors.boxajeempates?.hasError) {
            runValidationTasks("boxajeempates", value);
          }
          setBoxajeempates(value);
        }}
        onBlur={() => runValidationTasks("boxajeempates", boxajeempates)}
        errorMessage={errors.boxajeempates?.errorMessage}
        hasError={errors.boxajeempates?.hasError}
        {...getOverrideProps(overrides, "boxajeempates")}
      ></TextField>
      <TextField
        label="Box ko"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={boxKO}
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO: value,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
            };
            const result = onChange(modelFields);
            value = result?.boxKO ?? value;
          }
          if (errors.boxKO?.hasError) {
            runValidationTasks("boxKO", value);
          }
          setBoxKO(value);
        }}
        onBlur={() => runValidationTasks("boxKO", boxKO)}
        errorMessage={errors.boxKO?.errorMessage}
        hasError={errors.boxKO?.hasError}
        {...getOverrideProps(overrides, "boxKO")}
      ></TextField>
      <TextField
        label="Boxgimnasio"
        isRequired={false}
        isReadOnly={false}
        value={boxgimnasio}
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
              alias,
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio: value,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
            };
            const result = onChange(modelFields);
            value = result?.boxgimnasio ?? value;
          }
          if (errors.boxgimnasio?.hasError) {
            runValidationTasks("boxgimnasio", value);
          }
          setBoxgimnasio(value);
        }}
        onBlur={() => runValidationTasks("boxgimnasio", boxgimnasio)}
        errorMessage={errors.boxgimnasio?.errorMessage}
        hasError={errors.boxgimnasio?.hasError}
        {...getOverrideProps(overrides, "boxgimnasio")}
      ></TextField>
      <TextField
        label="Pais"
        isRequired={false}
        isReadOnly={false}
        value={pais}
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
              alias,
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais: value,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
            };
            const result = onChange(modelFields);
            value = result?.pais ?? value;
          }
          if (errors.pais?.hasError) {
            runValidationTasks("pais", value);
          }
          setPais(value);
        }}
        onBlur={() => runValidationTasks("pais", pais)}
        errorMessage={errors.pais?.errorMessage}
        hasError={errors.pais?.hasError}
        {...getOverrideProps(overrides, "pais")}
      ></TextField>
      <TextField
        label="Ciudad"
        isRequired={false}
        isReadOnly={false}
        value={ciudad}
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
              alias,
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad: value,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
            };
            const result = onChange(modelFields);
            value = result?.ciudad ?? value;
          }
          if (errors.ciudad?.hasError) {
            runValidationTasks("ciudad", value);
          }
          setCiudad(value);
        }}
        onBlur={() => runValidationTasks("ciudad", ciudad)}
        errorMessage={errors.ciudad?.errorMessage}
        hasError={errors.ciudad?.hasError}
        {...getOverrideProps(overrides, "ciudad")}
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria: value,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
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
        label="Ajedrezelo"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={ajedrezelo}
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo: value,
              beipitchervelmax,
              beipitchervelprom,
              telefono,
            };
            const result = onChange(modelFields);
            value = result?.ajedrezelo ?? value;
          }
          if (errors.ajedrezelo?.hasError) {
            runValidationTasks("ajedrezelo", value);
          }
          setAjedrezelo(value);
        }}
        onBlur={() => runValidationTasks("ajedrezelo", ajedrezelo)}
        errorMessage={errors.ajedrezelo?.errorMessage}
        hasError={errors.ajedrezelo?.hasError}
        {...getOverrideProps(overrides, "ajedrezelo")}
      ></TextField>
      <TextField
        label="Beipitchervelmax"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={beipitchervelmax}
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax: value,
              beipitchervelprom,
              telefono,
            };
            const result = onChange(modelFields);
            value = result?.beipitchervelmax ?? value;
          }
          if (errors.beipitchervelmax?.hasError) {
            runValidationTasks("beipitchervelmax", value);
          }
          setBeipitchervelmax(value);
        }}
        onBlur={() => runValidationTasks("beipitchervelmax", beipitchervelmax)}
        errorMessage={errors.beipitchervelmax?.errorMessage}
        hasError={errors.beipitchervelmax?.hasError}
        {...getOverrideProps(overrides, "beipitchervelmax")}
      ></TextField>
      <TextField
        label="Beipitchervelprom"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={beipitchervelprom}
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
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom: value,
              telefono,
            };
            const result = onChange(modelFields);
            value = result?.beipitchervelprom ?? value;
          }
          if (errors.beipitchervelprom?.hasError) {
            runValidationTasks("beipitchervelprom", value);
          }
          setBeipitchervelprom(value);
        }}
        onBlur={() =>
          runValidationTasks("beipitchervelprom", beipitchervelprom)
        }
        errorMessage={errors.beipitchervelprom?.errorMessage}
        hasError={errors.beipitchervelprom?.hasError}
        {...getOverrideProps(overrides, "beipitchervelprom")}
      ></TextField>
      <TextField
        label="Telefono"
        isRequired={false}
        isReadOnly={false}
        value={telefono}
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
              alias,
              beiponches,
              beicarrerashechas,
              beicarrerasproducid,
              beihr,
              beihits,
              beifly,
              beirolas,
              beiporcentajebateo,
              mvp,
              futgoleadorsemana,
              beipitentradaslanzadas,
              beipitcarreraslimpias,
              beipithitstotales,
              beipitponchestotales,
              beipitera,
              beipitjuegosganados,
              beipitjuegosperdidos,
              clave_liga,
              boxajecombates,
              boxajetriunfos,
              boxajederrotas,
              boxajeempates,
              boxKO,
              boxgimnasio,
              pais,
              ciudad,
              categoria,
              ajedrezelo,
              beipitchervelmax,
              beipitchervelprom,
              telefono: value,
            };
            const result = onChange(modelFields);
            value = result?.telefono ?? value;
          }
          if (errors.telefono?.hasError) {
            runValidationTasks("telefono", value);
          }
          setTelefono(value);
        }}
        onBlur={() => runValidationTasks("telefono", telefono)}
        errorMessage={errors.telefono?.errorMessage}
        hasError={errors.telefono?.hasError}
        {...getOverrideProps(overrides, "telefono")}
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
