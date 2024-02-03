export default function CV({ generalInformation }) {
  return (
    <>
      <h1>Full Name: {generalInformation?.fullName}</h1>
      <p>Email : {generalInformation?.email}</p>
      <p>Phone Number : {generalInformation?.phoneNumber}</p>
    </>
  );
}
