"use server";

import SendEmail from "@/lib/sendEmail";
import { getErrorMessage } from "@/lib/getErrorMessage";

export const submitForm = async (data: any) => {
  const {
    age,
    company,
    email,
    message,
    name,
    startDate,
    endDate,
    numberOfParticipants,
    otherHow,
    objective,
    otherLocation,
    eventType,
    Location,
    phone,
    how,
  } = data;

  const testEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email as string
  );
  if (name?.trim()?.length < 5 || name?.trim()?.length > 100)
    throw new Error("Your full name should have between 5 and 100 characters.");
  if (company.trim()?.length < 5 || company?.trim()?.length > 100)
    throw new Error(
      "Company or group name should have between 5 and 100 characters."
    );

  if (!testEmail) {
    throw new Error("Invalid email.");
  }

  if (phone.trim()?.length < 11 || phone?.trim()?.length > 15)
    throw new Error("Phone number should have between 11 and 15 characters.");
  if (!eventType.trim()) throw new Error("Please select a type of event.");
  if (!/^[1-9]\d{0,2}$/.test(numberOfParticipants.trim()))
    throw new Error("Number of participants should be betwee 1 and 1000");

  if (age.trim()?.length < 5 || age?.trim()?.length > 100)
    throw new Error("The age range of the participants is required.");

  if (!startDate) throw new Error("Please choose a proposed date");
  if (Location === "Other" && !otherLocation) {
    throw new Error("What location do you have in mind?");
  }
  if (how === "Other" && !otherHow) {
    throw new Error("We would like to know how you heard about us");
  }
  if (message?.trim()?.length > 300) {
    throw new Error("Message too long, must be less than 300 words");
  }

  try {
    const res = await SendEmail({
      replyTo: email as string,
      html: `Here is the information from a new enquiry. <br /> <br /> <br />
      <p><b>Name:</b> ${name}</p>
      <p><b>Company Name:</b> ${company}</p>
      <p><b>Age Range:</b> ${age}</p>
      <p><b>Objective/Goal:</b> ${objective}</p>
      <p><b>Number Of Participants:</b> ${numberOfParticipants}</p>
      <p><b>Email Address:</b> ${email}</p>
      <p><b>Phone Number:</b> ${phone}</p>
      <p><b>Proposed Start Date:</b> ${startDate || "NIL"}</p>
      <p><b>Proposed End Date:</b> ${endDate || "NIL"}</p>
      <p><b>Event Type:</b> ${eventType}</p>
      <p><b>Proposed Location:</b> ${Location || otherLocation}</p>
      <p><b>How they heard about us:</b> ${how || otherHow}</p>
      <p><b>Message:</b> ${message || "NIL"}</p>
      `,
    });

    return res;
  } catch (err: any) {
    throw new Error(getErrorMessage(err) || "Something went wrong");
  }
};
