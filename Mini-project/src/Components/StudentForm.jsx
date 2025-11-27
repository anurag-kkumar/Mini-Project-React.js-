import React, { useState } from 'react';
import axios from "axios";

const Studentform = ({ setData, data }) => {
    const[id,setid]=useState("");
    const [name, setName] = useState("")
    const [section, setsection] = useState("")
    const [email, setemail] = useState("")
    const [date, setdate] = useState("")
    

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:8000/students`, { id,name, section ,email,date})
            .then((res) => {
                setData([...data, res.data])
                setid('');
                setName('');
                setsection('');
                setemail('');
                setdate('')
            });
    };

    return (
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col justify-center items-center sm:flex-row sm:justify-evenly text-black'>
                     <div className='mb-2'>
                        <input
                            className='px-3 py-1 rounded-full border border-gray-600'
                            value={id} onChange={(e) => setid(e.target.value)} required
                            type="text" placeholder="id" />
                    </div>
                    <div className='mb-2'>
                        <input
                            className='px-3 py-1 rounded-full border border-gray-600'
                            value={name} onChange={(e) => setName(e.target.value)} required
                            type="text" placeholder="Name" />
                    </div>
                    <div className='mb-2'>
                        <input
                            className='px-3 py-1 rounded-full border border-gray-600'
                            value={section} onChange={(e) => setsection(e.target.value)} required
                            type="text" placeholder="section" />
                    </div>
                    <div className='mb-2'>
                        <input
                            className='px-3 py-1 rounded-full border border-gray-600'
                            value={email} onChange={(e) => setemail(e.target.value)} required
                            type="text" placeholder="email" />
                    </div>
                    <div className='mb-2'>
                        <input
                            className='px-3 py-1 rounded-full border border-gray-600'
                            value={date} onChange={(e) => setdate(e.target.value)} required
                            type="text" placeholder="date" />
                    </div>
                    <div className='mb-2'>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded-full">
                            Add
                        </button>
                    </div>
                </div>
            </form>
    );
}

export default Studentform;