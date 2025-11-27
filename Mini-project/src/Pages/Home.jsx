import { useState } from "react";
import Nav from "../Components/Nav-bar/Nav";
import StudentService from "../services/StudentService";
import StudentList from "../Components/StudentList";
import Results from "../Components/Results";
function Home(){
  const [students,setstudent]=useState(true);
      const [Sections,setSections]=useState();
      const [Result,setResult]=useState();
    return(
       <div className='text-white  w-[80%]'>
    <h1 className="text-3xl font-bold flex flex-row justify-center">Student Result Manegment System </h1>
    <p className='text-sm  flex flex-row justify-center'>Maneges Student details</p>
    <div className='bg-white'>
      <Nav
      setstudent={setstudent}
      setSections={setSections}
      setResult={setResult}
      ></Nav>
      {students===true &&
      <StudentService ></StudentService>
      }
         {Sections===true &&
         <StudentList></StudentList>
      } 
       {Result===true &&
    <Results></Results>
} 
    </div>
   </div>
   
    );
}
export default Home;