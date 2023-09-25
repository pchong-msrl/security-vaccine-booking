import React, { useEffect, useState } from "react";
import config from "../config";
import fetch_register, { ICreateUser } from "../api/user/register.api";
import registerTimeSlot, { ITimeslot } from "../api/user/registerTimeSlot";
import getAvailable from "../api/user/getAvailable";
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
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");

  useEffect(() => {
    console.log(placeOfBirth);
  }, [dateOfBirth]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
  };

  function handleSubmit2(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(selectedTimeSlot); // This will log the selected time slot's _id value
  }

  const [timeSlots, setTimeSlots] = useState<
    { _id: string; startTime: string; endTime: string }[] | null
  >(null);

  useEffect(() => {
    const fetchTimeSlots = async () => {
      const res = await getAvailable();
      setTimeSlots(res);
    };

    fetchTimeSlots();
  }, []);

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
              (dateOfBirth.getMonth() + 1).toString().padStart(2, "0") +
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
        <label>Phone Number</label>
        <input
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
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
        <button
          type="submit"
          onClick={async () => {
            const _payload: ICreateUser = {
              englishName: englishName,
              chineseName: chineseName,
              gender: gender,
              dateOfBirth: dateOfBirth,
              address: address,
              placeOfBirth: placeOfBirth,
              vaccineBrand: vaccineBrand,
              phoneNumber: phoneNumber,
            };
            await fetch_register(_payload);
          }}
        >
          register vaccine user
        </button>
        <br />
      </form>

      <form onSubmit={handleSubmit2}>
        <label>
          Time Slot:
          <select
            value={selectedTimeSlot}
            onChange={(e) => setSelectedTimeSlot(e.target.value)}
          >
            {timeSlots &&
              timeSlots.length > 0 &&
              timeSlots!.map((timeSlot) => (
                <option key={timeSlot._id} value={timeSlot._id}>
                  {new Date(timeSlot.startTime).toLocaleString()}
                </option>
              ))}
          </select>
        </label>
        <br />
        <button
          type="submit"
          onClick={async () => {
            const userId = localStorage.getItem("userId");
            if (userId) {
              const _payload = {
                vaccineUserId: userId,
                timeSlotId: selectedTimeSlot,
              };
              await registerTimeSlot(_payload);
            }
          }}
        >
          Register Time Slot
        </button>
      </form>
    </Contraner>
  );
}

export default VaccineRegister;
