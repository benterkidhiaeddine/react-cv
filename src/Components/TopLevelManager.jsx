import { useState } from "react";
import GeneralInformation from "./GeneralInformation";
import CV from "./CV";

import { baseEducationalExperiences } from "../data/educationalExperiences";
import { emptyEducationalExperience } from "../utils/helperFunctions";

import { baseGeneralInformation } from "../data/generalInformations";
import EducationalExperienceSection from "./EducationalExperienceSection";
export default function TopLevelManager() {
  const [generalInformation, setGeneralInformation] = useState(
    baseGeneralInformation
  );

  const [educationalExperiences, setEducationalExperiences] = useState(
    baseEducationalExperiences
  );

  function handleGeneralInformationChange(e, inputName) {
    const newGeneralInformation = {
      ...generalInformation,
      [inputName]: e.target.value,
    };
    setGeneralInformation(newGeneralInformation);
  }

  //This callback function will handle adding new School / Univesities Form Component
  function handleClickSchool() {
    const newEducationalExperiences = [
      ...educationalExperiences,
      emptyEducationalExperience(),
    ];
    setEducationalExperiences(newEducationalExperiences);
  }

  function handleEducationalExperiencesChange(e, inputName, id) {
    const newEducationalExperiences = educationalExperiences.map((item) => {
      if (item.id === id) {
        return { ...item, [inputName]: e.target.value };
      }
      return item;
    });

    setEducationalExperiences(newEducationalExperiences);
  }

  function handleRemoveEducationalExperience(id) {
    const newEducationalExperiences = educationalExperiences.filter(
      (item) => item.id !== id
    );
    setEducationalExperiences(newEducationalExperiences);
  }

  return (
    <>
      <CV
        generalInformation={generalInformation}
        educationalExperiences={educationalExperiences}
      ></CV>
      <GeneralInformation
        generalInformation={generalInformation}
        handleChange={handleGeneralInformationChange}
      ></GeneralInformation>
      <EducationalExperienceSection
        educationalExperiences={educationalExperiences}
        handleClick={handleClickSchool}
        handleChange={handleEducationalExperiencesChange}
        handleRemove={handleRemoveEducationalExperience}
      ></EducationalExperienceSection>
    </>
  );
}
