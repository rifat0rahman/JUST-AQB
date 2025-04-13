"use client";
import React, { use, useState } from "react";
import { handleForm } from "./action"; // Import the server action
import { dept } from "../dept";

export default function Core() {
  const [isLoading, setIsLoading] = useState(false);
  const [uploadsucces,setUploadsucess] = useState("");
  const [bigpdf,setBigpdf] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
  
    const file = formData.get("file"); // Get the uploaded file
  
    // Validate file size (5MB limit)
    if (file && file.size > 5 * 1024 * 1024) {
      setBigpdf("PDF should not be more than 5MB.");
      return;
    }
  
    try {
      setIsLoading(true);
      setUploadsucess("");
      setBigpdf(""); // Clear any previous messages
      await handleForm(formData); // Call the server action
      setUploadsucess("THANKS FOR MAKING JUNIOR'S LIFE EASY, YOU ARE A CHAMP!");
      form.reset();
    } catch (error) {
      setBigpdf("An error occurred while uploading.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <div className="mt-10 sm:mt-5 text-center">
        <h1 className="text-center font-bold">Contribute by uploading questions</h1>
        <i className="text-center text-sm text-red-500">
          N.B. we are currently taking only pdf
        </i>
      </div>
      <div className="mt-5 flex items-center justify-center">
        <form
          className="w-full max-w-md bg-white shadow-sm rounded-lg p-5"
          onSubmit={handleSubmit} // Use the local handler
        >
          {/* File Input */}
          <div className="mb-2">
            <label
              htmlFor="file"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Upload Question&apos;s PDF
            </label>
            <input
              required
              type="file"
              id="file"
              name="file"
              accept=".pdf"
              className="inputs block w-full text-sm"
            />
          </div>

          {/* Select Department */}
          <div className="mb-2">
            <label
              htmlFor="dept"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Select Department
            </label>
            <select
              required
              id="dept"
              name="dept"
              className="inputs block w-full text-sm"
            >
              <option value="">-- Select --</option>
              {dept.map((dept, index) => (
                <option value={dept} key={index}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

        {/* Select Session */}
        <div className="flex flex-col md:flex-row gap-6 w-full mb-2">
          <div className="w-full md:flex-1">
            <label
              htmlFor="session"
              className="block text-sm font-medium text-gray-700"
            >
              Select Question&apos;s Session
            </label>
            <select
              required
              id="session"
              name="session"
              className="inputs block w-full text-sm"
            >
              <option value="">-- Select --</option>
              <option value="23-24">23-24</option>
              <option value="22-23">22-23</option>
              <option value="21-22">21-22</option>
              <option value="20-21">20-21</option>
              <option value="19-20">19-20</option>
              <option value="18-19">18-19</option>
              <option value="17-18">17-18</option>
            </select>
          </div>

            {/* select semester */}
          <div className="w-full md:flex-1">
            <label
              htmlFor="semester"
              className="block text-sm font-medium text-gray-700"
            >
              Select Question&apos;s Semester
            </label>
            <select
              required
              id="semester"
              name="semester"
              className="inputs block w-full text-sm"
            >
              <option value="">-- Select --</option>
              <option value="1-1">1-1</option>
              <option value="1-2">1-2</option>
              <option value="2-1">2-1</option>
              <option value="2-2">2-2</option>
              <option value="3-1">3-1</option>
              <option value="3-2">3-2</option>
              <option value="4-1">4-1</option>
              <option value="4-2">4-2</option>
            </select>
          </div>
        </div>


          {/* Input Subject */}
          <div className="mb-2">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Course Title
            </label>
            <input
              required
              type="text"
              id="subject"
              name="subject"
              placeholder="Course title here..."
              className="block w-full text-sm inputs"
            />
          </div>

          {/* Input Teacher */}
          <div className="mb-2">
            <label
              htmlFor="teacher"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Teacher Name
            </label>
            <input
              required
              type="text"
              id="teacher"
              name="teacher"
              placeholder="Teacher name here..."
              className="block w-full text-sm inputs"
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="contributor"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Contributor Name
            </label>
            <input
              type="text"
              id="contributor"
              name="contributor"
              placeholder="Contributor name here..."
              className="block w-full text-sm inputs"
            />
          </div>

          {/* Submit Button */}
          <div>
          <button
            type="submit"
            disabled={isLoading}
            className={`shadow-md w-full rounded-md border p-1 ${
              isLoading
                ? "text-black-500 core_color cursor-not-allowed"
                : "border-red-700 core_color"
            }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 rounded-full animate-spin border-2 border-white-900 border-t-transparent"></div>
                <span>Uploading...</span>
              </div>
            ) : (
              "Upload"
            )}
          </button>

          </div>
        {/* Success Message */}
        {uploadsucces && (
          <div className="mt-2 text-center text-green-600 font-semibold  text-[12px]">
            {uploadsucces}
          </div>
        )}
        {bigpdf && (
          <div className="mt-2 text-center text-red-600 font-semibold  text-[12px]">
            {bigpdf}
          </div>
        )}
        </form>
      </div>
    </div>
  );
}
