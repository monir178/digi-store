import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";

const Banner = () => {
  return (
    <BackgroundBeamsWithCollision>
      <div className="mx-auto py-20 text-center flex flex-col items-center max-w-3xl">
        <h2 className="text-4xl relative sm:text-6xl font-bold text-center text-gray-900 dark:text-white font-sans tracking-tight">
          Your Destination for Premium{" "}
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span className="">Digital Creations</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              <span className="">Digital Creations</span>
            </div>
          </div>
        </h2>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Discover DigiStore, where every digital product is handpicked and
          vetted to meet our uncompromising quality standards. Elevate your
          projects with assets that inspire and perform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6 ">
          <Link href="/products" className={buttonVariants()}>
            Explore Trending
          </Link>
          <Button variant="outline">Our quality promise &rarr;</Button>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Banner;
