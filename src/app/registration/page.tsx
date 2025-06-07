"use client";

import React from "react";
import sendRegistration from "./validation";
import FormField from "../components/FormField";

const Registration: React.FC = () => {
  const [formState, formAction] = React.useActionState(sendRegistration, null);

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
              <li>Participant must be within 12 and 17 years of age.</li>
              <li>
                Participant must be able physically and mentally able to
                participate.
              </li>
              <li>
                After submitting this registration, the camp fee must be paid
                within a month.
              </li>
            </ul>
            <form action={formAction}>
              <div className="grid sm:grid-cols-[max-content_1fr] gap-y-1 mb-4 sm:gap-y-2">
                <h3 className="sm:col-span-2">Participant:</h3>
                <FormField
                  label="Full name"
                  type="text"
                  fieldName="fullname"
                  placeholder="full name"
                  defaultValue={formState?.values.fullname}
                  required
                />
                <FormField
                  label="Date of birth"
                  type="date"
                  fieldName="dateofbirth"
                  placeholder="DD.MM.YYYY"
                  defaultValue={formState?.values.dateofbirth}
                  required
                />
                <h3 className="sm:col-span-2">Legal guardian:</h3>
                <FormField
                  label="Contact email"
                  type="email"
                  fieldName="email"
                  placeholder="e-mail address"
                  defaultValue={formState?.values.email}
                  required
                />
                <FormField
                  label="Phone number"
                  type="tel"
                  fieldName="phonenumber"
                  placeholder="+420 XXX XXX XXX"
                  defaultValue={formState?.values.phonenumber}
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
