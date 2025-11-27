import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const EditUser = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [section, setSection] = useState('');
  const [email, setEmail] = useState('');
  const [enrollmentDate, setEnrollmentDate] = useState('');

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/students/" + id)
      .then(response => {
        const data = response.data;
        setName(data.name);
        setSection(data.section);
        setEmail(data.email);
        setEnrollmentDate(data.enrollmentDate); 
      })
      .catch(error => console.log(error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:8000/students/" + id, {
      name,
      section,
      email,
      enrollmentDate
    })
      .then(response => {
        setData(response.data);
        navigate('/');
      })
      .catch(error => console.log(error));
  };

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col justify-center items-center bg-slate-100 p-10 mt-10 rounded-md'>
          
          <input
            className='my-2 px-5 py-1 rounded-full border border-gray-600'
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className='my-2 px-5 py-1 rounded-full border border-gray-600'
            type="text"
            placeholder="Section"
            value={section}
            onChange={(e) => setSection(e.target.value)}
          />

          <input
            className='my-2 px-5 py-1 rounded-full border border-gray-600'
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className='my-2 px-5 py-1 rounded-full border border-gray-600'
            type="date"
            placeholder="Enrollment Date"
            value={enrollmentDate}
            onChange={(e) => setEnrollmentDate(e.target.value)}
          />

          <div className="flex my-2">
            <button
              className='text-white mx-1 px-5 py-1 rounded-full bg-blue-500 hover:bg-blue-700'
            >
              EDIT
            </button>
            <button
              type="button"
              onClick={goHome}
              className='text-white mx-1 px-5 py-1 rounded-full bg-blue-500 hover:bg-blue-700'
            >
              CANCEL
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditUser;
