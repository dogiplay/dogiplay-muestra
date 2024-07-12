// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { SalonFama, Atletas, Campeonatos, StatsJugadores, Jugadores, Torneos, Presidentes, Ligas, Statsequipo, Partidos, Equipos, Managers } = initSchema(schema);

export {
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