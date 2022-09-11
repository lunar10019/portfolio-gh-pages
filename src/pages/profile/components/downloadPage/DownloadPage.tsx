import React, { FC } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import styles from "./downloadPage.module.scss";
import PrinterSvg from "../../../../components/icons/PrinterSvg";

interface Props {
  rootElementId: string;
}

const DownloadPage: FC<Props> = ({ rootElementId }) => {
  const downloadFileDocument = () => {
    const input = document.getElementById(rootElementId);
    const width = document.documentElement.offsetWidth;
    const height = input?.scrollHeight;

    html2canvas(input as HTMLElement, {
      scrollX: -window.scrollX,
      scrollY: -window.scrollY,
      windowWidth: width,
      windowHeight: height,
    }).then(function (canvas) {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
      });
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

      const blob = pdf.output("blob");
      window.open(URL.createObjectURL(blob));
    });
  };
  return (
    <div className={styles.printer} onClick={downloadFileDocument}>
      <PrinterSvg />
      <p>{"Print this page"}</p>
    </div>
  );
};

export default DownloadPage;
