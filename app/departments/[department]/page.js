import Link from "next/link";
import { firestore } from "@/lib/firebase"; // Ensure this points to your Firebase setup

// Server Component
export default async function DepartmentPage({ params }) {
  const { department } = await params;

  let pdfs = [];
  try {
    const querySnapshot = await firestore
      .collection("questions")
      .where("department", "==", department)
      .orderBy("uploadedAt", "desc") // Sort by latest first
      .get();
  
    pdfs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  

  return (
    <div className="p-2 sm:p-6">
      <p className="text-2xl text-green-800 text-center font-bold mb-4">
        DEPARTMENT OF {department}
      </p>
      <div>
        {pdfs.length > 0 ? (
          pdfs.map((file, index) => (
            <div className="m-2 sm:m-10 p-3 bg-white rounded-lg drop-shadow" key={file.id}>
                <Link
                    href={file.cloudinaryUrl}
                    className="w-full mb-2 font-medium flex"
                    >
                    {file.subject} - {file.session}
                    <svg className="m-[2px]" width="18px" height="18px" viewBox="0 0 24 24" fill="none" ><path d="M12 3a1 1 0 0 1 1 1v9.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 13.586V4a1 1 0 0 1 1-1Z" fill="green"/><path d="M6 17a1 1 0 1 0-2 0v.6C4 19.482 5.518 21 7.4 21h9.2c1.882 0 3.4-1.518 3.4-3.4V17a1 1 0 1 0-2 0v.6c0 .778-.622 1.4-1.4 1.4H7.4c-.778 0-1.4-.622-1.4-1.4V17Z" fill="green"/></svg>
                </Link>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href={`https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(file.cloudinaryUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="PREVIEW THE PDF"
                  >
                  <svg className="me-1" fill="#730000dd" width="20px" height="20px" viewBox="0 0 52 52" enableBackground="new 0 0 52 52">
                    <g>
                      <path d="M51.8,25.1C47.1,15.6,37.3,9,26,9S4.9,15.6,0.2,25.1c-0.3,0.6-0.3,1.3,0,1.8C4.9,36.4,14.7,43,26,43 s21.1-6.6,25.8-16.1C52.1,26.3,52.1,25.7,51.8,25.1z M26,37c-6.1,0-11-4.9-11-11s4.9-11,11-11s11,4.9,11,11S32.1,37,26,37z" />
                      <path d="M26,19c-3.9,0-7,3.1-7,7s3.1,7,7,7s7-3.1,7-7S29.9,19,26,19z" />
                    </g>
                  </svg>
                  </Link>
                  <span className="text-[10px] me-2 bg-yellow-400 p-[3px] rounded-sm">{file.teacher}</span>
                  <span className="text-[10px] me-2 bg-green-400 p-[3px] rounded-sm">Semester</span>
                  <span className="text-[10px] me-2 bg-violet-500 text-white p-[3px] rounded-sm">{department}</span>
                </div>
            </div>
          ))
        ) : (
          <p className="text-center text-red-800">No questions found for this department.</p>
        )}
      </div>
    </div>
  );
}
