/* eslint-disable react/prop-types */
export default function EducationalExperience({
  id,
  educationalExperience,
  handleChange,
}) {
  return (
    <>
      <div>
        <label htmlFor={id + "-schoolName"}>School</label>
        <input
          id={id + "-schoolName"}
          type="text"
          value={educationalExperience?.school}
          onChange={(e) => handleChange(e, "school", id)}
        ></input>
        <label htmlFor={id + "-degree"}>Degree</label>
        <input
          id={id + "-degree"}
          type="text"
          value={educationalExperience?.degree}
          onChange={(e) => handleChange(e, "degree", id)}
        ></input>
        <label htmlFor={id + "-startDate"}>From</label>
        <input
          id={id + "-startDate"}
          type="date"
          value={educationalExperience?.startDate}
          onChange={(e) => handleChange(e, "startDate", id)}
        />
        <label htmlFor={id + "-endDate"}>To</label>
        <input
          id={id + "-endDate"}
          type="date"
          value={educationalExperience?.endDate}
          onChange={(e) => handleChange(e, "endDate", id)}
        />
      </div>
    </>
  );
}
