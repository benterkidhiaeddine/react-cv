import { useState } from "react";
import GeneralInformation from "./GeneralInformation";
import CV from "./CV";

import { baseGeneralInformation } from "../data/generalInformations";
export default function TopLevelManager() {
  const [generalInformation, setGeneralInformation] = useState(null);

  function handleChange(e, inputName) {
    const newGeneralInformation = {
      ...generalInformation,
      [inputName]: e.target.value,
    };
    setGeneralInformation(newGeneralInformation);
  }

  return (
    <>
      <CV generalInformation={generalInformation}></CV>
      <GeneralInformation
        generalInformation={generalInformation}
        handleChange={handleChange}
      ></GeneralInformation>
    </>
  );
}
