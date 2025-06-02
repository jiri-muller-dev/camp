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
    <main className="flex flex-col items-center">
      <div className="font-mono p-6 mt-4 max-w-screen-md w-full bg-white">
        <h2>New registration</h2>
        <p className="my-2 text-base">Please remember the requirements</p>
        <form onSubmit={handleSubmit}>
          <div className="grid sm:grid-cols-2 gap-y-1">
            <label>Name of attendee:</label>
            <input
              type="text"
              name="fullname"
              id="input_name"
              placeholder="Enter name of attendee"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={regName}
              onChange={(e) => setRegName(e.target.value)}
            />
            <label>Date of birth:</label>
            <input
              type="text"
              className="bg-teal-100 focus:bg-green-100 border-b-2 border-black px-1"
            />
            <label>Address:</label>
            <input type="text" />
            <label>National identification number:</label>
            <input type="text" />
            <label>Health insurance company:</label>
            <input type="text" />
            <label>Health concerns:</label>
            <input type="text" />
            <label>Dietary restrictions:</label>
            <input type="text" />
            <label>Phone number of attendee:</label>
            <input type="text" />
            <label>T-shirt size:</label>
            <input type="text" />
          </div>
          <button type="submit" value="Submit" className="btn">
            Submit
          </button>
        </form>
        {error && <div style={{ color: "red" }}>Error: {error}</div>}
        {success && (
          <div style={{ color: "green" }}>Registration successful!</div>
        )}
      </div>
    </main>
  );
};

export default Registration;
