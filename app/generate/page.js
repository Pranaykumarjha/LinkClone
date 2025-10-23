import { Suspense } from "react";
import dynamic from "next/dynamic";

// Dynamically import GenerateClient and disable SSR
const GenerateClient = dynamic(() => import("./GenerateClient"), { ssr: false });

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center mt-32">Loading...</div>}>
      <GenerateClient />
    </Suspense>
  );
}
