import { fetchTasks } from "@/lib/api";
import Home from "@/modules/Home";

const Page = async () => {
  const res = await fetchTasks();
  return <Home data={res ?? []} />;
};
export default Page;
