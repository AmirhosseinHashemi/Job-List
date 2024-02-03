import { useEffect, useState } from "react";
import Header from "./Header";
import JobList from "./Job";

function App() {
  const [jobsList, setJobsList] = useState([]);

  useEffect(function () {
    async function fetchJobs() {
      const res = await fetch("./data.json");
      const data = await res.json();

      setJobsList(data);
    }

    fetchJobs();
  }, []);

  return (
    <>
      <Header />
      <main className="wrapper">
        <JobList jobs={jobsList} />
      </main>
    </>
  );
}

export default App;
