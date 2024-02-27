import "../index.css";
import { ClientOnly } from "./[[...slug]]/client";

export const generateStaticParams = () => [{ slug: [""] }];

export default function Page() {
  return <ClientOnly />;
}
