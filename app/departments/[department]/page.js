import Link from "next/link";
import { firestore } from "@/lib/firebase"; // Ensure this points to your Firebase setup

// Server Component
export default async function DepartmentPage({ params }) {
  const { department } = params;

  // Fetch data from Firestore
  let pdfs = [];
  try {
    const querySnapshot = await firestore
      .collection("questions")
      .where("department", "==", department)
      .get();

    pdfs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl text-center font-bold mb-4">
        Department of {department}
      </h1>
      <div className="flex flex-wrap gap-4">
        {pdfs.length > 0 ? (
          pdfs.map((file, index) => (
            <Link
              href={file.cloudinaryUrl} // Replace with your actual link or logic for navigation
              key={file.id}
              className="w-[50%] text-sm font-medium text-green-800 border border-gray-200 p-1"
            >
              {index + 1}. {file.subject} - {file.teacher} - {file.session}
            </Link>
          ))
        ) : (
          <p className="text-center">No questions found for this department.</p>
        )}
      </div>
    </div>
  );
}
