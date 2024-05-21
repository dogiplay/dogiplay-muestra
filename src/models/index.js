// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Campeonatos, StatsJugadores, Jugadores, Torneos, Presidentes, Ligas, Statsequipo, Partidos, Equipos, Managers } = initSchema(schema);

export {
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