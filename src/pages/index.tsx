/* eslint-disable @next/next/no-img-element */
// React Hooks
import { useState, useEffect } from "react";

// Components and Types
import { Header } from "../components/Header";
import { APIResponse, Dashboard } from "../components/Dashboard";

// Absolute draw
import { RocketDraw } from "../styles/rocketDraw";

// axios
import axios from "axios";
import { api } from "../services/api";

// Definning the properties of the App Page
type AppProps = {
  teachersResult: string;
  studentsResult: string;
};

export default function App({ studentsResult, teachersResult }: AppProps) {
  // creating the state of the students and teachers variable
  const [students, setStudents] = useState<APIResponse[]>([]);
  const [teachers, setTeachers] = useState<APIResponse[]>([]);

  // Parsing JSON result from the Server Side and setting the students and teachers variables
  useEffect(() => {
    setStudents(JSON.parse(studentsResult));
    setTeachers(JSON.parse(teachersResult));
  }, [studentsResult, teachersResult]);

  return (
    <>
      <Header />
      <Dashboard students={students} teachers={teachers} />

      {/* Rocket Draw background */}
      <RocketDraw>
        <div>
          <span>
            <img src="assets/creating.png" alt="character" />
          </span>
        </div>
        <div>
          <img src="assets/rocket.png" alt="rocket" />
        </div>
      </RocketDraw>
    </>
  );
}

// Implementing GetServerSideProps to transofrm the SPA in a Front-end SSR

export async function getServerSideProps() {
  const studentsRequest = await api.get("/students");
  const teachersRequest = await api.get("/teachers");

  const studentsResult = JSON.stringify(studentsRequest.data);
  const teachersResult = JSON.stringify(teachersRequest.data);

  return {
    props: { studentsResult, teachersResult },
  };
}
