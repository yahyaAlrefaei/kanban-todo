"use client";

import * as React from "react";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@/utils/emotion-cache";

const cache = createEmotionCache();

export function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
