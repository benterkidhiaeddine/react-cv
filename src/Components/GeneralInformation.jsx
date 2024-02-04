/* eslint-disable react/prop-types */
export default function GeneralInformation({
  generalInformation,
  handleChange,
}) {
  return (
    <>
      <label htmlFor="fullName">Full Name</label>
      <input
        id="fullName"
        type="text"
        value={generalInformation?.fullName}
        onChange={(e) => handleChange(e, "fullName")}
      ></input>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={generalInformation?.email}
        onChange={(e) => handleChange(e, "email")}
      ></input>

      <label htmlFor="phoneNumber">PhoneNumber</label>
      <input
        id="phoneNumber"
        type="phone"
        value={generalInformation?.phoneNumber}
        onChange={(e) => handleChange(e, "phoneNumber")}
      ></input>

      <label htmlFor="adress">Adress</label>
      <input
        id="address"
        type="text"
        value={generalInformation?.address}
        onChange={(e) => handleChange(e, "address")}
      ></input>
    </>
  );
}
