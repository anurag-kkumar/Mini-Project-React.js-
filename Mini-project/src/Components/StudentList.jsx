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
     <div className="p-6">
      <h1 className="text-2xl text-black font-bold mb-4 text-center">Student Details</h1>
{/* <button className="text-black py-2 bg-blue-500 px-7 mb-3 rounded-2xl "
 onClick={()=>{
                    nav('/add');
                }}> add</button> */}
      <div className="overflow-x-auto text-black">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="py-3 px-4 text-left font-semibold">ID</th>
              <th className="py-3 px-4 text-left font-semibold">section</th>
              <th className="py-3 px-4 text-left font-semibold">Email</th>
              <th className="py-3 px-4 text-left font-semibold">Enrollement date</th>
              <th className="py-3 px-4 text-left font-semibold">action</th>

            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-2 px-4">{item.id}</td>
                <td className="py-2 px-4">{item.section}</td>
                <td className="py-2 px-4">{item.email}</td>
                <td className="py-2 px-4">{item.enrollementdate}</td>
                <td>
               <button className="text-blue-700 bg-yellow-300 py-2 m-2 px-2 rounded-lg"> edit</button>
                
                  <button className="text-white bg-red-600 py-2 m-2 px-2 rounded-lg"
                  onClick={()=>deleteUser(item.id)}
                  
                  > remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
