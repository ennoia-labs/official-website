import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="container flex min-h-screen flex-col p-24">
      <div className="left-col">
      <h1 className="text-6xl">Innovating Ideas, <br /> Crafting Solutions</h1>
      <Button asChild size="lg" className="mt-8">
        <Link href="/contact">Start Creating</Link>
      </Button>
      </div>
    </main>
  );
}
