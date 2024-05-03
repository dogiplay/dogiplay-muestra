/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStatsequipo = /* GraphQL */ `
  query GetStatsequipo($id: ID!) {
    getStatsequipo(id: $id) {
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
export const listStatsequipos = /* GraphQL */ `
  query ListStatsequipos(
    $filter: ModelStatsequipoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStatsequipos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getPartidos = /* GraphQL */ `
  query GetPartidos($id: ID!) {
    getPartidos(id: $id) {
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
export const listPartidos = /* GraphQL */ `
  query ListPartidos(
    $filter: ModelPartidosFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPartidos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getEquipos = /* GraphQL */ `
  query GetEquipos($id: ID!) {
    getEquipos(id: $id) {
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
export const listEquipos = /* GraphQL */ `
  query ListEquipos(
    $filter: ModelEquiposFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEquipos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getManagers = /* GraphQL */ `
  query GetManagers($id: ID!) {
    getManagers(id: $id) {
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
export const listManagers = /* GraphQL */ `
  query ListManagers(
    $filter: ModelManagersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listManagers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
