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
import { Equipos } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function NuevoEquipo(props) {
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
    nombre: "",
    torneo: "",
    logo: "",
    categoria: "",
    idliga: "",
    idtorneo: "",
    club: "",
    idcategoria: "",
    manager: "",
    futgolesfavor: "",
    futgolescontra: "",
    partidosjugados: "",
    partidosganados: "",
    partidosperdidos: "",
    partidosempatados: "",
    puntos: "",
    posiciontabla: "",
    patrocinador: "",
    beicarreras: "",
    beihr: "",
  };
  const [nombre, setNombre] = React.useState(initialValues.nombre);
  const [torneo, setTorneo] = React.useState(initialValues.torneo);
  const [logo, setLogo] = React.useState(initialValues.logo);
  const [categoria, setCategoria] = React.useState(initialValues.categoria);
  const [idliga, setIdliga] = React.useState(initialValues.idliga);
  const [idtorneo, setIdtorneo] = React.useState(initialValues.idtorneo);
  const [club, setClub] = React.useState(initialValues.club);
  const [idcategoria, setIdcategoria] = React.useState(
    initialValues.idcategoria
  );
  const [manager, setManager] = React.useState(initialValues.manager);
  const [futgolesfavor, setFutgolesfavor] = React.useState(
    initialValues.futgolesfavor
  );
  const [futgolescontra, setFutgolescontra] = React.useState(
    initialValues.futgolescontra
  );
  const [partidosjugados, setPartidosjugados] = React.useState(
    initialValues.partidosjugados
  );
  const [partidosganados, setPartidosganados] = React.useState(
    initialValues.partidosganados
  );
  const [partidosperdidos, setPartidosperdidos] = React.useState(
    initialValues.partidosperdidos
  );
  const [partidosempatados, setPartidosempatados] = React.useState(
    initialValues.partidosempatados
  );
  const [puntos, setPuntos] = React.useState(initialValues.puntos);
  const [posiciontabla, setPosiciontabla] = React.useState(
    initialValues.posiciontabla
  );
  const [patrocinador, setPatrocinador] = React.useState(
    initialValues.patrocinador
  );
  const [beicarreras, setBeicarreras] = React.useState(
    initialValues.beicarreras
  );
  const [beihr, setBeihr] = React.useState(initialValues.beihr);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNombre(initialValues.nombre);
    setTorneo(initialValues.torneo);
    setLogo(initialValues.logo);
    setCategoria(initialValues.categoria);
    setIdliga(initialValues.idliga);
    setIdtorneo(initialValues.idtorneo);
    setClub(initialValues.club);
    setIdcategoria(initialValues.idcategoria);
    setManager(initialValues.manager);
    setFutgolesfavor(initialValues.futgolesfavor);
    setFutgolescontra(initialValues.futgolescontra);
    setPartidosjugados(initialValues.partidosjugados);
    setPartidosganados(initialValues.partidosganados);
    setPartidosperdidos(initialValues.partidosperdidos);
    setPartidosempatados(initialValues.partidosempatados);
    setPuntos(initialValues.puntos);
    setPosiciontabla(initialValues.posiciontabla);
    setPatrocinador(initialValues.patrocinador);
    setBeicarreras(initialValues.beicarreras);
    setBeihr(initialValues.beihr);
    setErrors({});
  };
  const validations = {
    nombre: [],
    torneo: [],
    logo: [{ type: "URL" }],
    categoria: [],
    idliga: [],
    idtorneo: [],
    club: [],
    idcategoria: [],
    manager: [],
    futgolesfavor: [],
    futgolescontra: [],
    partidosjugados: [],
    partidosganados: [],
    partidosperdidos: [],
    partidosempatados: [],
    puntos: [],
    posiciontabla: [],
    patrocinador: [],
    beicarreras: [],
    beihr: [],
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
          nombre,
          torneo,
          logo,
          categoria,
          idliga,
          idtorneo,
          club,
          idcategoria,
          manager,
          futgolesfavor,
          futgolescontra,
          partidosjugados,
          partidosganados,
          partidosperdidos,
          partidosempatados,
          puntos,
          posiciontabla,
          patrocinador,
          beicarreras,
          beihr,
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
          await DataStore.save(new Equipos(modelFields));
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
      {...getOverrideProps(overrides, "NuevoEquipo")}
      {...rest}
    >
      <Heading
        children="Registra tu equipo"
        {...getOverrideProps(overrides, "SectionalElement1")}
      ></Heading>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Divider>
      <TextField
        label="Nombre"
        isRequired={false}
        isReadOnly={false}
        value={nombre}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre: value,
              torneo,
              logo,
              categoria,
              idliga,
              idtorneo,
              club,
              idcategoria,
              manager,
              futgolesfavor,
              futgolescontra,
              partidosjugados,
              partidosganados,
              partidosperdidos,
              partidosempatados,
              puntos,
              posiciontabla,
              patrocinador,
              beicarreras,
              beihr,
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
        label="Torneo"
        isRequired={false}
        isReadOnly={false}
        value={torneo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              torneo: value,
              logo,
              categoria,
              idliga,
              idtorneo,
              club,
              idcategoria,
              manager,
              futgolesfavor,
              futgolescontra,
              partidosjugados,
              partidosganados,
              partidosperdidos,
              partidosempatados,
              puntos,
              posiciontabla,
              patrocinador,
              beicarreras,
              beihr,
            };
            const result = onChange(modelFields);
            value = result?.torneo ?? value;
          }
          if (errors.torneo?.hasError) {
            runValidationTasks("torneo", value);
          }
          setTorneo(value);
        }}
        onBlur={() => runValidationTasks("torneo", torneo)}
        errorMessage={errors.torneo?.errorMessage}
        hasError={errors.torneo?.hasError}
        {...getOverrideProps(overrides, "torneo")}
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
              nombre,
              torneo,
              logo: value,
              categoria,
              idliga,
              idtorneo,
              club,
              idcategoria,
              manager,
              futgolesfavor,
              futgolescontra,
              partidosjugados,
              partidosganados,
              partidosperdidos,
              partidosempatados,
              puntos,
              posiciontabla,
              patrocinador,
              beicarreras,
              beihr,
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
        label="Categoria"
        isRequired={false}
        isReadOnly={false}
        value={categoria}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              torneo,
              logo,
              categoria: value,
              idliga,
              idtorneo,
              club,
              idcategoria,
              manager,
              futgolesfavor,
              futgolescontra,
              partidosjugados,
              partidosganados,
              partidosperdidos,
              partidosempatados,
              puntos,
              posiciontabla,
              patrocinador,
              beicarreras,
              beihr,
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
        label="Idliga"
        isRequired={false}
        isReadOnly={false}
        value={idliga}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              torneo,
              logo,
              categoria,
              idliga: value,
              idtorneo,
              club,
              idcategoria,
              manager,
              futgolesfavor,
              futgolescontra,
              partidosjugados,
              partidosganados,
              partidosperdidos,
              partidosempatados,
              puntos,
              posiciontabla,
              patrocinador,
              beicarreras,
              beihr,
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
        label="Idtorneo"
        isRequired={false}
        isReadOnly={false}
        value={idtorneo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              torneo,
              logo,
              categoria,
              idliga,
              idtorneo: value,
              club,
              idcategoria,
              manager,
              futgolesfavor,
              futgolescontra,
              partidosjugados,
              partidosganados,
              partidosperdidos,
              partidosempatados,
              puntos,
              posiciontabla,
              patrocinador,
              beicarreras,
              beihr,
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
        label="Club"
        isRequired={false}
        isReadOnly={false}
        value={club}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              torneo,
              logo,
              categoria,
              idliga,
              idtorneo,
              club: value,
              idcategoria,
              manager,
              futgolesfavor,
              futgolescontra,
              partidosjugados,
              partidosganados,
              partidosperdidos,
              partidosempatados,
              puntos,
              posiciontabla,
              patrocinador,
              beicarreras,
              beihr,
            };
            const result = onChange(modelFields);
            value = result?.club ?? value;
          }
          if (errors.club?.hasError) {
            runValidationTasks("club", value);
          }
          setClub(value);
        }}
        onBlur={() => runValidationTasks("club", club)}
        errorMessage={errors.club?.errorMessage}
        hasError={errors.club?.hasError}
        {...getOverrideProps(overrides, "club")}
      ></TextField>
      <TextField
        label="Idcategoria"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={idcategoria}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              nombre,
              torneo,
              logo,
              categoria,
              idliga,
              idtorneo,
              club,
              idcategoria: value,
              manager,
              futgolesfavor,
              futgolescontra,
              partidosjugados,
              partidosganados,
              partidosperdidos,
              partidosempatados,
              puntos,
              posiciontabla,
              patrocinador,
              beicarreras,
              beihr,
            };
            const result = onChange(modelFields);
            value = result?.idcategoria ?? value;
          }
          if (errors.idcategoria?.hasError) {
            runValidationTasks("idcategoria", value);
          }
          setIdcategoria(value);
        }}
        onBlur={() => runValidationTasks("idcategoria", idcategoria)}
        errorMessage={errors.idcategoria?.errorMessage}
        hasError={errors.idcategoria?.hasError}
        {...getOverrideProps(overrides, "idcategoria")}
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
              nombre,
              torneo,
              logo,
              categoria,
              idliga,
              idtorneo,
              club,
              idcategoria,
              manager: value,
              futgolesfavor,
              futgolescontra,
              partidosjugados,
              partidosganados,
              partidosperdidos,
              partidosempatados,
              puntos,
              posiciontabla,
              patrocinador,
              beicarreras,
              beihr,
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
        label="Futgolesfavor"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={futgolesfavor}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              nombre,
              torneo,
              logo,
              categoria,
              idliga,
              idtorneo,
              club,
              idcategoria,
              manager,
              futgolesfavor: value,
              futgolescontra,
              partidosjugados,
              partidosganados,
              partidosperdidos,
              partidosempatados,
              puntos,
              posiciontabla,
              patrocinador,
              beicarreras,
              beihr,
            };
            const result = onChange(modelFields);
            value = result?.futgolesfavor ?? value;
          }
          if (errors.futgolesfavor?.hasError) {
            runValidationTasks("futgolesfavor", value);
          }
          setFutgolesfavor(value);
        }}
        onBlur={() => runValidationTasks("futgolesfavor", futgolesfavor)}
        errorMessage={errors.futgolesfavor?.errorMessage}
        hasError={errors.futgolesfavor?.hasError}
        {...getOverrideProps(overrides, "futgolesfavor")}
      ></TextField>
      <TextField
        label="Futgolescontra"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={futgolescontra}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              nombre,
              torneo,
              logo,
              categoria,
              idliga,
              idtorneo,
              club,
              idcategoria,
              manager,
              futgolesfavor,
              futgolescontra: value,
              partidosjugados,
              partidosganados,
              partidosperdidos,
              partidosempatados,
              puntos,
              posiciontabla,
              patrocinador,
              beicarreras,
              beihr,
            };
            const result = onChange(modelFields);
            value = result?.futgolescontra ?? value;
          }
          if (errors.futgolescontra?.hasError) {
            runValidationTasks("futgolescontra", value);
          }
          setFutgolescontra(value);
        }}
        onBlur={() => runValidationTasks("futgolescontra", futgolescontra)}
        errorMessage={errors.futgolescontra?.errorMessage}
        hasError={errors.futgolescontra?.hasError}
        {...getOverrideProps(overrides, "futgolescontra")}
      ></TextField>
      <TextField
        label="Partidosjugados"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={partidosjugados}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              nombre,
              torneo,
              logo,
              categoria,
              idliga,
              idtorneo,
              club,
              idcategoria,
              manager,
              futgolesfavor,
              futgolescontra,
              partidosjugados: value,
              partidosganados,
              partidosperdidos,
              partidosempatados,
              puntos,
              posiciontabla,
              patrocinador,
              beicarreras,
              beihr,
            };
            const result = onChange(modelFields);
            value = result?.partidosjugados ?? value;
          }
          if (errors.partidosjugados?.hasError) {
            runValidationTasks("partidosjugados", value);
          }
          setPartidosjugados(value);
        }}
        onBlur={() => runValidationTasks("partidosjugados", partidosjugados)}
        errorMessage={errors.partidosjugados?.errorMessage}
        hasError={errors.partidosjugados?.hasError}
        {...getOverrideProps(overrides, "partidosjugados")}
      ></TextField>
      <TextField
        label="Partidosganados"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={partidosganados}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              nombre,
              torneo,
              logo,
              categoria,
              idliga,
              idtorneo,
              club,
              idcategoria,
              manager,
              futgolesfavor,
              futgolescontra,
              partidosjugados,
              partidosganados: value,
              partidosperdidos,
              partidosempatados,
              puntos,
              posiciontabla,
              patrocinador,
              beicarreras,
              beihr,
            };
            const result = onChange(modelFields);
            value = result?.partidosganados ?? value;
          }
          if (errors.partidosganados?.hasError) {
            runValidationTasks("partidosganados", value);
          }
          setPartidosganados(value);
        }}
        onBlur={() => runValidationTasks("partidosganados", partidosganados)}
        errorMessage={errors.partidosganados?.errorMessage}
        hasError={errors.partidosganados?.hasError}
        {...getOverrideProps(overrides, "partidosganados")}
      ></TextField>
      <TextField
        label="Partidosperdidos"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={partidosperdidos}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              nombre,
              torneo,
              logo,
              categoria,
              idliga,
              idtorneo,
              club,
              idcategoria,
              manager,
              futgolesfavor,
              futgolescontra,
              partidosjugados,
              partidosganados,
              partidosperdidos: value,
              partidosempatados,
              puntos,
              posiciontabla,
              patrocinador,
              beicarreras,
              beihr,
            };
            const result = onChange(modelFields);
            value = result?.partidosperdidos ?? value;
          }
          if (errors.partidosperdidos?.hasError) {
            runValidationTasks("partidosperdidos", value);
          }
          setPartidosperdidos(value);
        }}
        onBlur={() => runValidationTasks("partidosperdidos", partidosperdidos)}
        errorMessage={errors.partidosperdidos?.errorMessage}
        hasError={errors.partidosperdidos?.hasError}
        {...getOverrideProps(overrides, "partidosperdidos")}
      ></TextField>
      <TextField
        label="Partidosempatados"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={partidosempatados}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              nombre,
              torneo,
              logo,
              categoria,
              idliga,
              idtorneo,
              club,
              idcategoria,
              manager,
              futgolesfavor,
              futgolescontra,
              partidosjugados,
              partidosganados,
              partidosperdidos,
              partidosempatados: value,
              puntos,
              posiciontabla,
              patrocinador,
              beicarreras,
              beihr,
            };
            const result = onChange(modelFields);
            value = result?.partidosempatados ?? value;
          }
          if (errors.partidosempatados?.hasError) {
            runValidationTasks("partidosempatados", value);
          }
          setPartidosempatados(value);
        }}
        onBlur={() =>
          runValidationTasks("partidosempatados", partidosempatados)
        }
        errorMessage={errors.partidosempatados?.errorMessage}
        hasError={errors.partidosempatados?.hasError}
        {...getOverrideProps(overrides, "partidosempatados")}
      ></TextField>
      <TextField
        label="Puntos"
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
              nombre,
              torneo,
              logo,
              categoria,
              idliga,
              idtorneo,
              club,
              idcategoria,
              manager,
              futgolesfavor,
              futgolescontra,
              partidosjugados,
              partidosganados,
              partidosperdidos,
              partidosempatados,
              puntos: value,
              posiciontabla,
              patrocinador,
              beicarreras,
              beihr,
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
      <TextField
        label="Posiciontabla"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={posiciontabla}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              nombre,
              torneo,
              logo,
              categoria,
              idliga,
              idtorneo,
              club,
              idcategoria,
              manager,
              futgolesfavor,
              futgolescontra,
              partidosjugados,
              partidosganados,
              partidosperdidos,
              partidosempatados,
              puntos,
              posiciontabla: value,
              patrocinador,
              beicarreras,
              beihr,
            };
            const result = onChange(modelFields);
            value = result?.posiciontabla ?? value;
          }
          if (errors.posiciontabla?.hasError) {
            runValidationTasks("posiciontabla", value);
          }
          setPosiciontabla(value);
        }}
        onBlur={() => runValidationTasks("posiciontabla", posiciontabla)}
        errorMessage={errors.posiciontabla?.errorMessage}
        hasError={errors.posiciontabla?.hasError}
        {...getOverrideProps(overrides, "posiciontabla")}
      ></TextField>
      <TextField
        label="Patrocinador"
        isRequired={false}
        isReadOnly={false}
        value={patrocinador}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              torneo,
              logo,
              categoria,
              idliga,
              idtorneo,
              club,
              idcategoria,
              manager,
              futgolesfavor,
              futgolescontra,
              partidosjugados,
              partidosganados,
              partidosperdidos,
              partidosempatados,
              puntos,
              posiciontabla,
              patrocinador: value,
              beicarreras,
              beihr,
            };
            const result = onChange(modelFields);
            value = result?.patrocinador ?? value;
          }
          if (errors.patrocinador?.hasError) {
            runValidationTasks("patrocinador", value);
          }
          setPatrocinador(value);
        }}
        onBlur={() => runValidationTasks("patrocinador", patrocinador)}
        errorMessage={errors.patrocinador?.errorMessage}
        hasError={errors.patrocinador?.hasError}
        {...getOverrideProps(overrides, "patrocinador")}
      ></TextField>
      <TextField
        label="Beicarreras"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={beicarreras}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              nombre,
              torneo,
              logo,
              categoria,
              idliga,
              idtorneo,
              club,
              idcategoria,
              manager,
              futgolesfavor,
              futgolescontra,
              partidosjugados,
              partidosganados,
              partidosperdidos,
              partidosempatados,
              puntos,
              posiciontabla,
              patrocinador,
              beicarreras: value,
              beihr,
            };
            const result = onChange(modelFields);
            value = result?.beicarreras ?? value;
          }
          if (errors.beicarreras?.hasError) {
            runValidationTasks("beicarreras", value);
          }
          setBeicarreras(value);
        }}
        onBlur={() => runValidationTasks("beicarreras", beicarreras)}
        errorMessage={errors.beicarreras?.errorMessage}
        hasError={errors.beicarreras?.hasError}
        {...getOverrideProps(overrides, "beicarreras")}
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
              nombre,
              torneo,
              logo,
              categoria,
              idliga,
              idtorneo,
              club,
              idcategoria,
              manager,
              futgolesfavor,
              futgolescontra,
              partidosjugados,
              partidosganados,
              partidosperdidos,
              partidosempatados,
              puntos,
              posiciontabla,
              patrocinador,
              beicarreras,
              beihr: value,
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
