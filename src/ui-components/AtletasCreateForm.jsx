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
import { createAtletas } from "../graphql/mutations";
const client = generateClient();
export default function AtletasCreateForm(props) {
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
    foto: "",
    equipoclub: "",
    disciplina: "",
    edad: "",
    recordActual: "",
    pais: "",
    ciudad: "",
    telefono: "",
    categoria: "",
    espacio2: "",
    espacio1: "",
    espacio4: "",
    espacio5: "",
    espacio3: "",
    especialidad: "",
    recordespecialidad: "",
    estado: "",
    peso: "",
    espacio6fiscul: "",
    espacio7fiscul: "",
    espacio8fiscul: "",
    tipo: "",
    fotopais: "",
  };
  const [nombre, setNombre] = React.useState(initialValues.nombre);
  const [foto, setFoto] = React.useState(initialValues.foto);
  const [equipoclub, setEquipoclub] = React.useState(initialValues.equipoclub);
  const [disciplina, setDisciplina] = React.useState(initialValues.disciplina);
  const [edad, setEdad] = React.useState(initialValues.edad);
  const [recordActual, setRecordActual] = React.useState(
    initialValues.recordActual
  );
  const [pais, setPais] = React.useState(initialValues.pais);
  const [ciudad, setCiudad] = React.useState(initialValues.ciudad);
  const [telefono, setTelefono] = React.useState(initialValues.telefono);
  const [categoria, setCategoria] = React.useState(initialValues.categoria);
  const [espacio2, setEspacio2] = React.useState(initialValues.espacio2);
  const [espacio1, setEspacio1] = React.useState(initialValues.espacio1);
  const [espacio4, setEspacio4] = React.useState(initialValues.espacio4);
  const [espacio5, setEspacio5] = React.useState(initialValues.espacio5);
  const [espacio3, setEspacio3] = React.useState(initialValues.espacio3);
  const [especialidad, setEspecialidad] = React.useState(
    initialValues.especialidad
  );
  const [recordespecialidad, setRecordespecialidad] = React.useState(
    initialValues.recordespecialidad
  );
  const [estado, setEstado] = React.useState(initialValues.estado);
  const [peso, setPeso] = React.useState(initialValues.peso);
  const [espacio6fiscul, setEspacio6fiscul] = React.useState(
    initialValues.espacio6fiscul
  );
  const [espacio7fiscul, setEspacio7fiscul] = React.useState(
    initialValues.espacio7fiscul
  );
  const [espacio8fiscul, setEspacio8fiscul] = React.useState(
    initialValues.espacio8fiscul
  );
  const [tipo, setTipo] = React.useState(initialValues.tipo);
  const [fotopais, setFotopais] = React.useState(initialValues.fotopais);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNombre(initialValues.nombre);
    setFoto(initialValues.foto);
    setEquipoclub(initialValues.equipoclub);
    setDisciplina(initialValues.disciplina);
    setEdad(initialValues.edad);
    setRecordActual(initialValues.recordActual);
    setPais(initialValues.pais);
    setCiudad(initialValues.ciudad);
    setTelefono(initialValues.telefono);
    setCategoria(initialValues.categoria);
    setEspacio2(initialValues.espacio2);
    setEspacio1(initialValues.espacio1);
    setEspacio4(initialValues.espacio4);
    setEspacio5(initialValues.espacio5);
    setEspacio3(initialValues.espacio3);
    setEspecialidad(initialValues.especialidad);
    setRecordespecialidad(initialValues.recordespecialidad);
    setEstado(initialValues.estado);
    setPeso(initialValues.peso);
    setEspacio6fiscul(initialValues.espacio6fiscul);
    setEspacio7fiscul(initialValues.espacio7fiscul);
    setEspacio8fiscul(initialValues.espacio8fiscul);
    setTipo(initialValues.tipo);
    setFotopais(initialValues.fotopais);
    setErrors({});
  };
  const validations = {
    nombre: [],
    foto: [{ type: "URL" }],
    equipoclub: [],
    disciplina: [],
    edad: [],
    recordActual: [],
    pais: [],
    ciudad: [],
    telefono: [],
    categoria: [],
    espacio2: [],
    espacio1: [],
    espacio4: [],
    espacio5: [],
    espacio3: [],
    especialidad: [],
    recordespecialidad: [],
    estado: [],
    peso: [],
    espacio6fiscul: [],
    espacio7fiscul: [],
    espacio8fiscul: [],
    tipo: [],
    fotopais: [{ type: "URL" }],
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
          foto,
          equipoclub,
          disciplina,
          edad,
          recordActual,
          pais,
          ciudad,
          telefono,
          categoria,
          espacio2,
          espacio1,
          espacio4,
          espacio5,
          espacio3,
          especialidad,
          recordespecialidad,
          estado,
          peso,
          espacio6fiscul,
          espacio7fiscul,
          espacio8fiscul,
          tipo,
          fotopais,
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
            query: createAtletas.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "AtletasCreateForm")}
      {...rest}
    >
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
              foto,
              equipoclub,
              disciplina,
              edad,
              recordActual,
              pais,
              ciudad,
              telefono,
              categoria,
              espacio2,
              espacio1,
              espacio4,
              espacio5,
              espacio3,
              especialidad,
              recordespecialidad,
              estado,
              peso,
              espacio6fiscul,
              espacio7fiscul,
              espacio8fiscul,
              tipo,
              fotopais,
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
        label="Foto"
        isRequired={false}
        isReadOnly={false}
        value={foto}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              foto: value,
              equipoclub,
              disciplina,
              edad,
              recordActual,
              pais,
              ciudad,
              telefono,
              categoria,
              espacio2,
              espacio1,
              espacio4,
              espacio5,
              espacio3,
              especialidad,
              recordespecialidad,
              estado,
              peso,
              espacio6fiscul,
              espacio7fiscul,
              espacio8fiscul,
              tipo,
              fotopais,
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
        label="Equipoclub"
        isRequired={false}
        isReadOnly={false}
        value={equipoclub}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              foto,
              equipoclub: value,
              disciplina,
              edad,
              recordActual,
              pais,
              ciudad,
              telefono,
              categoria,
              espacio2,
              espacio1,
              espacio4,
              espacio5,
              espacio3,
              especialidad,
              recordespecialidad,
              estado,
              peso,
              espacio6fiscul,
              espacio7fiscul,
              espacio8fiscul,
              tipo,
              fotopais,
            };
            const result = onChange(modelFields);
            value = result?.equipoclub ?? value;
          }
          if (errors.equipoclub?.hasError) {
            runValidationTasks("equipoclub", value);
          }
          setEquipoclub(value);
        }}
        onBlur={() => runValidationTasks("equipoclub", equipoclub)}
        errorMessage={errors.equipoclub?.errorMessage}
        hasError={errors.equipoclub?.hasError}
        {...getOverrideProps(overrides, "equipoclub")}
      ></TextField>
      <TextField
        label="Disciplina"
        isRequired={false}
        isReadOnly={false}
        value={disciplina}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              foto,
              equipoclub,
              disciplina: value,
              edad,
              recordActual,
              pais,
              ciudad,
              telefono,
              categoria,
              espacio2,
              espacio1,
              espacio4,
              espacio5,
              espacio3,
              especialidad,
              recordespecialidad,
              estado,
              peso,
              espacio6fiscul,
              espacio7fiscul,
              espacio8fiscul,
              tipo,
              fotopais,
            };
            const result = onChange(modelFields);
            value = result?.disciplina ?? value;
          }
          if (errors.disciplina?.hasError) {
            runValidationTasks("disciplina", value);
          }
          setDisciplina(value);
        }}
        onBlur={() => runValidationTasks("disciplina", disciplina)}
        errorMessage={errors.disciplina?.errorMessage}
        hasError={errors.disciplina?.hasError}
        {...getOverrideProps(overrides, "disciplina")}
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
              nombre,
              foto,
              equipoclub,
              disciplina,
              edad: value,
              recordActual,
              pais,
              ciudad,
              telefono,
              categoria,
              espacio2,
              espacio1,
              espacio4,
              espacio5,
              espacio3,
              especialidad,
              recordespecialidad,
              estado,
              peso,
              espacio6fiscul,
              espacio7fiscul,
              espacio8fiscul,
              tipo,
              fotopais,
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
        label="Record actual"
        isRequired={false}
        isReadOnly={false}
        value={recordActual}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              foto,
              equipoclub,
              disciplina,
              edad,
              recordActual: value,
              pais,
              ciudad,
              telefono,
              categoria,
              espacio2,
              espacio1,
              espacio4,
              espacio5,
              espacio3,
              especialidad,
              recordespecialidad,
              estado,
              peso,
              espacio6fiscul,
              espacio7fiscul,
              espacio8fiscul,
              tipo,
              fotopais,
            };
            const result = onChange(modelFields);
            value = result?.recordActual ?? value;
          }
          if (errors.recordActual?.hasError) {
            runValidationTasks("recordActual", value);
          }
          setRecordActual(value);
        }}
        onBlur={() => runValidationTasks("recordActual", recordActual)}
        errorMessage={errors.recordActual?.errorMessage}
        hasError={errors.recordActual?.hasError}
        {...getOverrideProps(overrides, "recordActual")}
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
              nombre,
              foto,
              equipoclub,
              disciplina,
              edad,
              recordActual,
              pais: value,
              ciudad,
              telefono,
              categoria,
              espacio2,
              espacio1,
              espacio4,
              espacio5,
              espacio3,
              especialidad,
              recordespecialidad,
              estado,
              peso,
              espacio6fiscul,
              espacio7fiscul,
              espacio8fiscul,
              tipo,
              fotopais,
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
              nombre,
              foto,
              equipoclub,
              disciplina,
              edad,
              recordActual,
              pais,
              ciudad: value,
              telefono,
              categoria,
              espacio2,
              espacio1,
              espacio4,
              espacio5,
              espacio3,
              especialidad,
              recordespecialidad,
              estado,
              peso,
              espacio6fiscul,
              espacio7fiscul,
              espacio8fiscul,
              tipo,
              fotopais,
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
        label="Telefono"
        isRequired={false}
        isReadOnly={false}
        value={telefono}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              foto,
              equipoclub,
              disciplina,
              edad,
              recordActual,
              pais,
              ciudad,
              telefono: value,
              categoria,
              espacio2,
              espacio1,
              espacio4,
              espacio5,
              espacio3,
              especialidad,
              recordespecialidad,
              estado,
              peso,
              espacio6fiscul,
              espacio7fiscul,
              espacio8fiscul,
              tipo,
              fotopais,
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
              foto,
              equipoclub,
              disciplina,
              edad,
              recordActual,
              pais,
              ciudad,
              telefono,
              categoria: value,
              espacio2,
              espacio1,
              espacio4,
              espacio5,
              espacio3,
              especialidad,
              recordespecialidad,
              estado,
              peso,
              espacio6fiscul,
              espacio7fiscul,
              espacio8fiscul,
              tipo,
              fotopais,
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
        label="Espacio2"
        isRequired={false}
        isReadOnly={false}
        value={espacio2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              foto,
              equipoclub,
              disciplina,
              edad,
              recordActual,
              pais,
              ciudad,
              telefono,
              categoria,
              espacio2: value,
              espacio1,
              espacio4,
              espacio5,
              espacio3,
              especialidad,
              recordespecialidad,
              estado,
              peso,
              espacio6fiscul,
              espacio7fiscul,
              espacio8fiscul,
              tipo,
              fotopais,
            };
            const result = onChange(modelFields);
            value = result?.espacio2 ?? value;
          }
          if (errors.espacio2?.hasError) {
            runValidationTasks("espacio2", value);
          }
          setEspacio2(value);
        }}
        onBlur={() => runValidationTasks("espacio2", espacio2)}
        errorMessage={errors.espacio2?.errorMessage}
        hasError={errors.espacio2?.hasError}
        {...getOverrideProps(overrides, "espacio2")}
      ></TextField>
      <TextField
        label="Espacio1"
        isRequired={false}
        isReadOnly={false}
        value={espacio1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              foto,
              equipoclub,
              disciplina,
              edad,
              recordActual,
              pais,
              ciudad,
              telefono,
              categoria,
              espacio2,
              espacio1: value,
              espacio4,
              espacio5,
              espacio3,
              especialidad,
              recordespecialidad,
              estado,
              peso,
              espacio6fiscul,
              espacio7fiscul,
              espacio8fiscul,
              tipo,
              fotopais,
            };
            const result = onChange(modelFields);
            value = result?.espacio1 ?? value;
          }
          if (errors.espacio1?.hasError) {
            runValidationTasks("espacio1", value);
          }
          setEspacio1(value);
        }}
        onBlur={() => runValidationTasks("espacio1", espacio1)}
        errorMessage={errors.espacio1?.errorMessage}
        hasError={errors.espacio1?.hasError}
        {...getOverrideProps(overrides, "espacio1")}
      ></TextField>
      <TextField
        label="Espacio4"
        isRequired={false}
        isReadOnly={false}
        value={espacio4}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              foto,
              equipoclub,
              disciplina,
              edad,
              recordActual,
              pais,
              ciudad,
              telefono,
              categoria,
              espacio2,
              espacio1,
              espacio4: value,
              espacio5,
              espacio3,
              especialidad,
              recordespecialidad,
              estado,
              peso,
              espacio6fiscul,
              espacio7fiscul,
              espacio8fiscul,
              tipo,
              fotopais,
            };
            const result = onChange(modelFields);
            value = result?.espacio4 ?? value;
          }
          if (errors.espacio4?.hasError) {
            runValidationTasks("espacio4", value);
          }
          setEspacio4(value);
        }}
        onBlur={() => runValidationTasks("espacio4", espacio4)}
        errorMessage={errors.espacio4?.errorMessage}
        hasError={errors.espacio4?.hasError}
        {...getOverrideProps(overrides, "espacio4")}
      ></TextField>
      <TextField
        label="Espacio5"
        isRequired={false}
        isReadOnly={false}
        value={espacio5}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              foto,
              equipoclub,
              disciplina,
              edad,
              recordActual,
              pais,
              ciudad,
              telefono,
              categoria,
              espacio2,
              espacio1,
              espacio4,
              espacio5: value,
              espacio3,
              especialidad,
              recordespecialidad,
              estado,
              peso,
              espacio6fiscul,
              espacio7fiscul,
              espacio8fiscul,
              tipo,
              fotopais,
            };
            const result = onChange(modelFields);
            value = result?.espacio5 ?? value;
          }
          if (errors.espacio5?.hasError) {
            runValidationTasks("espacio5", value);
          }
          setEspacio5(value);
        }}
        onBlur={() => runValidationTasks("espacio5", espacio5)}
        errorMessage={errors.espacio5?.errorMessage}
        hasError={errors.espacio5?.hasError}
        {...getOverrideProps(overrides, "espacio5")}
      ></TextField>
      <TextField
        label="Espacio3"
        isRequired={false}
        isReadOnly={false}
        value={espacio3}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              foto,
              equipoclub,
              disciplina,
              edad,
              recordActual,
              pais,
              ciudad,
              telefono,
              categoria,
              espacio2,
              espacio1,
              espacio4,
              espacio5,
              espacio3: value,
              especialidad,
              recordespecialidad,
              estado,
              peso,
              espacio6fiscul,
              espacio7fiscul,
              espacio8fiscul,
              tipo,
              fotopais,
            };
            const result = onChange(modelFields);
            value = result?.espacio3 ?? value;
          }
          if (errors.espacio3?.hasError) {
            runValidationTasks("espacio3", value);
          }
          setEspacio3(value);
        }}
        onBlur={() => runValidationTasks("espacio3", espacio3)}
        errorMessage={errors.espacio3?.errorMessage}
        hasError={errors.espacio3?.hasError}
        {...getOverrideProps(overrides, "espacio3")}
      ></TextField>
      <TextField
        label="Especialidad"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={especialidad}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              nombre,
              foto,
              equipoclub,
              disciplina,
              edad,
              recordActual,
              pais,
              ciudad,
              telefono,
              categoria,
              espacio2,
              espacio1,
              espacio4,
              espacio5,
              espacio3,
              especialidad: value,
              recordespecialidad,
              estado,
              peso,
              espacio6fiscul,
              espacio7fiscul,
              espacio8fiscul,
              tipo,
              fotopais,
            };
            const result = onChange(modelFields);
            value = result?.especialidad ?? value;
          }
          if (errors.especialidad?.hasError) {
            runValidationTasks("especialidad", value);
          }
          setEspecialidad(value);
        }}
        onBlur={() => runValidationTasks("especialidad", especialidad)}
        errorMessage={errors.especialidad?.errorMessage}
        hasError={errors.especialidad?.hasError}
        {...getOverrideProps(overrides, "especialidad")}
      ></TextField>
      <TextField
        label="Recordespecialidad"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={recordespecialidad}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              nombre,
              foto,
              equipoclub,
              disciplina,
              edad,
              recordActual,
              pais,
              ciudad,
              telefono,
              categoria,
              espacio2,
              espacio1,
              espacio4,
              espacio5,
              espacio3,
              especialidad,
              recordespecialidad: value,
              estado,
              peso,
              espacio6fiscul,
              espacio7fiscul,
              espacio8fiscul,
              tipo,
              fotopais,
            };
            const result = onChange(modelFields);
            value = result?.recordespecialidad ?? value;
          }
          if (errors.recordespecialidad?.hasError) {
            runValidationTasks("recordespecialidad", value);
          }
          setRecordespecialidad(value);
        }}
        onBlur={() =>
          runValidationTasks("recordespecialidad", recordespecialidad)
        }
        errorMessage={errors.recordespecialidad?.errorMessage}
        hasError={errors.recordespecialidad?.hasError}
        {...getOverrideProps(overrides, "recordespecialidad")}
      ></TextField>
      <TextField
        label="Estado"
        isRequired={false}
        isReadOnly={false}
        value={estado}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              foto,
              equipoclub,
              disciplina,
              edad,
              recordActual,
              pais,
              ciudad,
              telefono,
              categoria,
              espacio2,
              espacio1,
              espacio4,
              espacio5,
              espacio3,
              especialidad,
              recordespecialidad,
              estado: value,
              peso,
              espacio6fiscul,
              espacio7fiscul,
              espacio8fiscul,
              tipo,
              fotopais,
            };
            const result = onChange(modelFields);
            value = result?.estado ?? value;
          }
          if (errors.estado?.hasError) {
            runValidationTasks("estado", value);
          }
          setEstado(value);
        }}
        onBlur={() => runValidationTasks("estado", estado)}
        errorMessage={errors.estado?.errorMessage}
        hasError={errors.estado?.hasError}
        {...getOverrideProps(overrides, "estado")}
      ></TextField>
      <TextField
        label="Peso"
        isRequired={false}
        isReadOnly={false}
        value={peso}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              foto,
              equipoclub,
              disciplina,
              edad,
              recordActual,
              pais,
              ciudad,
              telefono,
              categoria,
              espacio2,
              espacio1,
              espacio4,
              espacio5,
              espacio3,
              especialidad,
              recordespecialidad,
              estado,
              peso: value,
              espacio6fiscul,
              espacio7fiscul,
              espacio8fiscul,
              tipo,
              fotopais,
            };
            const result = onChange(modelFields);
            value = result?.peso ?? value;
          }
          if (errors.peso?.hasError) {
            runValidationTasks("peso", value);
          }
          setPeso(value);
        }}
        onBlur={() => runValidationTasks("peso", peso)}
        errorMessage={errors.peso?.errorMessage}
        hasError={errors.peso?.hasError}
        {...getOverrideProps(overrides, "peso")}
      ></TextField>
      <TextField
        label="Espacio6fiscul"
        isRequired={false}
        isReadOnly={false}
        value={espacio6fiscul}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              foto,
              equipoclub,
              disciplina,
              edad,
              recordActual,
              pais,
              ciudad,
              telefono,
              categoria,
              espacio2,
              espacio1,
              espacio4,
              espacio5,
              espacio3,
              especialidad,
              recordespecialidad,
              estado,
              peso,
              espacio6fiscul: value,
              espacio7fiscul,
              espacio8fiscul,
              tipo,
              fotopais,
            };
            const result = onChange(modelFields);
            value = result?.espacio6fiscul ?? value;
          }
          if (errors.espacio6fiscul?.hasError) {
            runValidationTasks("espacio6fiscul", value);
          }
          setEspacio6fiscul(value);
        }}
        onBlur={() => runValidationTasks("espacio6fiscul", espacio6fiscul)}
        errorMessage={errors.espacio6fiscul?.errorMessage}
        hasError={errors.espacio6fiscul?.hasError}
        {...getOverrideProps(overrides, "espacio6fiscul")}
      ></TextField>
      <TextField
        label="Espacio7fiscul"
        isRequired={false}
        isReadOnly={false}
        value={espacio7fiscul}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              foto,
              equipoclub,
              disciplina,
              edad,
              recordActual,
              pais,
              ciudad,
              telefono,
              categoria,
              espacio2,
              espacio1,
              espacio4,
              espacio5,
              espacio3,
              especialidad,
              recordespecialidad,
              estado,
              peso,
              espacio6fiscul,
              espacio7fiscul: value,
              espacio8fiscul,
              tipo,
              fotopais,
            };
            const result = onChange(modelFields);
            value = result?.espacio7fiscul ?? value;
          }
          if (errors.espacio7fiscul?.hasError) {
            runValidationTasks("espacio7fiscul", value);
          }
          setEspacio7fiscul(value);
        }}
        onBlur={() => runValidationTasks("espacio7fiscul", espacio7fiscul)}
        errorMessage={errors.espacio7fiscul?.errorMessage}
        hasError={errors.espacio7fiscul?.hasError}
        {...getOverrideProps(overrides, "espacio7fiscul")}
      ></TextField>
      <TextField
        label="Espacio8fiscul"
        isRequired={false}
        isReadOnly={false}
        value={espacio8fiscul}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              foto,
              equipoclub,
              disciplina,
              edad,
              recordActual,
              pais,
              ciudad,
              telefono,
              categoria,
              espacio2,
              espacio1,
              espacio4,
              espacio5,
              espacio3,
              especialidad,
              recordespecialidad,
              estado,
              peso,
              espacio6fiscul,
              espacio7fiscul,
              espacio8fiscul: value,
              tipo,
              fotopais,
            };
            const result = onChange(modelFields);
            value = result?.espacio8fiscul ?? value;
          }
          if (errors.espacio8fiscul?.hasError) {
            runValidationTasks("espacio8fiscul", value);
          }
          setEspacio8fiscul(value);
        }}
        onBlur={() => runValidationTasks("espacio8fiscul", espacio8fiscul)}
        errorMessage={errors.espacio8fiscul?.errorMessage}
        hasError={errors.espacio8fiscul?.hasError}
        {...getOverrideProps(overrides, "espacio8fiscul")}
      ></TextField>
      <TextField
        label="Tipo"
        isRequired={false}
        isReadOnly={false}
        value={tipo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              foto,
              equipoclub,
              disciplina,
              edad,
              recordActual,
              pais,
              ciudad,
              telefono,
              categoria,
              espacio2,
              espacio1,
              espacio4,
              espacio5,
              espacio3,
              especialidad,
              recordespecialidad,
              estado,
              peso,
              espacio6fiscul,
              espacio7fiscul,
              espacio8fiscul,
              tipo: value,
              fotopais,
            };
            const result = onChange(modelFields);
            value = result?.tipo ?? value;
          }
          if (errors.tipo?.hasError) {
            runValidationTasks("tipo", value);
          }
          setTipo(value);
        }}
        onBlur={() => runValidationTasks("tipo", tipo)}
        errorMessage={errors.tipo?.errorMessage}
        hasError={errors.tipo?.hasError}
        {...getOverrideProps(overrides, "tipo")}
      ></TextField>
      <TextField
        label="Fotopais"
        isRequired={false}
        isReadOnly={false}
        value={fotopais}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              foto,
              equipoclub,
              disciplina,
              edad,
              recordActual,
              pais,
              ciudad,
              telefono,
              categoria,
              espacio2,
              espacio1,
              espacio4,
              espacio5,
              espacio3,
              especialidad,
              recordespecialidad,
              estado,
              peso,
              espacio6fiscul,
              espacio7fiscul,
              espacio8fiscul,
              tipo,
              fotopais: value,
            };
            const result = onChange(modelFields);
            value = result?.fotopais ?? value;
          }
          if (errors.fotopais?.hasError) {
            runValidationTasks("fotopais", value);
          }
          setFotopais(value);
        }}
        onBlur={() => runValidationTasks("fotopais", fotopais)}
        errorMessage={errors.fotopais?.errorMessage}
        hasError={errors.fotopais?.hasError}
        {...getOverrideProps(overrides, "fotopais")}
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
