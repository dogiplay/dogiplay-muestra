/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStatsJugadores = /* GraphQL */ `
  subscription OnCreateStatsJugadores(
    $filter: ModelSubscriptionStatsJugadoresFilterInput
  ) {
    onCreateStatsJugadores(filter: $filter) {
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
export const onUpdateStatsJugadores = /* GraphQL */ `
  subscription OnUpdateStatsJugadores(
    $filter: ModelSubscriptionStatsJugadoresFilterInput
  ) {
    onUpdateStatsJugadores(filter: $filter) {
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
export const onDeleteStatsJugadores = /* GraphQL */ `
  subscription OnDeleteStatsJugadores(
    $filter: ModelSubscriptionStatsJugadoresFilterInput
  ) {
    onDeleteStatsJugadores(filter: $filter) {
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
export const onCreateJugadores = /* GraphQL */ `
  subscription OnCreateJugadores(
    $filter: ModelSubscriptionJugadoresFilterInput
  ) {
    onCreateJugadores(filter: $filter) {
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
export const onUpdateJugadores = /* GraphQL */ `
  subscription OnUpdateJugadores(
    $filter: ModelSubscriptionJugadoresFilterInput
  ) {
    onUpdateJugadores(filter: $filter) {
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
export const onDeleteJugadores = /* GraphQL */ `
  subscription OnDeleteJugadores(
    $filter: ModelSubscriptionJugadoresFilterInput
  ) {
    onDeleteJugadores(filter: $filter) {
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
export const onCreateTorneos = /* GraphQL */ `
  subscription OnCreateTorneos($filter: ModelSubscriptionTorneosFilterInput) {
    onCreateTorneos(filter: $filter) {
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
export const onUpdateTorneos = /* GraphQL */ `
  subscription OnUpdateTorneos($filter: ModelSubscriptionTorneosFilterInput) {
    onUpdateTorneos(filter: $filter) {
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
export const onDeleteTorneos = /* GraphQL */ `
  subscription OnDeleteTorneos($filter: ModelSubscriptionTorneosFilterInput) {
    onDeleteTorneos(filter: $filter) {
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
export const onCreatePresidentes = /* GraphQL */ `
  subscription OnCreatePresidentes(
    $filter: ModelSubscriptionPresidentesFilterInput
  ) {
    onCreatePresidentes(filter: $filter) {
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
export const onUpdatePresidentes = /* GraphQL */ `
  subscription OnUpdatePresidentes(
    $filter: ModelSubscriptionPresidentesFilterInput
  ) {
    onUpdatePresidentes(filter: $filter) {
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
export const onDeletePresidentes = /* GraphQL */ `
  subscription OnDeletePresidentes(
    $filter: ModelSubscriptionPresidentesFilterInput
  ) {
    onDeletePresidentes(filter: $filter) {
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
export const onCreateLigas = /* GraphQL */ `
  subscription OnCreateLigas($filter: ModelSubscriptionLigasFilterInput) {
    onCreateLigas(filter: $filter) {
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
export const onUpdateLigas = /* GraphQL */ `
  subscription OnUpdateLigas($filter: ModelSubscriptionLigasFilterInput) {
    onUpdateLigas(filter: $filter) {
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
export const onDeleteLigas = /* GraphQL */ `
  subscription OnDeleteLigas($filter: ModelSubscriptionLigasFilterInput) {
    onDeleteLigas(filter: $filter) {
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreatePartidos = /* GraphQL */ `
  subscription OnCreatePartidos($filter: ModelSubscriptionPartidosFilterInput) {
    onCreatePartidos(filter: $filter) {
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
export const onUpdatePartidos = /* GraphQL */ `
  subscription OnUpdatePartidos($filter: ModelSubscriptionPartidosFilterInput) {
    onUpdatePartidos(filter: $filter) {
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
export const onDeletePartidos = /* GraphQL */ `
  subscription OnDeletePartidos($filter: ModelSubscriptionPartidosFilterInput) {
    onDeletePartidos(filter: $filter) {
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
export const onCreateEquipos = /* GraphQL */ `
  subscription OnCreateEquipos($filter: ModelSubscriptionEquiposFilterInput) {
    onCreateEquipos(filter: $filter) {
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
export const onUpdateEquipos = /* GraphQL */ `
  subscription OnUpdateEquipos($filter: ModelSubscriptionEquiposFilterInput) {
    onUpdateEquipos(filter: $filter) {
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
export const onDeleteEquipos = /* GraphQL */ `
  subscription OnDeleteEquipos($filter: ModelSubscriptionEquiposFilterInput) {
    onDeleteEquipos(filter: $filter) {
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
export const onCreateManagers = /* GraphQL */ `
  subscription OnCreateManagers($filter: ModelSubscriptionManagersFilterInput) {
    onCreateManagers(filter: $filter) {
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
export const onUpdateManagers = /* GraphQL */ `
  subscription OnUpdateManagers($filter: ModelSubscriptionManagersFilterInput) {
    onUpdateManagers(filter: $filter) {
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
export const onDeleteManagers = /* GraphQL */ `
  subscription OnDeleteManagers($filter: ModelSubscriptionManagersFilterInput) {
    onDeleteManagers(filter: $filter) {
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
