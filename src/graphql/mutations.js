/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStatsJugadores = /* GraphQL */ `
  mutation CreateStatsJugadores(
    $input: CreateStatsJugadoresInput!
    $condition: ModelStatsJugadoresConditionInput
  ) {
    createStatsJugadores(input: $input, condition: $condition) {
      id
      idjugador
      idpartido
      iddeporte
      idtorneo
      tipocuenta
      futgoles
      bascanastas
      baspuntos
      beicarrerashechas
      beiponches
      beihr
      beihits
      beifly
      beirolas
      futasisgol
      beicarrerasproducidas
      futtarjetasamarillas
      futtarjetasrojas
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateStatsJugadores = /* GraphQL */ `
  mutation UpdateStatsJugadores(
    $input: UpdateStatsJugadoresInput!
    $condition: ModelStatsJugadoresConditionInput
  ) {
    updateStatsJugadores(input: $input, condition: $condition) {
      id
      idjugador
      idpartido
      iddeporte
      idtorneo
      tipocuenta
      futgoles
      bascanastas
      baspuntos
      beicarrerashechas
      beiponches
      beihr
      beihits
      beifly
      beirolas
      futasisgol
      beicarrerasproducidas
      futtarjetasamarillas
      futtarjetasrojas
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteStatsJugadores = /* GraphQL */ `
  mutation DeleteStatsJugadores(
    $input: DeleteStatsJugadoresInput!
    $condition: ModelStatsJugadoresConditionInput
  ) {
    deleteStatsJugadores(input: $input, condition: $condition) {
      id
      idjugador
      idpartido
      iddeporte
      idtorneo
      tipocuenta
      futgoles
      bascanastas
      baspuntos
      beicarrerashechas
      beiponches
      beihr
      beihits
      beifly
      beirolas
      futasisgol
      beicarrerasproducidas
      futtarjetasamarillas
      futtarjetasrojas
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createJugadores = /* GraphQL */ `
  mutation CreateJugadores(
    $input: CreateJugadoresInput!
    $condition: ModelJugadoresConditionInput
  ) {
    createJugadores(input: $input, condition: $condition) {
      id
      iddeporte
      idequipo
      nombre
      idjugador
      idtorneo
      deporte
      user
      perfil
      posicion
      edad
      numero
      equipo
      foto
      alias
      tipocuenta
      futgoles
      futasisgol
      futtarjetasallas
      futtarjetasrojas
      beiponches
      beicarrerashechas
      beicarrerasproducid
      beihr
      beihits
      beifly
      beirolas
      beiporcentajebateo
      mvp
      beipitentradaslanzadas
      beipitcarreraslimpias
      beipithitstotales
      beipitponchestotales
      beipitera
      beipitjuegosganados
      beipitjuegosperdidos
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateJugadores = /* GraphQL */ `
  mutation UpdateJugadores(
    $input: UpdateJugadoresInput!
    $condition: ModelJugadoresConditionInput
  ) {
    updateJugadores(input: $input, condition: $condition) {
      id
      iddeporte
      idequipo
      nombre
      idjugador
      idtorneo
      deporte
      user
      perfil
      posicion
      edad
      numero
      equipo
      foto
      alias
      tipocuenta
      futgoles
      futasisgol
      futtarjetasallas
      futtarjetasrojas
      beiponches
      beicarrerashechas
      beicarrerasproducid
      beihr
      beihits
      beifly
      beirolas
      beiporcentajebateo
      mvp
      beipitentradaslanzadas
      beipitcarreraslimpias
      beipithitstotales
      beipitponchestotales
      beipitera
      beipitjuegosganados
      beipitjuegosperdidos
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteJugadores = /* GraphQL */ `
  mutation DeleteJugadores(
    $input: DeleteJugadoresInput!
    $condition: ModelJugadoresConditionInput
  ) {
    deleteJugadores(input: $input, condition: $condition) {
      id
      iddeporte
      idequipo
      nombre
      idjugador
      idtorneo
      deporte
      user
      perfil
      posicion
      edad
      numero
      equipo
      foto
      alias
      tipocuenta
      futgoles
      futasisgol
      futtarjetasallas
      futtarjetasrojas
      beiponches
      beicarrerashechas
      beicarrerasproducid
      beihr
      beihits
      beifly
      beirolas
      beiporcentajebateo
      mvp
      beipitentradaslanzadas
      beipitcarreraslimpias
      beipithitstotales
      beipitponchestotales
      beipitera
      beipitjuegosganados
      beipitjuegosperdidos
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createTorneos = /* GraphQL */ `
  mutation CreateTorneos(
    $input: CreateTorneosInput!
    $condition: ModelTorneosConditionInput
  ) {
    createTorneos(input: $input, condition: $condition) {
      id
      idliga
      iddeporte
      idtorneo
      nombretorneo
      nombredeporte
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateTorneos = /* GraphQL */ `
  mutation UpdateTorneos(
    $input: UpdateTorneosInput!
    $condition: ModelTorneosConditionInput
  ) {
    updateTorneos(input: $input, condition: $condition) {
      id
      idliga
      iddeporte
      idtorneo
      nombretorneo
      nombredeporte
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteTorneos = /* GraphQL */ `
  mutation DeleteTorneos(
    $input: DeleteTorneosInput!
    $condition: ModelTorneosConditionInput
  ) {
    deleteTorneos(input: $input, condition: $condition) {
      id
      idliga
      iddeporte
      idtorneo
      nombretorneo
      nombredeporte
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createPresidentes = /* GraphQL */ `
  mutation CreatePresidentes(
    $input: CreatePresidentesInput!
    $condition: ModelPresidentesConditionInput
  ) {
    createPresidentes(input: $input, condition: $condition) {
      id
      idliga
      nombre
      alias
      user
      clave
      telefono
      foto
      notorneos
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updatePresidentes = /* GraphQL */ `
  mutation UpdatePresidentes(
    $input: UpdatePresidentesInput!
    $condition: ModelPresidentesConditionInput
  ) {
    updatePresidentes(input: $input, condition: $condition) {
      id
      idliga
      nombre
      alias
      user
      clave
      telefono
      foto
      notorneos
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deletePresidentes = /* GraphQL */ `
  mutation DeletePresidentes(
    $input: DeletePresidentesInput!
    $condition: ModelPresidentesConditionInput
  ) {
    deletePresidentes(input: $input, condition: $condition) {
      id
      idliga
      nombre
      alias
      user
      clave
      telefono
      foto
      notorneos
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createLigas = /* GraphQL */ `
  mutation CreateLigas(
    $input: CreateLigasInput!
    $condition: ModelLigasConditionInput
  ) {
    createLigas(input: $input, condition: $condition) {
      id
      idliga
      idpresidente
      clave
      foto
      descripcion
      nombre
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateLigas = /* GraphQL */ `
  mutation UpdateLigas(
    $input: UpdateLigasInput!
    $condition: ModelLigasConditionInput
  ) {
    updateLigas(input: $input, condition: $condition) {
      id
      idliga
      idpresidente
      clave
      foto
      descripcion
      nombre
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteLigas = /* GraphQL */ `
  mutation DeleteLigas(
    $input: DeleteLigasInput!
    $condition: ModelLigasConditionInput
  ) {
    deleteLigas(input: $input, condition: $condition) {
      id
      idliga
      idpresidente
      clave
      foto
      descripcion
      nombre
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      equipo1
      equipo2
      hora
      resultado_equipo1
      resultado_equipo2
      lugar
      observaciones
      jugador_partido
      jornada
      fecha
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      equipo1
      equipo2
      hora
      resultado_equipo1
      resultado_equipo2
      lugar
      observaciones
      jugador_partido
      jornada
      fecha
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      equipo1
      equipo2
      hora
      resultado_equipo1
      resultado_equipo2
      lugar
      observaciones
      jugador_partido
      jornada
      fecha
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      idliga
      idtorneo
      club
      categoria
      torneo
      nombre
      logo
      idmanager
      idcategoria
      manager
      futgolesfavor
      futgolescontra
      partidosjugados
      partidosganados
      partidosperdidos
      partidosempatados
      puntos
      posiciontabla
      patrocinador
      beicarreras
      beihr
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      idliga
      idtorneo
      club
      categoria
      torneo
      nombre
      logo
      idmanager
      idcategoria
      manager
      futgolesfavor
      futgolescontra
      partidosjugados
      partidosganados
      partidosperdidos
      partidosempatados
      puntos
      posiciontabla
      patrocinador
      beicarreras
      beihr
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      idliga
      idtorneo
      club
      categoria
      torneo
      nombre
      logo
      idmanager
      idcategoria
      manager
      futgolesfavor
      futgolescontra
      partidosjugados
      partidosganados
      partidosperdidos
      partidosempatados
      puntos
      posiciontabla
      patrocinador
      beicarreras
      beihr
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      idliga
      idmanager
      idequipo
      alias
      foto
      deporte
      telefono
      clave
      usuario
      nombre
      idtorneo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      idliga
      idmanager
      idequipo
      alias
      foto
      deporte
      telefono
      clave
      usuario
      nombre
      idtorneo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      idliga
      idmanager
      idequipo
      alias
      foto
      deporte
      telefono
      clave
      usuario
      nombre
      idtorneo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
