import React, {useEffect, useState} from "react";
import config from "../config";
import fetch_register, {ICreateUser} from "../api/user/register.api";
import Contraner from "./contraner";

function VaccineRegister() {
  const [englishName, setEnglishName] = useState("");
  const [chineseName, setChineseName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState<Date>(new Date());
  const [address, setAddress] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [vaccineBrand, setVaccineBrand] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");


  useEffect(()=>{
    console.log(placeOfBirth)
  },[dateOfBirth])
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
  };



  return (
    <Contraner>
      <h2>Vaccine Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          English Name:
          <input
            type="text"
            value={englishName}
            onChange={(event) => setEnglishName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Chinese Name:
          <input
            type="text"
            value={chineseName}
            onChange={(event) => setChineseName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Gender:
          <select
            value={gender}
            onChange={(event) => setGender(event.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <label>
          Date of Birth:
          <input
            type="date"
            value={
                dateOfBirth.getFullYear().toString() +
                "-" +
                (dateOfBirth.getMonth() + 1).toString().padStart(2, "0")+
                "-" +
                dateOfBirth.getDate().toString().padStart(2, "0")
            }
            onChange={(event) => setDateOfBirth(new Date(event.target.value))}
          />
        </label>
        <br />
        <label>
          Address:
          <textarea
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </label>
        <br />
        <label>
          Place of Birth:
          <input
            type="text"
            value={placeOfBirth}
            onChange={(event) => setPlaceOfBirth(event.target.value)}
          />
        </label>
        <br />
        <label>
          Phone Number
        </label>
        <input value={phoneNumber} onChange={(event)=>setPhoneNumber(event.target.value)}/>
        <br />
        <label>
          Vaccine Brand:
          <select
            value={vaccineBrand}
            onChange={(event) => setVaccineBrand(event.target.value)}
          >
            <option value="">Select Vaccine Brand</option>
            <option value="pfizer">Pfizer</option>
            <option value="moderna">Moderna</option>
            <option value="astrazeneca">AstraZeneca</option>
            <option value="sinovac">Sinovac</option>
          </select>
        </label>
        <br />
        <button type="submit" onClick={async ()=>{

          const _payload:ICreateUser = {
            englishName: englishName,
            chineseName: chineseName,
            dateOfBirth: dateOfBirth,
            address: address,
            placeOfBirth: placeOfBirth,
            vaccineBrand: vaccineBrand,
            phoneNumber:phoneNumber
          }
        await fetch_register(_payload)
        }}>Submit</button>
      </form>
    </Contraner>
  );
}

export default VaccineRegister;
