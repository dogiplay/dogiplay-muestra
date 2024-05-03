/* eslint-disable */
// this is an auto generated file. This will be overwritten


export const createStatsequipo = /* GraphQL */ `
  mutation CreateStatsequipo(
    $input: CreateStatsequipoInput!
    $condition: ModelStatsequipoConditionInput
  ) {
    createStatsequipo(input: $input, condition: $condition) {
      id
      idtorneo
      idequipo
      partidosg
      partidosp
      partidose
      puntos
      partigosj
      posiciontabla
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateStatsequipo = /* GraphQL */ `
  mutation UpdateStatsequipo(
    $input: UpdateStatsequipoInput!
    $condition: ModelStatsequipoConditionInput
  ) {
    updateStatsequipo(input: $input, condition: $condition) {
      id
      idtorneo
      idequipo
      partidosg
      partidosp
      partidose
      puntos
      partigosj
      posiciontabla
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteStatsequipo = /* GraphQL */ `
  mutation DeleteStatsequipo(
    $input: DeleteStatsequipoInput!
    $condition: ModelStatsequipoConditionInput
  ) {
    deleteStatsequipo(input: $input, condition: $condition) {
      id
      idtorneo
      idequipo
      partidosg
      partidosp
      partidose
      puntos
      partigosj
      posiciontabla
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPartidos = /* GraphQL */ `
  mutation CreatePartidos(
    $input: CreatePartidosInput!
    $condition: ModelPartidosConditionInput
  ) {
    createPartidos(input: $input, condition: $condition) {
      id
      idequipo
      rival
      fecha
      hora
      resultado_equipo
      resultado_rival
      lugar
      observaciones
      jugador_partido
      jornada
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePartidos = /* GraphQL */ `
  mutation UpdatePartidos(
    $input: UpdatePartidosInput!
    $condition: ModelPartidosConditionInput
  ) {
    updatePartidos(input: $input, condition: $condition) {
      id
      idequipo
      rival
      fecha
      hora
      resultado_equipo
      resultado_rival
      lugar
      observaciones
      jugador_partido
      jornada
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePartidos = /* GraphQL */ `
  mutation DeletePartidos(
    $input: DeletePartidosInput!
    $condition: ModelPartidosConditionInput
  ) {
    deletePartidos(input: $input, condition: $condition) {
      id
      idequipo
      rival
      fecha
      hora
      resultado_equipo
      resultado_rival
      lugar
      observaciones
      jugador_partido
      jornada
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createEquipos = /* GraphQL */ `
  mutation CreateEquipos(
    $input: CreateEquiposInput!
    $condition: ModelEquiposConditionInput
  ) {
    createEquipos(input: $input, condition: $condition) {
      id
      nombre
      torneo
      logo
      categoria
      idmanager
      idjugador
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateEquipos = /* GraphQL */ `
  mutation UpdateEquipos(
    $input: UpdateEquiposInput!
    $condition: ModelEquiposConditionInput
  ) {
    updateEquipos(input: $input, condition: $condition) {
      id
      nombre
      torneo
      logo
      categoria
      idmanager
      idjugador
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteEquipos = /* GraphQL */ `
  mutation DeleteEquipos(
    $input: DeleteEquiposInput!
    $condition: ModelEquiposConditionInput
  ) {
    deleteEquipos(input: $input, condition: $condition) {
      id
      nombre
      torneo
      logo
      categoria
      idmanager
      idjugador
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createManagers = /* GraphQL */ `
  mutation CreateManagers(
    $input: CreateManagersInput!
    $condition: ModelManagersConditionInput
  ) {
    createManagers(input: $input, condition: $condition) {
      id
      usuario
      clave
      nombre
      alias
      foto
      deporte
      telefono
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateManagers = /* GraphQL */ `
  mutation UpdateManagers(
    $input: UpdateManagersInput!
    $condition: ModelManagersConditionInput
  ) {
    updateManagers(input: $input, condition: $condition) {
      id
      usuario
      clave
      nombre
      alias
      foto
      deporte
      telefono
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteManagers = /* GraphQL */ `
  mutation DeleteManagers(
    $input: DeleteManagersInput!
    $condition: ModelManagersConditionInput
  ) {
    deleteManagers(input: $input, condition: $condition) {
      id
      usuario
      clave
      nombre
      alias
      foto
      deporte
      telefono
      createdAt
      updatedAt
      __typename
    }
  }
`;
