import {
  CardjugadorbeisbolCollectionHR,
  CardjugadorfutbolCollectionLigaNayUno,
  PartidosfutbolCollection,
  Encabezadotablafutbol,
  TablafutbolCollection,
  CardjugadorfutbolCollectionCedula,
  CampeonatoCollection,
} from "./ui-components";


import { BarraNayFutLiga1 } from "./BarraNayFutLiga1";
import { BarraFutTopGoles } from "./BarraFutTopGoles";
import { BarraFutTopGoleoSemana } from "./BarraFutTopGoleoSemana";
import { BarraFutCampeonatos } from "./BarraFutCampeonatos";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import './stylesFut.css'
import { BarraFut20JugadoresLiga } from "./BarraFut20JugadoresLiga";


const NayaritFutbolLiga1 = () => {

  const toDataURL = url => fetch(url)
    .then(response => response.blob())
    .then(blob => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    }));

  const createPDF = async () => {
    const pdf = new jsPDF("portrait", "pt", "letter");
    pdf.setDrawColor(32, 8, 77);
    const data = await html2canvas(document.querySelector("#pdf"));
    const img = data.toDataURL("image/png");
    const seve = await toDataURL(img);
    /* const logo = new Image();
    logo.src = 'images/logo-dogiplay.png';
    pdf.addImage(logo, 'PNG', 15, 500, 430, 112); */
    const imgProperties = pdf.getImageProperties(seve);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.setFontSize(30);
    pdf.setTextColor("#A0250A")
    pdf.text(20, 40, "dogiplay.com / los mas perros del deporte");
    pdf.addImage(img, "JPG", 0, 70, pdfWidth, pdfHeight);
    pdf.save("dogiplay.pdf");
  };

  return (

    <div class="grid-layout-fut">
      <div class="cajaBarra-fut">
        <BarraNayFutLiga1 />
      </div>
      <div id="pdf">
        <div class="cajaBarra-fut">
          <BarraNayFutLiga1 />
        </div>

        <div class="cajaBarraFigma">
          <div class="flebox-container">
            <Encabezadotablafutbol />
          </div>
        </div>
        <div >
          <div >
  
            <table>

              <tr className="pos">
                <td><strong>1</strong></td>
              </tr>
             
              <tr class="espacio" ></tr>
              <tr className="pos">
                <td><strong>2</strong></td>
              </tr>
              <tr class="espacio"></tr>
              <tr className="pos">
                <td><strong>3</strong></td>
              </tr>
              <tr class="espacio"></tr>
              <tr className="pos">
                <td><strong>4</strong></td>
              </tr>
              <tr class="espacio"></tr>
              <tr className="pos">
                <td><strong>5</strong></td>
              </tr>
              <tr class="espacio"></tr>
              <tr className="pos">
                <td><strong>6</strong></td>
              </tr>
              <tr class="espacio"></tr>
              <tr className="pos">
                <td><strong>7</strong></td>
              </tr>
              <tr class="espacio"></tr>
              <tr className="pos">
                <td><strong>8</strong></td>
              </tr>
              <tr class="espacio"></tr>
              <tr className="pos">
                <td><strong>9</strong></td>
              </tr>
              <tr class="espacio" color="#ee00ff"></tr>
              <tr className="pos">
                <td><strong>10</strong></td>
              </tr>

            </table>
          </div>
          <div class="flebox-tabla-posiciones">
            <TablafutbolCollection />
          </div>
          <div class="flebox-container3">
            <div>
              <PartidosfutbolCollection />
            </div>
          </div>
        </div>
      </div>
      <div className="botones">
        <button class="botonPDF" onClick={createPDF} type="button">
          Descargar tabla de posiciones y partidos visibles...
        </button>

      </div>
      <div class="cajaBarra-fut">
        <BarraFutTopGoles />
      </div>
      <div class="caja">
        <CardjugadorfutbolCollectionLigaNayUno />
      </div>
      <div class="cajaBarra-fut">
        <BarraFut20JugadoresLiga />
      </div>
      <div class="caja">
        <CardjugadorfutbolCollectionCedula />
      </div>
     
      <div class="cajaBarra-fut">
        <BarraFutCampeonatos />
      </div>
      <div class="cajaEquipos">
        <CampeonatoCollection />
      </div>
    </div>




  );
};

export default NayaritFutbolLiga1;
