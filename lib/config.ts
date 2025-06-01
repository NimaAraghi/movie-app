const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

export const configs: RequestInit = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
};
