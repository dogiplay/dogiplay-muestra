import { CardjugadorbeisbolCollection, CardjugadorbeisbolCollectionHR, CardpitcherCollection, Encabezadotablabeisbol, TablabeisbolCollectionPosciones, PartidosCollectionBeislLuno } from './ui-components'
import './styles.css'
import { MiContext } from './context/MiContext'
import { BarraNayBeisLiga1 } from './BarraNayBeisLiga1'
import { BarraBeisTopDogs } from './BarraBeisTopDogs'
import { BarraBeisTopHR } from './BarraBeisTopHR'
import { BarraBeisPitcher } from './BarraBeisPitcher'
export const NayaritBeisbolLiga1 = () => {
  return (
    <MiContext.Provider>
      <div class="grid-layout">
        <div class="cajaBarra"><BarraNayBeisLiga1 /></div>
        <div class="cajaBarra"><BarraNayBeisLiga1 /></div>
        <div class="cajaBarraFigma"><div class="flebox-container"><Encabezadotablabeisbol /></div></div>
        <div class="cajaEquipos"><div class="flebox-container2"><TablabeisbolCollectionPosciones /></div>
          <div class="flebox-container3"><div><PartidosCollectionBeislLuno /></div></div></div>
        <div class="cajaBarra"><BarraBeisTopDogs /></div>
        <div class="cajaJugadores"><CardjugadorbeisbolCollection /></div>
        <div class="cajaBarra"><BarraBeisTopHR /></div>
        <div class="cajaEquipos"><CardjugadorbeisbolCollectionHR /></div>
        <div class="cajaBarra"><BarraBeisPitcher /></div>
        <div class="cajaEquipos"><CardpitcherCollection /></div>
      </div>
    </MiContext.Provider>
  )

}
