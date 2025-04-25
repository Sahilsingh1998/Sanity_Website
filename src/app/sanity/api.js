import client from "./client";

export const fetchTutorials = async (query) => {
  return await client.fetch(query);
};
