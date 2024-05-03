import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerStatsJugadores = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StatsJugadores, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly idjugador?: string | null;
  readonly idpartido?: string | null;
  readonly iddeporte?: string | null;
  readonly idtorneo?: string | null;
  readonly tipocuenta?: number | null;
  readonly futgoles?: number | null;
  readonly bascanastas?: number | null;
  readonly baspuntos?: number | null;
  readonly beicarrerashechas?: number | null;
  readonly beiponches?: number | null;
  readonly beihr?: number | null;
  readonly beihits?: number | null;
  readonly beifly?: number | null;
  readonly beirolas?: number | null;
  readonly futasisgol?: number | null;
  readonly beicarrerasproducidas?: number | null;
  readonly futtarjetasamarillas?: number | null;
  readonly futtarjetasrojas?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStatsJugadores = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StatsJugadores, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly idjugador?: string | null;
  readonly idpartido?: string | null;
  readonly iddeporte?: string | null;
  readonly idtorneo?: string | null;
  readonly tipocuenta?: number | null;
  readonly futgoles?: number | null;
  readonly bascanastas?: number | null;
  readonly baspuntos?: number | null;
  readonly beicarrerashechas?: number | null;
  readonly beiponches?: number | null;
  readonly beihr?: number | null;
  readonly beihits?: number | null;
  readonly beifly?: number | null;
  readonly beirolas?: number | null;
  readonly futasisgol?: number | null;
  readonly beicarrerasproducidas?: number | null;
  readonly futtarjetasamarillas?: number | null;
  readonly futtarjetasrojas?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StatsJugadores = LazyLoading extends LazyLoadingDisabled ? EagerStatsJugadores : LazyStatsJugadores

export declare const StatsJugadores: (new (init: ModelInit<StatsJugadores>) => StatsJugadores) & {
  copyOf(source: StatsJugadores, mutator: (draft: MutableModel<StatsJugadores>) => MutableModel<StatsJugadores> | void): StatsJugadores;
}

type EagerJugadores = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Jugadores, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly iddeporte?: string | null;
  readonly idequipo?: string | null;
  readonly nombre?: string | null;
  readonly idjugador?: string | null;
  readonly idtorneo?: string | null;
  readonly deporte?: string | null;
  readonly user?: string | null;
  readonly perfil?: string | null;
  readonly posicion?: string | null;
  readonly edad?: number | null;
  readonly numero?: number | null;
  readonly equipo?: string | null;
  readonly foto?: string | null;
  readonly alias?: string | null;
  readonly tipocuenta?: number | null;
  readonly futgoles?: number | null;
  readonly futasisgol?: number | null;
  readonly futtarjetasallas?: number | null;
  readonly futtarjetasrojas?: number | null;
  readonly beiponches?: number | null;
  readonly beicarrerashechas?: number | null;
  readonly beicarrerasproducid?: number | null;
  readonly beihr?: number | null;
  readonly beihits?: number | null;
  readonly beifly?: number | null;
  readonly beirolas?: number | null;
  readonly beiporcentajebateo?: number | null;
  readonly mvp?: number | null;
  readonly beipitentradaslanzadas?: number | null;
  readonly beipitcarreraslimpias?: number | null;
  readonly beipithitstotales?: number | null;
  readonly beipitponchestotales?: number | null;
  readonly beipitera?: number | null;
  readonly beipitjuegosganados?: number | null;
  readonly beipitjuegosperdidos?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyJugadores = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Jugadores, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly iddeporte?: string | null;
  readonly idequipo?: string | null;
  readonly nombre?: string | null;
  readonly idjugador?: string | null;
  readonly idtorneo?: string | null;
  readonly deporte?: string | null;
  readonly user?: string | null;
  readonly perfil?: string | null;
  readonly posicion?: string | null;
  readonly edad?: number | null;
  readonly numero?: number | null;
  readonly equipo?: string | null;
  readonly foto?: string | null;
  readonly alias?: string | null;
  readonly tipocuenta?: number | null;
  readonly futgoles?: number | null;
  readonly futasisgol?: number | null;
  readonly futtarjetasallas?: number | null;
  readonly futtarjetasrojas?: number | null;
  readonly beiponches?: number | null;
  readonly beicarrerashechas?: number | null;
  readonly beicarrerasproducid?: number | null;
  readonly beihr?: number | null;
  readonly beihits?: number | null;
  readonly beifly?: number | null;
  readonly beirolas?: number | null;
  readonly beiporcentajebateo?: number | null;
  readonly mvp?: number | null;
  readonly beipitentradaslanzadas?: number | null;
  readonly beipitcarreraslimpias?: number | null;
  readonly beipithitstotales?: number | null;
  readonly beipitponchestotales?: number | null;
  readonly beipitera?: number | null;
  readonly beipitjuegosganados?: number | null;
  readonly beipitjuegosperdidos?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Jugadores = LazyLoading extends LazyLoadingDisabled ? EagerJugadores : LazyJugadores

export declare const Jugadores: (new (init: ModelInit<Jugadores>) => Jugadores) & {
  copyOf(source: Jugadores, mutator: (draft: MutableModel<Jugadores>) => MutableModel<Jugadores> | void): Jugadores;
}

type EagerTorneos = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Torneos, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly idliga?: string | null;
  readonly iddeporte?: string | null;
  readonly idtorneo?: number | null;
  readonly nombretorneo?: string | null;
  readonly nombredeporte?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTorneos = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Torneos, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly idliga?: string | null;
  readonly iddeporte?: string | null;
  readonly idtorneo?: number | null;
  readonly nombretorneo?: string | null;
  readonly nombredeporte?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Torneos = LazyLoading extends LazyLoadingDisabled ? EagerTorneos : LazyTorneos

export declare const Torneos: (new (init: ModelInit<Torneos>) => Torneos) & {
  copyOf(source: Torneos, mutator: (draft: MutableModel<Torneos>) => MutableModel<Torneos> | void): Torneos;
}

type EagerPresidentes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Presidentes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly idliga?: string | null;
  readonly nombre?: string | null;
  readonly alias?: string | null;
  readonly user?: string | null;
  readonly clave?: string | null;
  readonly telefono?: string | null;
  readonly foto?: string | null;
  readonly notorneos?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPresidentes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Presidentes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly idliga?: string | null;
  readonly nombre?: string | null;
  readonly alias?: string | null;
  readonly user?: string | null;
  readonly clave?: string | null;
  readonly telefono?: string | null;
  readonly foto?: string | null;
  readonly notorneos?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Presidentes = LazyLoading extends LazyLoadingDisabled ? EagerPresidentes : LazyPresidentes

export declare const Presidentes: (new (init: ModelInit<Presidentes>) => Presidentes) & {
  copyOf(source: Presidentes, mutator: (draft: MutableModel<Presidentes>) => MutableModel<Presidentes> | void): Presidentes;
}

type EagerLigas = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ligas, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly idliga?: string | null;
  readonly idpresidente?: string | null;
  readonly clave?: string | null;
  readonly foto?: string | null;
  readonly descripcion?: string | null;
  readonly nombre?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLigas = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ligas, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly idliga?: string | null;
  readonly idpresidente?: string | null;
  readonly clave?: string | null;
  readonly foto?: string | null;
  readonly descripcion?: string | null;
  readonly nombre?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Ligas = LazyLoading extends LazyLoadingDisabled ? EagerLigas : LazyLigas

export declare const Ligas: (new (init: ModelInit<Ligas>) => Ligas) & {
  copyOf(source: Ligas, mutator: (draft: MutableModel<Ligas>) => MutableModel<Ligas> | void): Ligas;
}

type EagerStatsequipo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Statsequipo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly idtorneo?: string | null;
  readonly idequipo?: string | null;
  readonly partidosg?: number | null;
  readonly partidosp?: number | null;
  readonly partidose?: number | null;
  readonly puntos?: number | null;
  readonly partigosj?: number | null;
  readonly posiciontabla?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStatsequipo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Statsequipo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly idtorneo?: string | null;
  readonly idequipo?: string | null;
  readonly partidosg?: number | null;
  readonly partidosp?: number | null;
  readonly partidose?: number | null;
  readonly puntos?: number | null;
  readonly partigosj?: number | null;
  readonly posiciontabla?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Statsequipo = LazyLoading extends LazyLoadingDisabled ? EagerStatsequipo : LazyStatsequipo

export declare const Statsequipo: (new (init: ModelInit<Statsequipo>) => Statsequipo) & {
  copyOf(source: Statsequipo, mutator: (draft: MutableModel<Statsequipo>) => MutableModel<Statsequipo> | void): Statsequipo;
}

type EagerPartidos = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Partidos, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly idequipo?: string | null;
  readonly equipo1?: string | null;
  readonly equipo2?: string | null;
  readonly hora?: string | null;
  readonly resultado_equipo1?: number | null;
  readonly resultado_equipo2?: number | null;
  readonly lugar?: string | null;
  readonly observaciones?: string | null;
  readonly jugador_partido?: string | null;
  readonly jornada?: number | null;
  readonly fecha?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPartidos = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Partidos, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly idequipo?: string | null;
  readonly equipo1?: string | null;
  readonly equipo2?: string | null;
  readonly hora?: string | null;
  readonly resultado_equipo1?: number | null;
  readonly resultado_equipo2?: number | null;
  readonly lugar?: string | null;
  readonly observaciones?: string | null;
  readonly jugador_partido?: string | null;
  readonly jornada?: number | null;
  readonly fecha?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Partidos = LazyLoading extends LazyLoadingDisabled ? EagerPartidos : LazyPartidos

export declare const Partidos: (new (init: ModelInit<Partidos>) => Partidos) & {
  copyOf(source: Partidos, mutator: (draft: MutableModel<Partidos>) => MutableModel<Partidos> | void): Partidos;
}

type EagerEquipos = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Equipos, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly idliga?: string | null;
  readonly idtorneo?: string | null;
  readonly club?: string | null;
  readonly categoria?: string | null;
  readonly torneo?: string | null;
  readonly nombre?: string | null;
  readonly logo?: string | null;
  readonly idmanager?: string | null;
  readonly idcategoria?: number | null;
  readonly manager?: string | null;
  readonly futgolesfavor?: number | null;
  readonly futgolescontra?: number | null;
  readonly partidosjugados?: number | null;
  readonly partidosganados?: number | null;
  readonly partidosperdidos?: number | null;
  readonly partidosempatados?: number | null;
  readonly puntos?: number | null;
  readonly posiciontabla?: number | null;
  readonly patrocinador?: string | null;
  readonly beicarreras?: number | null;
  readonly beihr?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEquipos = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Equipos, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly idliga?: string | null;
  readonly idtorneo?: string | null;
  readonly club?: string | null;
  readonly categoria?: string | null;
  readonly torneo?: string | null;
  readonly nombre?: string | null;
  readonly logo?: string | null;
  readonly idmanager?: string | null;
  readonly idcategoria?: number | null;
  readonly manager?: string | null;
  readonly futgolesfavor?: number | null;
  readonly futgolescontra?: number | null;
  readonly partidosjugados?: number | null;
  readonly partidosganados?: number | null;
  readonly partidosperdidos?: number | null;
  readonly partidosempatados?: number | null;
  readonly puntos?: number | null;
  readonly posiciontabla?: number | null;
  readonly patrocinador?: string | null;
  readonly beicarreras?: number | null;
  readonly beihr?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Equipos = LazyLoading extends LazyLoadingDisabled ? EagerEquipos : LazyEquipos

export declare const Equipos: (new (init: ModelInit<Equipos>) => Equipos) & {
  copyOf(source: Equipos, mutator: (draft: MutableModel<Equipos>) => MutableModel<Equipos> | void): Equipos;
}

type EagerManagers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Managers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly idliga?: string | null;
  readonly idmanager?: string | null;
  readonly idequipo?: string | null;
  readonly alias?: string | null;
  readonly foto?: string | null;
  readonly deporte?: string | null;
  readonly telefono?: string | null;
  readonly clave?: string | null;
  readonly usuario?: string | null;
  readonly nombre?: string | null;
  readonly idtorneo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyManagers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Managers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly idliga?: string | null;
  readonly idmanager?: string | null;
  readonly idequipo?: string | null;
  readonly alias?: string | null;
  readonly foto?: string | null;
  readonly deporte?: string | null;
  readonly telefono?: string | null;
  readonly clave?: string | null;
  readonly usuario?: string | null;
  readonly nombre?: string | null;
  readonly idtorneo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Managers = LazyLoading extends LazyLoadingDisabled ? EagerManagers : LazyManagers

export declare const Managers: (new (init: ModelInit<Managers>) => Managers) & {
  copyOf(source: Managers, mutator: (draft: MutableModel<Managers>) => MutableModel<Managers> | void): Managers;
}