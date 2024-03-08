import { add } from "@mono/sample-lib";
import Image from "next/image";

export default function Home() {
  return <h2>{add.toString()}</h2>;
}
