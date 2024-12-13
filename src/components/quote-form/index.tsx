"use client";

import { useEffect, useRef, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import MyDropdown from "../dropdown";
import DatePickerWithRange from "./date-picker";
import { AppToast } from "@/lib/toast";
import { formatDate } from "@/lib/formatDate";
import { submitForm } from "@/actions/email";
import { getErrorMessage } from "@/lib/getErrorMessage";
import useUIStore from "@/store/uiStore";

const QuoteForm = () => {
  const emptyState = {
    name: "",
    company: "",
    email: "",
    phone: "",
    otherLocation: "",
    numberOfParticipants: "",
    age: "",
    objective: "",
    otherHow: "",
    message: "",
  };
  const emptyDate = {
    from: "",
    to: "",
    // from: new Date(),
    // from: new Date(2022, 0, 20),
    // to: addDays(new Date(2022, 0, 20), 20),
  };
  const [data, setData] = useState(emptyState);
  const [TypeOfEvent, setTypeOfEvent] = useState<"Personal" | "Corporate" | "">(
    ""
  );
  const [Location, setLocation] = useState("");
  const [Loading, setLoading] = useState(false);
  const [Reset, setReset] = useState(false);
  const [date, setDate] = useState(emptyDate);
  const [how, setHow] = useState<
    "Social Media" | "Our Website" | "Advertisement" | "Other" | ""
  >("");

  const noteRef = useRef<HTMLTextAreaElement | null>(null);
  const setOpenModal = useUIStore((state) => state.setOpenModal);
  const adjustHeight = () => {
    if (noteRef.current) {
      noteRef.current.style.height = "auto"; // Reset the height
      noteRef.current.style.height = `${noteRef.current.scrollHeight}px`; // Set the height based on scrollHeight
    }
  };

  useEffect(() => {
    adjustHeight(); // Adjust height on mount
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const {
      age,
      company,
      email,
      message,
      name,
      numberOfParticipants,
      otherHow,
      otherLocation,
      phone,
      objective,
    } = data;

    if (name?.trim()?.length < 5 || name?.trim()?.length > 100)
      return AppToast({
        message: "Your full name should have between 5 and 100 characters.",
      });
    if (objective?.trim()?.length < 5 || objective?.trim()?.length > 100)
      return AppToast({
        message: "Objective/goal should have between 5 and 100 characters.",
      });

    if (company.trim()?.length < 5 || company?.trim()?.length > 100)
      return AppToast({
        message:
          "Company or group name should have between 5 and 100 characters.",
      });

    const testEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      email as string
    );
    if (!testEmail) {
      return AppToast({ message: "Invalid email." });
    }
    if (phone.trim()?.length < 11 || phone?.trim()?.length > 15)
      return AppToast({
        message: "Phone number should have between 11 and 15 characters.",
      });
    if (!TypeOfEvent.trim())
      return AppToast({
        message: "Please select a type of event.",
      });
    if (!/^[1-9]\d{0,2}$/.test(numberOfParticipants.trim()))
      return AppToast({
        message: "Number of participants should be betwee 1 and 1000",
      });

    if (age.trim()?.length < 5 || age?.trim()?.length > 100)
      return AppToast({
        message: "The age range of the participants is required.",
      });

    const startDate = formatDate(date?.from) || null;
    const endDate = formatDate(date?.to) || null;

    if (startDate?.includes("NaN"))
      return AppToast({
        message: "Please choose a proposed date",
      });
    if (!Location || (Location === "Other" && !otherLocation)) {
      return AppToast({
        message: "What location do you have in mind?",
      });
    }
    if (!how || (how === "Other" && !otherHow)) {
      return AppToast({
        message: "We would like to know how you heard about us",
      });
    }
    if (message?.trim().length > 300) {
      return AppToast({
        message: "Message too long, must be less than 300 words",
      });
    }

    try {
      setLoading(true);
      await submitForm({
        age,
        company,
        email,
        message,
        name,
        objective,
        numberOfParticipants,
        eventType: TypeOfEvent,
        startDate,
        endDate: endDate?.includes("NaN") ? "NIL" : endDate,
        how,
        otherHow,
        Location,
        otherLocation,
        phone,
      });

      setOpenModal("");
      setData(emptyState);
      setDate(emptyDate);
      setHow("");
      setLocation("");
      setTypeOfEvent("");
      setReset(true);

      AppToast({
        message:
          "Thank you for reaching out. We will get back to you as soon as we can.",
        duration: 7000,
      });
    } catch (err: any) {
      AppToast({
        message: getErrorMessage(err),
        duration: 15000,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (Reset) {
      timer = setTimeout(() => setReset(false), 100);
    }
    () => {
      return clearTimeout(timer);
    };
  }, [Reset]);

  return (
    <div>
      <p className="font-aleo text-3xl text-center">
        Need a <span className="text-color-orange">Quote ?</span>
      </p>{" "}
      <p className="text-sm text-center mb-5">
        {" "}
        Complete this form to get started or call{" "}
        <a href="tel:+2348032622079">+234 803 262 2079</a>{" "}
      </p>
      <form className="w-full space-y-3 max-w-[500px] mx-auto">
        <Input
          placeholder="Full Name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <Input
          placeholder="Company / Group Name"
          value={data.company}
          onChange={(e) => setData({ ...data, company: e.target.value })}
        />
        <Input
          placeholder="Email"
          value={data.email}
          type="email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <Input
          placeholder="Phone Number"
          value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
        />
        <MyDropdown
          options={["Corporate", "Personal"]}
          triggerLabel="Type of Event"
          onChange={setTypeOfEvent}
          reset={Reset}
        />
        <Input
          placeholder="Number of Participants"
          value={data.numberOfParticipants}
          onChange={(e) =>
            setData({ ...data, numberOfParticipants: e.target.value })
          }
        />
        <Input
          placeholder="Age Range of Participants"
          value={data.age}
          onChange={(e) => setData({ ...data, age: e.target.value })}
        />
        <Input
          placeholder="Event Objective/Goal"
          value={data.objective}
          onChange={(e) => setData({ ...data, objective: e.target.value })}
        />
        <DatePickerWithRange onSelectDate={setDate} date={date} />
        <MyDropdown
          options={[
            "IITA Ibadan",
            "Lakowe Lakes",
            "Our (Client's) Office Space",
            "Other",
          ]}
          triggerLabel="Proposed Location"
          onChange={setLocation}
          reset={Reset}
        />
        {Location === "Other" && (
          <Input
            style={{ border: "2px solid black" }}
            placeholder="Enter the specific location."
            value={data.otherLocation}
            onChange={(e) =>
              setData({ ...data, otherLocation: e.target.value })
            }
          />
        )}
        <MyDropdown
          options={["Social Media", "Our Website", "Advertisement", "Other"]}
          triggerLabel="How did you hear about us?"
          onChange={setHow}
          reset={Reset}
        />
        {how === "Other" && (
          <Input
            style={{ border: "2px solid black" }}
            placeholder="Please be more specific"
            value={data.otherHow}
            onChange={(e) => setData({ ...data, otherHow: e.target.value })}
          />
        )}
        <textarea
          ref={noteRef}
          onInput={adjustHeight}
          className="bg-[#EEF0F4] text-sm px-3 py-2 rounded-[8px] text-black w-full resize-none outline-none border-none placeholder:text-muted-foreground"
          rows={5}
          value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
          placeholder="What more about your program would you like to share with us?"
        />
        <div className="!mt-10 !w-[150px]">
          <Button onClick={handleSubmit} className="w-full" loading={Loading}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;
