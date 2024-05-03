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
import { getEquipos } from "../graphql/queries";
import { updateEquipos } from "../graphql/mutations";
const client = generateClient();
export default function EquiposUpdateForm(props) {
  const {
    id: idProp,
    equipos: equiposModelProp,
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
    idtorneo: "",
    club: "",
    categoria: "",
    torneo: "",
    nombre: "",
    logo: "",
    idmanager: "",
    beicarreras: "",
    beihr: "",
    futgolesfavor: "",
    futgolescontra: "",
  };
  const [idliga, setIdliga] = React.useState(initialValues.idliga);
  const [idtorneo, setIdtorneo] = React.useState(initialValues.idtorneo);
  const [club, setClub] = React.useState(initialValues.club);
  const [categoria, setCategoria] = React.useState(initialValues.categoria);
  const [torneo, setTorneo] = React.useState(initialValues.torneo);
  const [nombre, setNombre] = React.useState(initialValues.nombre);
  const [logo, setLogo] = React.useState(initialValues.logo);
  const [idmanager, setIdmanager] = React.useState(initialValues.idmanager);
  const [beicarreras, setBeicarreras] = React.useState(
    initialValues.beicarreras
  );
  const [beihr, setBeihr] = React.useState(initialValues.beihr);
  const [futgolesfavor, setFutgolesfavor] = React.useState(
    initialValues.futgolesfavor
  );
  const [futgolescontra, setFutgolescontra] = React.useState(
    initialValues.futgolescontra
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = equiposRecord
      ? { ...initialValues, ...equiposRecord }
      : initialValues;
    setIdliga(cleanValues.idliga);
    setIdtorneo(cleanValues.idtorneo);
    setClub(cleanValues.club);
    setCategoria(cleanValues.categoria);
    setTorneo(cleanValues.torneo);
    setNombre(cleanValues.nombre);
    setLogo(cleanValues.logo);
    setIdmanager(cleanValues.idmanager);
    setBeicarreras(cleanValues.beicarreras);
    setBeihr(cleanValues.beihr);
    setFutgolesfavor(cleanValues.futgolesfavor);
    setFutgolescontra(cleanValues.futgolescontra);
    setErrors({});
  };
  const [equiposRecord, setEquiposRecord] = React.useState(equiposModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getEquipos.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getEquipos
        : equiposModelProp;
      setEquiposRecord(record);
    };
    queryData();
  }, [idProp, equiposModelProp]);
  React.useEffect(resetStateValues, [equiposRecord]);
  const validations = {
    idliga: [],
    idtorneo: [],
    club: [],
    categoria: [],
    torneo: [],
    nombre: [],
    logo: [{ type: "URL" }],
    idmanager: [],
    beicarreras: [],
    beihr: [],
    futgolesfavor: [],
    futgolescontra: [],
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
          idliga: idliga ?? null,
          idtorneo: idtorneo ?? null,
          club: club ?? null,
          categoria: categoria ?? null,
          torneo: torneo ?? null,
          nombre: nombre ?? null,
          logo: logo ?? null,
          idmanager: idmanager ?? null,
          beicarreras: beicarreras ?? null,
          beihr: beihr ?? null,
          futgolesfavor: futgolesfavor ?? null,
          futgolescontra: futgolescontra ?? null,
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
            query: updateEquipos.replaceAll("__typename", ""),
            variables: {
              input: {
                id: equiposRecord.id,
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
      {...getOverrideProps(overrides, "EquiposUpdateForm")}
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
              idtorneo,
              club,
              categoria,
              torneo,
              nombre,
              logo,
              idmanager,
              beicarreras,
              beihr,
              futgolesfavor,
              futgolescontra,
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
              idliga,
              idtorneo: value,
              club,
              categoria,
              torneo,
              nombre,
              logo,
              idmanager,
              beicarreras,
              beihr,
              futgolesfavor,
              futgolescontra,
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
              idliga,
              idtorneo,
              club: value,
              categoria,
              torneo,
              nombre,
              logo,
              idmanager,
              beicarreras,
              beihr,
              futgolesfavor,
              futgolescontra,
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
        label="Categoria"
        isRequired={false}
        isReadOnly={false}
        value={categoria}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idliga,
              idtorneo,
              club,
              categoria: value,
              torneo,
              nombre,
              logo,
              idmanager,
              beicarreras,
              beihr,
              futgolesfavor,
              futgolescontra,
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
        label="Torneo"
        isRequired={false}
        isReadOnly={false}
        value={torneo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idliga,
              idtorneo,
              club,
              categoria,
              torneo: value,
              nombre,
              logo,
              idmanager,
              beicarreras,
              beihr,
              futgolesfavor,
              futgolescontra,
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
        label="Nombre"
        isRequired={false}
        isReadOnly={false}
        value={nombre}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idliga,
              idtorneo,
              club,
              categoria,
              torneo,
              nombre: value,
              logo,
              idmanager,
              beicarreras,
              beihr,
              futgolesfavor,
              futgolescontra,
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
        label="Logo"
        isRequired={false}
        isReadOnly={false}
        value={logo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idliga,
              idtorneo,
              club,
              categoria,
              torneo,
              nombre,
              logo: value,
              idmanager,
              beicarreras,
              beihr,
              futgolesfavor,
              futgolescontra,
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
        label="Idmanager"
        isRequired={false}
        isReadOnly={false}
        value={idmanager}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idliga,
              idtorneo,
              club,
              categoria,
              torneo,
              nombre,
              logo,
              idmanager: value,
              beicarreras,
              beihr,
              futgolesfavor,
              futgolescontra,
            };
            const result = onChange(modelFields);
            value = result?.idmanager ?? value;
          }
          if (errors.idmanager?.hasError) {
            runValidationTasks("idmanager", value);
          }
          setIdmanager(value);
        }}
        onBlur={() => runValidationTasks("idmanager", idmanager)}
        errorMessage={errors.idmanager?.errorMessage}
        hasError={errors.idmanager?.hasError}
        {...getOverrideProps(overrides, "idmanager")}
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
              idliga,
              idtorneo,
              club,
              categoria,
              torneo,
              nombre,
              logo,
              idmanager,
              beicarreras: value,
              beihr,
              futgolesfavor,
              futgolescontra,
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
              idliga,
              idtorneo,
              club,
              categoria,
              torneo,
              nombre,
              logo,
              idmanager,
              beicarreras,
              beihr: value,
              futgolesfavor,
              futgolescontra,
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
              idliga,
              idtorneo,
              club,
              categoria,
              torneo,
              nombre,
              logo,
              idmanager,
              beicarreras,
              beihr,
              futgolesfavor: value,
              futgolescontra,
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
              idliga,
              idtorneo,
              club,
              categoria,
              torneo,
              nombre,
              logo,
              idmanager,
              beicarreras,
              beihr,
              futgolesfavor,
              futgolescontra: value,
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
          isDisabled={!(idProp || equiposModelProp)}
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
              !(idProp || equiposModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
