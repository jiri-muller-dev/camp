"use server";

import { db } from "../firebase";
import { campStartDate } from "../details";
import {
  collection,
  addDoc,
  DocumentData,
  serverTimestamp,
} from "firebase/firestore";

function isValidEmail(email: string) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

export default async function sendRegistration(_: unknown, formData: FormData) {
  const formValues = {
    fullname: String(formData.get("fullname")),
    dateofbirth: new Date(String(formData.get("dateofbirth"))),
    email: String(formData.get("email")),
    address: formData.get("address"),
    nin: formData.get("nin"),
    insurance: formData.get("insurance"),
    healthnotes: formData.get("healthnotes"),
    dietnotes: formData.get("dietnotes"),
    phonenumber: formData.get("phonenumber"),
    tshirtsize: formData.get("tshirtsize"),
  };

  if (formValues.fullname.length <= 2) {
    return {
      success: false,
      message: "Name is too short",
      values: formValues,
    };
  }
  if (isNaN(formValues.dateofbirth.getTime())) {
    return {
      success: false,
      message: "Invalid date of birth",
      values: formValues,
    };
  }

  const campDate = new Date(campStartDate);
  const minAge = 12;
  const minAgeDate = new Date(campDate);
  minAgeDate.setFullYear(campDate.getFullYear() - minAge);
  if (formValues.dateofbirth > minAgeDate) {
    return {
      success: false,
      message: "Age below the minimum age requirements",
      values: formValues,
    };
  }
  const maxAge = 17;
  const maxAgeDate = new Date(campDate);
  maxAgeDate.setFullYear(campDate.getFullYear() - maxAge);
  if (formValues.dateofbirth < maxAgeDate) {
    return {
      success: false,
      message: "Age above the maximum age requirements",
      values: formValues,
    };
  }

  if (!isValidEmail(formValues.email)) {
    return {
      success: false,
      message: "Invalid e-mail address",
      values: formValues,
    };
  }

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
