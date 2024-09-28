"use client";

import { Card } from "@mantine/core";
import Image from "next/image";
import NavbarSearch from "@/components/NavSearch";
import { useEffect, useState } from "react";

import { redirect } from "next/navigation";

export default function Home() {
  const [isAuth, setisAuth] = useState(false);
  useEffect(() => {
    if (!isAuth) {
      redirect("/Discussion");
    }
  }, []);
  return (
    <main>
      <NavbarSearch />
    </main>
  );
}
