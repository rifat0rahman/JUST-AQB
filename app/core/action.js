"use server";
import cloudinary from "@/lib/cloudinary";
import { firestore } from "@/lib/firebase";
import { serverTimestamp } from "firebase/firestore";

export async function handleForm(formData) {

  const pdf = formData.get("file");
  const dept = formData.get("dept");
  const session = formData.get("session");
  const subject = formData.get("subject");
  const teacher = formData.get("teacher");

  try {
    // Convert file to a buffer for Cloudinary upload
    const fileBuffer = await pdf.arrayBuffer();
    const fileStream = Buffer.from(fileBuffer);

    // Upload PDF to Cloudinary
    const uploadResponse = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { resource_type: "raw", folder: "questions", public_id: dept + "-" + subject + "-" + teacher + "-" + session },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      ).end(fileStream);
    });

    console.log("Cloudinary Upload Response:", uploadResponse.url);

    const metadata = {
      department: dept,
      session,
      subject,
      teacher,
      cloudinaryUrl: uploadResponse.secure_url,
      cloudinaryId: uploadResponse.public_id,
      uploadedAt: serverTimestamp(),
    };

    // Save metadata to Firebase Firestore
    const docRef = await firestore.collection("questions").add(metadata);

    console.log("Data saved to Firebase with ID:", docRef.id);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
