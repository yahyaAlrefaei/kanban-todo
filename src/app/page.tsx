import { BASE_URL } from "@/lib/api";
import Home from "@/modules/Home";

const Page = async () => {
  const res = await fetch(`${BASE_URL}/tasks`, {
    next: {
      tags: ["tasks"],
    },
  });
  const data = await res.json();

  return <Home data={data ?? []} />;
};
export default Page;
