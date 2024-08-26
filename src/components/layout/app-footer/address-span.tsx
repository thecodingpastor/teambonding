"use client";

import { useRouter } from "next/navigation";

const AddressSpan = () => {
  const { push } = useRouter();
  return <span onDoubleClick={() => push("/login")}>Address: </span>;
};

export default AddressSpan;
