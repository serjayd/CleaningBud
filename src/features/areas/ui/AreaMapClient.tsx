"use client";

import dynamic from "next/dynamic";

const AreaMap = dynamic(() => import("./AreaMap"), {
  ssr: false,
  loading: () => (
    <div className="h-125 w-full animate-pulse rounded-3xl bg-muted" />
  ),
});

export default AreaMap;
