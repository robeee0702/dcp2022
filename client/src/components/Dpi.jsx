import React from 'react'
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";


const Dpi = () => {
  return (
    <center>
    <div
      style={{
        margin: "60px",
        height: "750px",
      }}
    >
      {/* Using the same version that is installed !!! */}
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
        <div style={{padding:"80px"}}>
        <Viewer fileUrl="/dpi-site.pdf" />
        </div>
        <div style={{padding:"80px"}}>
        <Viewer fileUrl="/dpi-news.pdf" />
        </div>
        <div style={{padding:"80px"}}>
        <Viewer fileUrl="/dpi-cookie.pdf" />
        </div>
      </Worker>
    </div>
  </center>
  )
}

export default Dpi