/* eslint-disable react/prop-types */
export default function CVEducationalExperience({ educationalExperience }) {
  return (
    <div>
      <p>School: {educationalExperience?.school}</p>
      <p>Degree: {educationalExperience?.degree}</p>
      <p>Start Date: {educationalExperience?.startDate}</p>
      <p>End Date: {educationalExperience?.endDate}</p>
    </div>
  );
}
