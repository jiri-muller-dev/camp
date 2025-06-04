"use server";

import { db } from "../firebase";
import {
  collection,
  addDoc,
  DocumentData,
  serverTimestamp,
} from "firebase/firestore";

export default async function sendRegistration(_: unknown, formData: FormData) {
  const formValues = {
    fullname: formData.get("fullname"),
    dateofbirth: formData.get("dateofbirth"),
    address: formData.get("address"),
    nin: formData.get("nin"),
    insurance: formData.get("insurance"),
    healthnotes: formData.get("healthnotes"),
    dietnotes: formData.get("dietnotes"),
    phonenumber: formData.get("phonenumber"),
    tshirtsize: formData.get("tshirtsize"),
  };

  console.log(formData);
  console.log(formValues);

  try {
    const docRef = await addDoc(collection(db, "attendees"), {
      ...formValues,
      timestamp: serverTimestamp(),
    });
    console.log("Document written with ID: ", docRef.id);
    return {
      success: true,
      message: "Successful registration",
      values: formValues,
    };
  } catch (err) {
    return {
      success: false,
      message: "Registration failed (" + String((err as Error).message) + ")",
      values: formValues,
    };
  }
}
