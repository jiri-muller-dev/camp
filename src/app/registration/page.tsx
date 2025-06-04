"use client";

import React from "react";
import sendRegistration from "./validation";

const Registration: React.FC = () => {
  const [formState, formAction, isPending] = React.useActionState(
    sendRegistration,
    null
  );
  const [regName, setRegName] = React.useState<string>("");

  return (
    <main className="flex flex-col items-center">
      <div className="font-serif p-6 mt-4 max-w-screen-md w-full bg-white">
        <h2>New registration</h2>
        <p className="my-2 text-base text-left">
          Please remember the requirements
        </p>
        <form action={formAction}>
          <div className="grid sm:grid-cols-[max-content_1fr] gap-y-1 my-4 sm:gap-y-2">
            <label>Name of attendee:</label>
            <input
              type="text"
              name="fullname"
              id="input_name"
              placeholder="full name"
              value={regName}
              onChange={(e) => setRegName(e.target.value)}
            />
            <label>Date of birth:</label>
            <input type="text" name="dateofbirth" placeholder="DD.MM.YYYY" />
            <label>Address:</label>
            <input
              type="text"
              name="address"
              placeholder="street and number, city, postal code"
            />
            <label>National identification number:</label>
            <input type="text" name="nin" placeholder="xxxxxx/xxxx" />
            <label>Health insurance company:</label>
            <input type="text" name="insurance" placeholder="xxx" />
            <label>Health concerns:</label>
            <input type="text" name="healthnotes" />
            <label>Dietary restrictions:</label>
            <input type="text" name="dietnotes" />
            <label>Phone number of attendee:</label>
            <input
              type="text"
              name="phonenumber"
              placeholder="+XXX XXX XXX XXX"
            />
            <label>T-shirt size:</label>
            <input type="text" name="tshirtsize" placeholder="XS/S/M/L" />
          </div>
          <button type="submit" value="Submit" className="btn font-sans">
            Submit
          </button>
          {formState?.success && (
            <div className="mx-2">
              --&gt; {formState.message} for{" "}
              {formState.values.fullname as String}
            </div>
          )}
          {formState?.success === false && (
            <div className="mx-2">--&gt; {formState.message}</div>
          )}
        </form>
      </div>
    </main>
  );
};

export default Registration;
