"use server";

import { revalidateTag } from "next/cache";

export async function revalidateTasks(tag: string) {
  // Mutate data
  revalidateTag(tag);
}
