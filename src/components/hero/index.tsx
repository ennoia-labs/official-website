'use client';

import Link from "next/link";
import { Button } from "../ui/button";

export default function Hero(){
    return(
        <section className="mt-12">
            <div className="left-col">
        <h1 className="text-6xl">Innovating Ideas, <br /> Crafting Solutions</h1>
        <Button asChild size="lg" className="mt-8">
          <Link href="/contact">Start Creating</Link>
        </Button>
        </div>
        </section>
    )
}