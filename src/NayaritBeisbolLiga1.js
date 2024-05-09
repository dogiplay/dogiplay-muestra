import {
  CardjugadorbeisbolCollection,
  CardjugadorbeisbolCollectionHR,
  CardpitcherCollection,
  Encabezadotablabeisbol,
  TablabeisbolCollectionPosciones,
  PartidosCollectionBeislLuno,
} from "./ui-components";
import "./styles.css";
import { MiContext } from "./context/MiContext";
import { BarraNayBeisLiga1 } from "./BarraNayBeisLiga1";
import { BarraBeisTopDogs } from "./BarraBeisTopDogs";
import { BarraBeisTopHR } from "./BarraBeisTopHR";
import { BarraBeisPitcher } from "./BarraBeisPitcher";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
/* import DivToImage from "./DivToImage";
import { useRef } from 'react'; */


const NayaritBeisbolLiga1 = () => {
  // const exportRef = useRef(0);
  const createPDF = async () => {
    const pdf = new jsPDF("portrait", "pt", "letter");
    pdf.setDrawColor(32, 8, 77);
    const data = await html2canvas(document.querySelector("#pdf"));
    const img = data.toDataURL("image/png");
    /* const logo = new Image();
    logo.src = 'images/logo-dogiplay.png';
    pdf.addImage(logo, 'PNG', 15, 500, 430, 112); */
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.setFontSize(30);
    pdf.setTextColor("#A0250A")
    pdf.text(20, 40, "dogiplay.com / los mas perros del deporte");
    pdf.addImage(img, "PNG", 0, 70, pdfWidth, pdfHeight);
    pdf.save("dogiplay.pdf");
  };

  return (
    <MiContext.Provider>
      <div class="grid-layout">
        <div class="cajaBarra">
          <BarraNayBeisLiga1 />
        </div>
        <div id="pdf">
          <div class="cajaBarra">
            <BarraNayBeisLiga1 />
          </div>
          <div class="cajaBarraFigma">
            <div class="flebox-container">
              <Encabezadotablabeisbol />
            </div>
          </div>
          <div class="cajaEquipos">
            <div class="flebox-tabla-posiciones">
              <TablabeisbolCollectionPosciones />
            </div>
            <div class="flebox-container3">
              <div>
                <PartidosCollectionBeislLuno />
              </div>
            </div>
          </div>
        </div>
        <button class="botonPDF" onClick={createPDF} type="button">
          Descargar tabla de posiciones y partidos visibles
        </button>

        <div class="cajaBarra">
          <BarraBeisTopDogs />
        </div>
     {/*    <div className="parent">
        <div ref={exportRef}>   */}   
        <div class="cajaJugadores">
          <CardjugadorbeisbolCollection/>
        </div>
       {/*  </div>
      </div> */}
      {/*   <button onClick={() => DivToImage(exportRef.current, "test")}>
        Capture Image
      </button> */}
        <div class="cajaBarra">
          <BarraBeisTopHR />
        </div>
        <div class="cajaEquipos">
          <CardjugadorbeisbolCollectionHR />
        </div>
        <div class="cajaBarra">
          <BarraBeisPitcher />
        </div>
        <div class="cajaEquipos">
          <CardpitcherCollection />
        </div>
      </div>
     
   
    </MiContext.Provider>

  );
};

export default NayaritBeisbolLiga1;
