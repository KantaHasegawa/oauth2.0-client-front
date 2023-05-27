import axios, { AxiosResponse } from "axios";

type rootRes = {
  message: string;
};

async function connectServer() {
  try {
    const res = await axios.get<rootRes>("http://localhost:8081");
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const res = await connectServer();
  const resolve = await Promise.resolve(res);
  return (
    <main>
      <h1>Client Server</h1>
      <div>{resolve?.message}</div>
    </main>
  );
}
