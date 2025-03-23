import React from "react";
import cloudinary from "@/lib/cloudinary";
import { firestore } from "@/lib/firebase"; // Import Firebase Firestore from your Firebase setup

export default function Core() {
  async function handleForm(formData) {
    "use server";

    const pdf = formData.get("file");
    const dept = formData.get("dept");
    const session = formData.get("session");
    const subject = formData.get("subject");
    const teacher = formData.get("teacher");

    if (!pdf || !dept || !session || !subject || !teacher) {
      throw new Error("All fields are required!");
    }

    try {
      // Convert file to a buffer for Cloudinary upload
      const fileBuffer = await pdf.arrayBuffer();
      const fileStream = Buffer.from(fileBuffer);

      // Upload PDF to Cloudinary
      const uploadResponse = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          { resource_type: "raw", folder: "questions", public_id: "just-aqb" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        ).end(fileStream);
      });

      console.log("Cloudinary Upload Response:", uploadResponse.url);

      // Prepare metadata for Firebase
      const metadata = {
        department: dept,
        session,
        subject,
        teacher,
        cloudinaryUrl: uploadResponse.secure_url,
        cloudinaryId: uploadResponse.public_id,
        uploadedAt: new Date().toISOString(),
      };

      // Save metadata to Firebase Firestore
      const docRef = await firestore.collection("questions").add(metadata);

      console.log("Data saved to Firebase with ID:", docRef.id);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }

  return (
    <div>
      <div className="mt-10 flex items-center justify-center">
        <form
          className="w-full max-w-md bg-white shadow-md rounded-lg p-4"
          action={handleForm}
          encType="multipart/form-data"
          method="POST"
        >
          {/* File Input */}
          <div className="mb-4">
            <label
              htmlFor="file"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Upload Question's PDF
            </label>
            <input
              type="file"
              id="file"
              name="file"
              accept=".pdf"
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Select Department */}
          <div className="mb-4">
            <label
              htmlFor="dept"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Select Department
            </label>
            <select
              id="dept"
              name="dept"
              className="block w-full text-sm border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">-- Select --</option>
              <option value="CSE">CSE</option>
              <option value="EEE">EEE</option>
              <option value="IPE">IPE</option>
            </select>
          </div>

          {/* Select Session */}
          <div className="mb-4">
            <label
              htmlFor="session"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Select Question's Session
            </label>
            <select
              id="session"
              name="session"
              className="block w-full text-sm border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">-- Select --</option>
              <option value="23-24">23-24</option>
              <option value="22-23">22-23</option>
              <option value="21-22">21-22</option>
            </select>
          </div>

          {/* Input Subject */}
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Question's Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject here..."
              className="block w-full text-sm border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Input Teacher */}
          <div className="mb-4">
            <label
              htmlFor="teacher"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Teacher Name
            </label>
            <input
              type="text"
              id="teacher"
              name="teacher"
              placeholder="Teacher name here..."
              className="block w-full text-sm border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 px-4 hover:bg-green-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
