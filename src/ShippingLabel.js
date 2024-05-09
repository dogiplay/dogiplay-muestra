import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

import "./styles.css";
import { CardpitcherCollection } from "./ui-components";
import { BarraBeisPitcher } from "./BarraBeisPitcher";

const ShippingLabel = () => {
  const createPDF = async () => {
    const pdf = new jsPDF("portrait", "pt", "Legal");
    const data = await html2canvas(document.querySelector("#pdf"));
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("dogiplay.pdf");
  };
  return (
    <div className="shipping">
      <h1>Download Shipping Label</h1>
      <p>Nihil quam soluta sed enim aut omnis voluptatem reprehenderit.</p>
      <div id="pdf">
        <div class="grid-layout">
          <div class="cajaBarra">
            <BarraBeisPitcher />
          </div>
          <div class="cajaEquipos">
            <CardpitcherCollection />
          </div>
        </div>
      </div>
      <button onClick={createPDF} type="button">
        Download
      </button>
    </div>
  );
};

export default ShippingLabel;
