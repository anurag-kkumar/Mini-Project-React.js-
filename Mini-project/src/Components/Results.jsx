import { useState } from "react"

export default function Results(){
const [results,setResults]=useState([])

return(
<div className="p-6 text-black">
<h2 className="text-xl font-semibold mb-4">Result Management</h2>

<div className="flex gap-3 mb-5">
<select className="border p-2 rounded w-40">
<option>All Students</option>
</select>

<select className="border p-2 rounded w-40">
<option>All Subjects</option>
</select>

<div className="grow"></div>

<button className="bg-blue-600 text-white px-4 py-2 rounded">Add New Result</button>
</div>

<div className="border rounded-lg overflow-hidden">
<table className="w-full text-left">
<thead className="bg-gray-100">
<tr>
<th className="p-3 text-sm">STUDENT NAME</th>
<th className="p-3 text-sm">SUBJECT</th>
<th className="p-3 text-sm">MARKS</th>
<th className="p-3 text-sm">GRADE</th>
<th className="p-3 text-sm">EXAM DATE</th>
<th className="p-3 text-sm">ACTIONS</th>
</tr>
</thead>
<tbody>
{results.length===0&&(
<tr>
<td className="p-4 text-center text-gray-500 text-sm" colSpan="6">No results found. Add a new result to get started.</td>
</tr>
)}
</tbody>
</table>
</div>
</div>
)
}
