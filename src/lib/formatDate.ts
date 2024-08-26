export function formatDate(dateString: string) {
  // Create a new Date object from the database date string
  const date = new Date(dateString);

  // Extract the day, month, and year components
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  // Format the date string in the desired format
  return `${day} ${month} ${year}`;
}
