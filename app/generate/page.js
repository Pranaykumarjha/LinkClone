// app/generate/page.js
import dynamic from "next/dynamic";

// Force this page to render only on client
const GenerateClient = dynamic(() => import("./GenerateClient"), { ssr: false });

export default function Page() {
  return <GenerateClient />;
}
