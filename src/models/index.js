// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Asociaciones, Universidades, Patrocinadores, SalonFama, Atletas, Campeonatos, StatsJugadores, Jugadores, Torneos, Presidentes, Ligas, Statsequipo, Partidos, Equipos, Managers } = initSchema(schema);

export {
  Asociaciones,
  Universidades,
  Patrocinadores,
  SalonFama,
  Atletas,
  Campeonatos,
  StatsJugadores,
  Jugadores,
  Torneos,
  Presidentes,
  Ligas,
  Statsequipo,
  Partidos,
  Equipos,
  Managers
};