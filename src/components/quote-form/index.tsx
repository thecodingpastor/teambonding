"use client";

import { useEffect, useRef, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import MyDropdown from "../dropdown";
import DatePickerWithRange from "./date-picker";
import { DateRange } from "react-day-picker";
import { AppToast } from "@/lib/toast";

const QuoteForm = () => {
  const [data, setData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    otherLocation: "",
    numberOfParticipants: "",
    age: "",
    otherHow: "",
    message: "",
  });
  const [TypeOfEvent, setTypeOfEvent] = useState<"Personal" | "Corporate" | "">(
    ""
  );
  const [Location, setLocation] = useState("");
  //   const [date, setDate] = useState<DateRange | undefined>({
  const [date, setDate] = useState({
    // from: new Date(),
    // from: new Date(2022, 0, 20),
    // to: addDays(new Date(2022, 0, 20), 20),
  });
  const [how, setHow] = useState<
    "Social Media" | "Our Website" | "Advertisement" | "Other" | ""
  >("");

  const noteRef = useRef<HTMLTextAreaElement | null>(null);

  const adjustHeight = () => {
    if (noteRef.current) {
      noteRef.current.style.height = "auto"; // Reset the height
      noteRef.current.style.height = `${noteRef.current.scrollHeight}px`; // Set the height based on scrollHeight
    }
  };

  useEffect(() => {
    adjustHeight(); // Adjust height on mount
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    AppToast({ message: "Message sent successfully" });
    // console.log({
    //   ...data,
    //   location: Location,
    //   eventType: TypeOfEvent,
    //   how,
    //   date,
    // });
  };

  return (
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
      />
      {Location === "Other" && (
        <Input
          style={{ border: "2px solid black" }}
          placeholder="Enter the specific location."
          value={data.otherLocation}
          onChange={(e) => setData({ ...data, otherLocation: e.target.value })}
        />
      )}
      <MyDropdown
        options={["Social Media", "Our Website", "Advertisement", "Other"]}
        triggerLabel="How did you hear about us?"
        onChange={setHow}
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
        <Button onClick={handleSubmit} className="w-full">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default QuoteForm;
