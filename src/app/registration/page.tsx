"use client";

import React from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const Registration: React.FC = () => {
  const [regName, setRegName] = React.useState<string>("");
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    const documentData = {
      name: regName,
    };

    try {
      await addDoc(collection(db, "attendees"), documentData);
      setSuccess(true);
      setRegName("");
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div>
      <h2>New registration:</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="fullname"
            id="input_name"
            placeholder="Enter name of attendee"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={regName}
            onChange={(e) => setRegName(e.target.value)}
          />
          <button
            type="submit"
            value="Submit"
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow transition duration-300 cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
      {error && <div style={{ color: "red" }}>Error: {error}</div>}
      {success && (
        <div style={{ color: "green" }}>Registration successful!</div>
      )}
    </div>
  );
};

export default Registration;
