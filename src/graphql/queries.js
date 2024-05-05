/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStatsJugadores = /* GraphQL */ `
  query GetStatsJugadores($id: ID!) {
    getStatsJugadores(id: $id) {
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
export const listStatsJugadores = /* GraphQL */ `
  query ListStatsJugadores(
    $filter: ModelStatsJugadoresFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStatsJugadores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncStatsJugadores = /* GraphQL */ `
  query SyncStatsJugadores(
    $filter: ModelStatsJugadoresFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStatsJugadores(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getJugadores = /* GraphQL */ `
  query GetJugadores($id: ID!) {
    getJugadores(id: $id) {
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
export const listJugadores = /* GraphQL */ `
  query ListJugadores(
    $filter: ModelJugadoresFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJugadores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncJugadores = /* GraphQL */ `
  query SyncJugadores(
    $filter: ModelJugadoresFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncJugadores(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getTorneos = /* GraphQL */ `
  query GetTorneos($id: ID!) {
    getTorneos(id: $id) {
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
export const listTorneos = /* GraphQL */ `
  query ListTorneos(
    $filter: ModelTorneosFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTorneos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncTorneos = /* GraphQL */ `
  query SyncTorneos(
    $filter: ModelTorneosFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTorneos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getPresidentes = /* GraphQL */ `
  query GetPresidentes($id: ID!) {
    getPresidentes(id: $id) {
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
export const listPresidentes = /* GraphQL */ `
  query ListPresidentes(
    $filter: ModelPresidentesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPresidentes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncPresidentes = /* GraphQL */ `
  query SyncPresidentes(
    $filter: ModelPresidentesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPresidentes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getLigas = /* GraphQL */ `
  query GetLigas($id: ID!) {
    getLigas(id: $id) {
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
export const listLigases = /* GraphQL */ `
  query ListLigases(
    $filter: ModelLigasFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLigases(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncLigases = /* GraphQL */ `
  query SyncLigases(
    $filter: ModelLigasFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLigases(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncStatsequipos = /* GraphQL */ `
  query SyncStatsequipos(
    $filter: ModelStatsequipoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStatsequipos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getPartidos = /* GraphQL */ `
  query GetPartidos($id: ID!) {
    getPartidos(id: $id) {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncPartidos = /* GraphQL */ `
  query SyncPartidos(
    $filter: ModelPartidosFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPartidos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getEquipos = /* GraphQL */ `
  query GetEquipos($id: ID!) {
    getEquipos(id: $id) {
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
export const listEquipos = /* GraphQL */ `
  query ListEquipos(
    $filter: ModelEquiposFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEquipos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncEquipos = /* GraphQL */ `
  query SyncEquipos(
    $filter: ModelEquiposFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEquipos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getManagers = /* GraphQL */ `
  query GetManagers($id: ID!) {
    getManagers(id: $id) {
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
export const listManagers = /* GraphQL */ `
  query ListManagers(
    $filter: ModelManagersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listManagers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncManagers = /* GraphQL */ `
  query SyncManagers(
    $filter: ModelManagersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncManagers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
