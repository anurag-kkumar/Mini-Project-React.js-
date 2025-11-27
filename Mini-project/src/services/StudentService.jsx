import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentDetails from "../Components/StudentDetail";
import Studentform from "../Components/StudentForm";
export default function StudentService() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const nav=useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/students")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading)
    return <p className="text-center text-lg font-semibold">Loading...</p>;

  if (error)
    return (
      <p className="text-center text-red-500 font-semibold">Error: {error}</p>
    );

   const deleteUser = (id) => {
    axios.delete(`http://localhost:8000/students/${id}`).then((response)=>{
        const newdata=data.filter((data)=>data.id!==id);
        console.log(response);
        setData(newdata);
    }
        )
        .catch(error => {
      console.log(error)
    });
    }

  return (
    <div>
        <StudentDetails
        data={data}
        loading={loading}
        deleteUser={deleteUser}
        ></StudentDetails>
        <Studentform
        data={data}
        setData={setData}
        ></Studentform>
    </div>
  );
}
