"use client";

import { useCallback, useEffect, useRef } from "react";

interface TextAreaProps {
  // textareaRef: React.MutableRefObject<HTMLTextAreaElement | null>;
  value: any;
  setValue: any;
}
const TextArea: React.FC<TextAreaProps> = ({
  // textareaRef,
  value,
  setValue,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const adjustHeight = useCallback(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset the height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set the height based on scrollHeight
    }
  }, [textareaRef]);

  useEffect(() => {
    adjustHeight(); // Adjust height on mount
  }, [adjustHeight]);

  return (
    <div className="w-full">
      <textarea
        ref={textareaRef}
        onInput={adjustHeight}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        // onChange={setValue}
        className="bg-[#EEF0F4] border-none outline-none resize-none w-full block rounded-md p-3 overflow-hidden text-sm placeholder:text-sm"
        rows={5} // Set an initial number of rows
        placeholder="Brief description, not more than 500 characters."
      />
    </div>
  );
};

export default TextArea;
