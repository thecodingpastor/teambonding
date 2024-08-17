import { ActivitiesData } from "../_components/activities-data";

export const fetchActivity = async (slug: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return ActivitiesData.find((item) => item.link === slug);
};
