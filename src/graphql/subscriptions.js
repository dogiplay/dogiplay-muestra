/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStatsequipo = /* GraphQL */ `
  subscription OnCreateStatsequipo(
    $filter: ModelSubscriptionStatsequipoFilterInput
  ) {
    onCreateStatsequipo(filter: $filter) {
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
export const onUpdateStatsequipo = /* GraphQL */ `
  subscription OnUpdateStatsequipo(
    $filter: ModelSubscriptionStatsequipoFilterInput
  ) {
    onUpdateStatsequipo(filter: $filter) {
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
export const onDeleteStatsequipo = /* GraphQL */ `
  subscription OnDeleteStatsequipo(
    $filter: ModelSubscriptionStatsequipoFilterInput
  ) {
    onDeleteStatsequipo(filter: $filter) {
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
export const onCreatePartidos = /* GraphQL */ `
  subscription OnCreatePartidos($filter: ModelSubscriptionPartidosFilterInput) {
    onCreatePartidos(filter: $filter) {
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
export const onUpdatePartidos = /* GraphQL */ `
  subscription OnUpdatePartidos($filter: ModelSubscriptionPartidosFilterInput) {
    onUpdatePartidos(filter: $filter) {
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
export const onDeletePartidos = /* GraphQL */ `
  subscription OnDeletePartidos($filter: ModelSubscriptionPartidosFilterInput) {
    onDeletePartidos(filter: $filter) {
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
export const onCreateEquipos = /* GraphQL */ `
  subscription OnCreateEquipos($filter: ModelSubscriptionEquiposFilterInput) {
    onCreateEquipos(filter: $filter) {
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
export const onUpdateEquipos = /* GraphQL */ `
  subscription OnUpdateEquipos($filter: ModelSubscriptionEquiposFilterInput) {
    onUpdateEquipos(filter: $filter) {
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
export const onDeleteEquipos = /* GraphQL */ `
  subscription OnDeleteEquipos($filter: ModelSubscriptionEquiposFilterInput) {
    onDeleteEquipos(filter: $filter) {
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
export const onCreateManagers = /* GraphQL */ `
  subscription OnCreateManagers($filter: ModelSubscriptionManagersFilterInput) {
    onCreateManagers(filter: $filter) {
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
export const onUpdateManagers = /* GraphQL */ `
  subscription OnUpdateManagers($filter: ModelSubscriptionManagersFilterInput) {
    onUpdateManagers(filter: $filter) {
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
export const onDeleteManagers = /* GraphQL */ `
  subscription OnDeleteManagers($filter: ModelSubscriptionManagersFilterInput) {
    onDeleteManagers(filter: $filter) {
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
