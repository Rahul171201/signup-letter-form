import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainBox}>
        <div className={styles.descriptionBox}>
          <h1>Learn to code by watching others!</h1>
          <h3>
            See how experienced developers solve problems in real-time. watching
            scripted tutorials is great, but understanding how developers think
            is invaluable!
          </h3>
        </div>
        <div className={styles.formBox}></div>
      </div>
    </main>
  );
}
