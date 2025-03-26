import Link from "next/link";
import { dept } from "../dept";


export default function Departments() {
  const departments = dept;

  return (

    <div className="p-6">
      <h1 className="text-2xl text-green-800 text-center font-bold mb-4">DEPARTMENTS</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {departments.map((department, index) => (
         <Link href={`departments/${department}`}
              key={index}
              className="w-40 text-center text-sm font-medium text-black-800 core_color p-2 rounded hover:bg-gray-100">
            
            {department}

         </Link>
        ))}
      </div>
    </div>


  );
}

