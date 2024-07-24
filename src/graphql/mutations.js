/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAsociaciones = /* GraphQL */ `
  mutation CreateAsociaciones(
    $input: CreateAsociacionesInput!
    $condition: ModelAsociacionesConditionInput
  ) {
    createAsociaciones(input: $input, condition: $condition) {
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
export const updateAsociaciones = /* GraphQL */ `
  mutation UpdateAsociaciones(
    $input: UpdateAsociacionesInput!
    $condition: ModelAsociacionesConditionInput
  ) {
    updateAsociaciones(input: $input, condition: $condition) {
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
export const deleteAsociaciones = /* GraphQL */ `
  mutation DeleteAsociaciones(
    $input: DeleteAsociacionesInput!
    $condition: ModelAsociacionesConditionInput
  ) {
    deleteAsociaciones(input: $input, condition: $condition) {
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
export const createUniversidades = /* GraphQL */ `
  mutation CreateUniversidades(
    $input: CreateUniversidadesInput!
    $condition: ModelUniversidadesConditionInput
  ) {
    createUniversidades(input: $input, condition: $condition) {
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
export const updateUniversidades = /* GraphQL */ `
  mutation UpdateUniversidades(
    $input: UpdateUniversidadesInput!
    $condition: ModelUniversidadesConditionInput
  ) {
    updateUniversidades(input: $input, condition: $condition) {
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
export const deleteUniversidades = /* GraphQL */ `
  mutation DeleteUniversidades(
    $input: DeleteUniversidadesInput!
    $condition: ModelUniversidadesConditionInput
  ) {
    deleteUniversidades(input: $input, condition: $condition) {
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
export const createPatrocinadores = /* GraphQL */ `
  mutation CreatePatrocinadores(
    $input: CreatePatrocinadoresInput!
    $condition: ModelPatrocinadoresConditionInput
  ) {
    createPatrocinadores(input: $input, condition: $condition) {
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
export const updatePatrocinadores = /* GraphQL */ `
  mutation UpdatePatrocinadores(
    $input: UpdatePatrocinadoresInput!
    $condition: ModelPatrocinadoresConditionInput
  ) {
    updatePatrocinadores(input: $input, condition: $condition) {
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
export const deletePatrocinadores = /* GraphQL */ `
  mutation DeletePatrocinadores(
    $input: DeletePatrocinadoresInput!
    $condition: ModelPatrocinadoresConditionInput
  ) {
    deletePatrocinadores(input: $input, condition: $condition) {
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
export const createSalonFama = /* GraphQL */ `
  mutation CreateSalonFama(
    $input: CreateSalonFamaInput!
    $condition: ModelSalonFamaConditionInput
  ) {
    createSalonFama(input: $input, condition: $condition) {
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
export const updateSalonFama = /* GraphQL */ `
  mutation UpdateSalonFama(
    $input: UpdateSalonFamaInput!
    $condition: ModelSalonFamaConditionInput
  ) {
    updateSalonFama(input: $input, condition: $condition) {
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
export const deleteSalonFama = /* GraphQL */ `
  mutation DeleteSalonFama(
    $input: DeleteSalonFamaInput!
    $condition: ModelSalonFamaConditionInput
  ) {
    deleteSalonFama(input: $input, condition: $condition) {
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
export const createAtletas = /* GraphQL */ `
  mutation CreateAtletas(
    $input: CreateAtletasInput!
    $condition: ModelAtletasConditionInput
  ) {
    createAtletas(input: $input, condition: $condition) {
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
export const updateAtletas = /* GraphQL */ `
  mutation UpdateAtletas(
    $input: UpdateAtletasInput!
    $condition: ModelAtletasConditionInput
  ) {
    updateAtletas(input: $input, condition: $condition) {
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
export const deleteAtletas = /* GraphQL */ `
  mutation DeleteAtletas(
    $input: DeleteAtletasInput!
    $condition: ModelAtletasConditionInput
  ) {
    deleteAtletas(input: $input, condition: $condition) {
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
export const createCampeonatos = /* GraphQL */ `
  mutation CreateCampeonatos(
    $input: CreateCampeonatosInput!
    $condition: ModelCampeonatosConditionInput
  ) {
    createCampeonatos(input: $input, condition: $condition) {
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
export const updateCampeonatos = /* GraphQL */ `
  mutation UpdateCampeonatos(
    $input: UpdateCampeonatosInput!
    $condition: ModelCampeonatosConditionInput
  ) {
    updateCampeonatos(input: $input, condition: $condition) {
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
export const deleteCampeonatos = /* GraphQL */ `
  mutation DeleteCampeonatos(
    $input: DeleteCampeonatosInput!
    $condition: ModelCampeonatosConditionInput
  ) {
    deleteCampeonatos(input: $input, condition: $condition) {
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
      clave_liga
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
      clave_liga
      futdifgoles
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
      clave_liga
      futdifgoles
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
      __typename
    }
  }
`;
