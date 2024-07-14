import { ModeToggle } from "@/components/theme-toggle/ModeToggle";
import Link from "next/link";
import Terminal from "../components/terminal/Terminal";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {" "}
      <h1 className="text-2xl ">
        <span className="font-bold text-violet-400">saiiik:$</span>{" "}
        <span className="">type help to start</span> {/* <ModeToggle /> */}
      </h1>
      <p className="text-lg">
        Visit{" "}
        <Link className="text-cyan-300 underline" href="https://example.com">
          Normal Website
        </Link>
      </p>
      <Terminal />
    </div>
  );
}
