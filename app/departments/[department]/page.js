
import axios from "axios";
import { base } from "@/app/dept";
import DepartmentPageClient from "./pageClient";


// Server Component
export default async function DepartmentPage({ params }) {
  const { department } = await params;
  console.log(base,"nothing");
  let pdfs = [];
  try {
    const querySnapshot = await axios.get(
      `${base}/getpdf/?dept=${department}`
    ).then((response) =>{
      console.log(response.data);
      return response.data
    });
  
    pdfs = querySnapshot,
    console.log(pdfs);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  
  return <DepartmentPageClient pdfs={pdfs} department={department}/>;
}