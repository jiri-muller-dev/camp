"use server";

import { db } from "../firebase";
import { campStartDate } from "../details";
import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

function isValidEmail(email: string) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

const isValidPhoneNumber = (phone:string) => {
  const phonePattern = /^\+?[1-9][\d ]{1,18}$/;
  return phonePattern.test(phone);
};

export default async function sendRegistration(_: unknown, formData: FormData) {
  const formValues = {
    fullname: String(formData.get("fullname")),
    dateofbirth: String(formData.get("dateofbirth")),
    email: String(formData.get("email")),
    phonenumber: String(formData.get("phonenumber")),
  };

  if (formValues.fullname.length <= 2) {
    return {
      success: false,
      message: "Name is too short",
      values: formValues,
    };
  }

  const dob = new Date(formValues.dateofbirth)
  if (isNaN(dob.getTime())) {
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
  if (dob > minAgeDate) {
    return {
      success: false,
      message: "Age below the minimum age requirements",
      values: formValues,
    };
  }
  const maxAge = 17;
  const maxAgeDate = new Date(campDate);
  maxAgeDate.setFullYear(campDate.getFullYear() - maxAge);
  if (dob < maxAgeDate) {
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

  if (!isValidPhoneNumber(formValues.phonenumber)) {
    return {
      success: false,
      message: "Invalid phone number",
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
