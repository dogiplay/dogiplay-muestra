/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAsociaciones = /* GraphQL */ `
  query GetAsociaciones($id: ID!) {
    getAsociaciones(id: $id) {
      id
      nombre
      pais
      foto
      fotopais
      telefono
      presidente
      sitio
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAsociaciones = /* GraphQL */ `
  query ListAsociaciones(
    $filter: ModelAsociacionesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAsociaciones(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        pais
        foto
        fotopais
        telefono
        presidente
        sitio
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUniversidades = /* GraphQL */ `
  query GetUniversidades($id: ID!) {
    getUniversidades(id: $id) {
      id
      nombreuniversidad
      pais
      estado
      telefono
      fotopais
      foto
      nombredeportista
      logouniversidad
      carrera
      deporte
      descripcion
      tipo
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUniversidades = /* GraphQL */ `
  query ListUniversidades(
    $filter: ModelUniversidadesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUniversidades(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombreuniversidad
        pais
        estado
        telefono
        fotopais
        foto
        nombredeportista
        logouniversidad
        carrera
        deporte
        descripcion
        tipo
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPatrocinadores = /* GraphQL */ `
  query GetPatrocinadores($id: ID!) {
    getPatrocinadores(id: $id) {
      id
      nombre
      telefono
      foto
      sitio
      pais
      contacto
      textoboton
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPatrocinadores = /* GraphQL */ `
  query ListPatrocinadores(
    $filter: ModelPatrocinadoresFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPatrocinadores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        telefono
        foto
        sitio
        pais
        contacto
        textoboton
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSalonFama = /* GraphQL */ `
  query GetSalonFama($id: ID!) {
    getSalonFama(id: $id) {
      id
      nombre
      pais
      estado
      deporte
      logros
      foto
      descripcion1
      descripcion2
      fotopais
      prioridad
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSalonFamas = /* GraphQL */ `
  query ListSalonFamas(
    $filter: ModelSalonFamaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSalonFamas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        pais
        estado
        deporte
        logros
        foto
        descripcion1
        descripcion2
        fotopais
        prioridad
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAtletas = /* GraphQL */ `
  query GetAtletas($id: ID!) {
    getAtletas(id: $id) {
      id
      nombre
      foto
      equipoclub
      disciplina
      edad
      recordActual
      pais
      ciudad
      telefono
      categoria
      espacio2
      espacio1
      espacio4
      espacio5
      espacio3
      especialidad
      recordespecialidad
      estado
      peso
      espacio6fiscul
      espacio7fiscul
      espacio8fiscul
      tipo
      fotopais
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAtletas = /* GraphQL */ `
  query ListAtletas(
    $filter: ModelAtletasFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAtletas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        foto
        equipoclub
        disciplina
        edad
        recordActual
        pais
        ciudad
        telefono
        categoria
        espacio2
        espacio1
        espacio4
        espacio5
        espacio3
        especialidad
        recordespecialidad
        estado
        peso
        espacio6fiscul
        espacio7fiscul
        espacio8fiscul
        tipo
        fotopais
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCampeonatos = /* GraphQL */ `
  query GetCampeonatos($id: ID!) {
    getCampeonatos(id: $id) {
      id
      clave_liga
      equipo
      logo
      manager
      temporada
      numero_campeonato
      categoria
      anoc
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCampeonatos = /* GraphQL */ `
  query ListCampeonatos(
    $filter: ModelCampeonatosFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCampeonatos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        clave_liga
        equipo
        logo
        manager
        temporada
        numero_campeonato
        categoria
        anoc
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
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
        __typename
      }
      nextToken
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
      futgoleadorsemana
      beicarrerashechas
      beicarrerasproducid
      beihr
      beihits
      beifly
      beirolas
      beiponches
      mvp
      beipitentradaslanzadas
      beipitcarreraslimpias
      beipithitstotales
      beipitponchestotales
      beipitera
      beipitjuegosganados
      beipitjuegosperdidos
      beiporcentajebateo
      clave_liga
      boxajecombates
      boxajetriunfos
      boxajederrotas
      boxajeempates
      boxKO
      boxgimnasio
      pais
      ciudad
      categoria
      ajedrezelo
      beipitchervelmax
      beipitchervelprom
      telefono
      beilanzamientos
      fotopais
      createdAt
      updatedAt
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
        futgoleadorsemana
        beicarrerashechas
        beicarrerasproducid
        beihr
        beihits
        beifly
        beirolas
        beiponches
        mvp
        beipitentradaslanzadas
        beipitcarreraslimpias
        beipithitstotales
        beipitponchestotales
        beipitera
        beipitjuegosganados
        beipitjuegosperdidos
        beiporcentajebateo
        clave_liga
        boxajecombates
        boxajetriunfos
        boxajederrotas
        boxajeempates
        boxKO
        boxgimnasio
        pais
        ciudad
        categoria
        ajedrezelo
        beipitchervelmax
        beipitchervelprom
        telefono
        beilanzamientos
        fotopais
        createdAt
        updatedAt
        __typename
      }
      nextToken
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
        __typename
      }
      nextToken
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
        __typename
      }
      nextToken
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
      pais
      estado
      municipio
      equipos
      presidente
      deporte
      categoria
      ciudad
      telefono
      createdAt
      updatedAt
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
        pais
        estado
        municipio
        equipos
        presidente
        deporte
        categoria
        ciudad
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
      clave_liga
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
        clave_liga
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
      clave_liga
      futdifgoles
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
        clave_liga
        futdifgoles
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
