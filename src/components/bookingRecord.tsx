import Contraner from "./contraner";
import { useEffect, useState } from "react";
import { useAuth } from "./hook/useAuth";

import GetAllTimeslots from "../api/admin/listAllTimeSlot";

const BookingRecord = () => {
  const { token } = useAuth();

  const [records, setRecords] = useState<any[]>([]);

  useEffect(() => {
    const fetchRecords = async () => {
      console.log(`test token:${token}`);
      const data = await GetAllTimeslots(`${token}`);

      setRecords(data);
    };
    fetchRecords();
  }, []);

  if (!token) {
    return <div>Unauthorized, only admin can access</div>;
  }
  return (
    <Contraner>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Name</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Vaccine</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record._id}>
              <td>{new Date(record.startTime).toLocaleString()}</td>
              <td>
                {record.registeredUserId.englishName} /{" "}
                {record.registeredUserId.chineseName}
              </td>
              <td>{record.registeredUserId.gender}</td>
              <td>
                {new Date(
                  record.registeredUserId.dateOfBirth
                ).toLocaleDateString()}
              </td>
              <td>{record.registeredUserId.vaccineBrand}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Contraner>
  );
};

export default BookingRecord;
