import Hero from "@/components/hero";
import NavBar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="container flex min-h-screen flex-col p-24">
        <Hero />
      </main>
    </>
  );
}
