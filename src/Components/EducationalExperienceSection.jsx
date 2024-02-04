/* eslint-disable react/prop-types */
import EducationalExperience from "./EducationalExperience";
export default function EducationalExperienceSection({
  educationalExperiences,
  handleClick,
  handleChange,
  handleRemove,
}) {
  return (
    <>
      {educationalExperiences.map((item) => {
        return (
          <div key={item?.id}>
            <EducationalExperience
              id={item?.id}
              educationalExperience={item}
              handleChange={handleChange}
            ></EducationalExperience>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        );
      })}

      <button onClick={handleClick}>Add school/Universities</button>
    </>
  );
}
