import CVEducationalExperience from "./CVEducationalExperience";

export default function CV({ generalInformation, educationalExperiences }) {
  return (
    <>
      <h1>Full Name: {generalInformation?.fullName}</h1>
      <p>Email : {generalInformation?.email}</p>
      <p>Phone Number : {generalInformation?.phoneNumber}</p>
      <p>Adress : {generalInformation?.address}</p>

      {educationalExperiences.map((item) => (
        <CVEducationalExperience
          key={item?.id}
          educationalExperience={item}
        ></CVEducationalExperience>
      ))}
    </>
  );
}
