import React from "react";
import { createClient } from "@/prismicio";

import Navbar from "@/components/Header/Navbar";

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <header className="z-50 mx-auto md:fixed w-full md:top-4 md:px-40">
      <Navbar settings={settings} />
    </header>
  );
}