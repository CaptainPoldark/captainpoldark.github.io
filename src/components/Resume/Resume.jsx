import React, { useState, useRef } from "react";
import Pdf from "@mikecousins/react-pdf";
const resume = "../../Images/JonathankyleBrooks.pdf";

function Resume() {


  return (
    <div>
      <Pdf file={resume} page={0}></Pdf>
    </div>
  );
}

export default Resume;
