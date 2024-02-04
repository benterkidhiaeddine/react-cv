/* eslint-disable react/prop-types */
import EducationalExperience from "./EducationalExperience";
export default function EducationalExperienceSection({
  educationalExperiences,
  handleClick,
  handleChange,
}) {
  return (
    <>
      {educationalExperiences.map((item) => {
        return (
          <EducationalExperience
            key={item?.id}
            id={item?.id}
            educationalExperience={item}
            handleChange={handleChange}
          ></EducationalExperience>
        );
      })}

      <button onClick={handleClick}>Add school/Universities</button>
    </>
  );
}
