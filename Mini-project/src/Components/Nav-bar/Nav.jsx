import { useState } from "react";

function Nav({setSections,setstudent,setResult}){
   
    function onclicksection(){
        setstudent(false);
        setSections(true);
        setResult(false);
    }
    function onclickstudent(){
    setstudent(true);
        setSections(false);
        setResult(false);
    }
    function onclickresult(){
        setstudent(false);
        setSections(false);
        setResult(true);
    }
    return(
        <div className="flex flex-row justify-around py-3">
            <div className="bg-gray-300 w-full border-b-4 border-gray-400 hover:border-blue-700 p-5"
            onClick={onclickstudent}>
                Students
            </div>
           <div className="bg-gray-300 w-full border-b-4 border-gray-400 hover:border-blue-700 py-5 " 
           onClick={onclicksection
           }>

                Sections
            </div>
           <div className="bg-gray-300 w-full border-b-4 border-gray-400 hover:border-blue-700 py-5" onClick={onclickresult}>

            Result
            </div>
        </div>
    );
}
export default Nav;