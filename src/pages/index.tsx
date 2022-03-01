import React from "react";
import { Header } from "../components/Header";
import { Dashboard } from "../components/Dashboard";

import Image from "next/image";

import { RocketDraw } from "../styles/rocketDraw";
import { Filter } from "../components/Filter";

export default function App() {
  return (
    <>
      <Header />
      <Dashboard />
      {/* <Filter /> */}

      {/* Rocket Draw background */}
      <RocketDraw>
        <div>
          <span>
            <Image src="assets/others/image01.png" alt="character" />
          </span>
        </div>
        <div>
          <Image src="assets/dashboard.png" alt="rocket" />
        </div>
      </RocketDraw>
    </>
  );
}
