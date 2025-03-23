import Link from "next/link";

export default function Departments() {
  const departments = [
    "CSE",  // Computer Science and Engineering
    "IPE",  // Industrial and Production Engineering
    "PME",  // Petroleum and Mining Engineering
    "ChE",   // Chemical Engineering
    "EEE",  // Electrical and Electronic Engineering
    "TE",
    "Microbiology",
    "FMB",  // Fisheries and Marine Bioscience
    "GEBT",  // Genetic Engineering and Biotechnology
    "Pharmacy",
    "BMB",  // Biochemistry and Molecular Biology
    "BME",
    "EST",  // Environmental Science and Technology
    "NFT",  // Nutrition and Food Technology
    "FE", // Agro Product Processing Technology
    "CDM",  // Climate and Disaster Management
    "PESS", // Physical Education and Sports Science
    "PR",   // Physiotherapy and Rehabilitation
    "NHS",  // Nursing and Health Science
    "Physics",
    "Chemistry",
    "Math", // Mathematics
    "ASDS", // Applied statistics and data science 
    "AIS",  // Accounting and Information Systems
    "Finance And Banking",
    "Management",
    "Marketing",
    "English",
  ];


  return (

    <div className="p-6">
      <h1 className="text-2xl text-center font-bold mb-4">DEPARTMENTS</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {departments.map((department, index) => (
         <Link href={`departments/${department}`}
              key={index}
              className="w-40 text-center text-sm font-medium text-black-800 border border-green-700 p-2 rounded hover:bg-gray-100">
            
            {department}

         </Link>
        ))}
      </div>
    </div>


  );
}

