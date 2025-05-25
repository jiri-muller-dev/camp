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
      <div className="font-mono p-6 max-w-screen-md">
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
            <button type="submit" value="Submit" className="btn">
              Submit
            </button>
          </div>
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
