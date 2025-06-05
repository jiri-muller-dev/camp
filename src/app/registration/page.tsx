"use client";

import React from "react";
import sendRegistration from "./validation";

interface FormData {
  [key: string]: string;
}

const Registration: React.FC = () => {
  const [formState, formAction, isPending] = React.useActionState(
    sendRegistration,
    null
  );
  const [formData, setFormData] = React.useState<FormData>({
    fullname: "",
    dateofbirth: "",
    email: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <main className="flex flex-col items-center">
      <div className="font-serif p-6 mt-4 max-w-screen-md w-full bg-white">
        <h2>New registration</h2>
        {formState?.success !== true && (
          <div>
            <p className="mt-2 text-base text-left">
              Please pay attention to the following requirements:
            </p>
            <ul className="bg-white/0 text-base p-0 mb-4">
              <li>Attendee must be within 12 and 17 years of age.</li>
              <li>
                Attendee must be able physically and mentally able to
                participate.
              </li>
              <li>
                After submitting this registration, the camp fee must be paid
                within a month.
              </li>
            </ul>
            <form action={formAction}>
              <h3>Attendee:</h3>
              <div className="grid sm:grid-cols-[max-content_1fr] gap-y-1 mb-4 sm:gap-y-2">
                <label>Full name:</label>
                <input
                  type="text"
                  name="fullname"
                  placeholder="full name"
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                />
                <label>Date of birth:</label>
                <input
                  type="date"
                  name="dateofbirth"
                  placeholder="DD.MM.YYYY"
                  value={formData.dateofbirth}
                  onChange={handleChange}
                  required
                />
                <label>Contact email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="e-mail address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex items-center">
                <button type="submit" value="Submit" className="btn font-sans">
                  Submit
                </button>
                {formState?.success === false && (
                  <div className="mx-2 text-red-700">{formState.message}</div>
                )}
              </div>
            </form>
          </div>
        )}
        {formState?.success && (
          <div>
            <p className="mt-2 text-base text-left">
              Your registration was successfuly sent to us! <br /> It is now
              pending and we will send you email to{" "}
              <strong>{formState.values.email}</strong> once it is accepted.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Registration;
