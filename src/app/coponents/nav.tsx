"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Nav = () => {
  const [test, setTest] = useState(false);
  useEffect(() => {
    function checkScroll() {
      if (window.scrollY >= 50) {
        setTest(true);
      } else {
        setTest(false);
      }
    }
    checkScroll();

    window.addEventListener("scroll", checkScroll);
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", checkScroll);
  }, [test]);
  return (
    <div
      className={
        !test
          ? `w-full flex p-4 h-full backdrop-blur-sm`
          : `w-full flex p-4 h-full bg-white`
      }
    >
      <div className="w-full flex flex-row items-center justify-between p-4 h-full">
        <Image
          src={"/logos-14.jpg"}
          width={70}
          height={70}
          alt="Logo"
          priority
          className="rounded-full"
        />
        <Button
          className="bg-[#1F2F62] w-1/2"
          onClick={() => {
            console.log("Button clicked");
            window.scrollTo(0, 570);
          }}
        >
          Send Us query
        </Button>
      </div>
    </div>
  );
};

export default Nav;
