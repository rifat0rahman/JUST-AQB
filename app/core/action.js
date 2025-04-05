"use server";
import cloudinary from "@/lib/cloudinary";
import { base } from "../dept";
import axios from "axios";


export async function handleForm(formData) {

  const pdf = formData.get("file");
  const dept = formData.get("dept");
  const session = formData.get("session");
  const subject = formData.get("subject");
  const teacher = formData.get("teacher");
  const contributor = formData.get("contributor");

  try {
    const { Readable } = require("stream");

    
    const fileBuffer = Buffer.from(await pdf.arrayBuffer()); // Ensure this is a valid buffer

    const uploadResponse = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            { resource_type: "raw", folder: "questions", public_id: `${dept}-${subject}-${teacher}-${session}` },
            (error, result) => (error ? reject(error) : resolve(result))
        );

        // ✅ Convert the Buffer into a Readable Stream and pipe it
        Readable.from(fileBuffer).pipe(uploadStream);
    });

    console.log("Upload successful:", uploadResponse);
    


    console.log("Cloudinary Upload Response:", uploadResponse.url);

    const metadata = {
      dept: dept,
      session: session,
      course_title: subject,
      teacher: teacher,
      contributor: contributor,
      pdf: uploadResponse.secure_url,
    };

    // Save metadata to Firebase Firestore
    try {
      const res = await axios.post(`${base}/createpdf/`, metadata);
      console.log(res.data); // Log the actual response data
    } catch (error) {
        console.log(`${base}/createpdf/`);
        console.error("Error creating PDF:", error.response?.data || error.message);
    };

  }
  catch (error) {
    console.error("Error:", error.message);
  }
}
