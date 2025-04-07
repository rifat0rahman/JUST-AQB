"use client"
import Link from "next/link";
import { useState } from "react";


// Server Component
export default function DepartmentPageClient({ pdfs,department }) {

  const [session, setSession] = useState("");

  const handleSessionChange =  e =>{
    setSession(e.target.value);
  }
  const pdf = session && Array.isArray(pdfs)? pdfs.filter(pdf => pdf.session === session) : pdfs
  

  return (
    <div className="p-2 mt-10 sm:m-4 sm:p-6">
      <p className="text-2xl text-green-800 text-center font-bold mb-4">
        DEPARTMENT OF {department}
      </p>
      <div className="w-[100%] sm:w-100 p-3 sm:p-3 m-auto text-center">
      <div className="mb-2">
            <label
              htmlFor="session"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Filter with Question&apos;s Session
            </label>
            <select
              required
              id="session"
              name="session"
              className="inputs-dept border border-gray-300 block w-full text-sm"
              value={session}
              onChange={handleSessionChange}
            >
              <option value="" >Select Session</option>
              <option value="23-24">23-24</option>
              <option value="22-23">22-23</option>
              <option value="21-22">21-22</option>
              <option value="20-21">20-21</option>
              <option value="19-20">19-20</option>
              <option value="18-19">18-19</option>
              <option value="17-18">17-18</option>
            </select>
          </div>
      </div>
      <div>
        {pdf.length > 0 ? (
          pdf.map((file, index) => (
            <div className="mt-5 m-3 p-3 bg-white rounded-lg drop-shadow" key={file.id}>
                <Link
                    href={file.pdf}
                    className="w-full mb-2 font-medium flex"
                    >
                    {file.course_title}<span className="text-sm font-bold text-gray-600 mt-[3px]">({file.session})</span>
                    <svg className="m-[2px]" width="18px" height="18px" viewBox="0 0 24 24" fill="none" ><path d="M12 3a1 1 0 0 1 1 1v9.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 13.586V4a1 1 0 0 1 1-1Z" fill="green"/><path d="M6 17a1 1 0 1 0-2 0v.6C4 19.482 5.518 21 7.4 21h9.2c1.882 0 3.4-1.518 3.4-3.4V17a1 1 0 1 0-2 0v.6c0 .778-.622 1.4-1.4 1.4H7.4c-.778 0-1.4-.622-1.4-1.4V17Z" fill="green"/></svg>
                </Link>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href={`https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(file.pdf)}`}
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
                  <span className="text-[10px] me-2 bg-gray-500 text-white p-[3px] rounded-sm">{file.contributor}</span>

                </div>
            </div>
          ))
        ) : (
          <p className="text-center text-red-800 mt-10">NO QUESTIONS FOR THIS QUERY</p>
        )}
      </div>
    </div>
  );
}
