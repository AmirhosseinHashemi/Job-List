import { useEffect, useState } from "react";
import Header from "./Header";
import JobList from "./Job";

function App() {
  const [jobsList, setJobsList] = useState([]);
  const [filteredLabels, setFilteredLabels] = useState([]);

  function handleFilteredLabels(newLabel) {
    setFilteredLabels((listOfLabel) => [
      ...new Set([...listOfLabel, newLabel]),
    ]);
  }

  function handleDeleteFilteredLabel(label) {
    if (label.toLowerCase() === "clear") setFilteredLabels([]);
    else setFilteredLabels(filteredLabels.filter((item) => item !== label));
  }

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
      <Header
        filteredLabels={filteredLabels}
        onDeleteFilteredLabel={handleDeleteFilteredLabel}
      />
      <main className="wrapper">
        <JobList
          filteredLabels={filteredLabels}
          onFilteredLabels={handleFilteredLabels}
          jobs={jobsList}
        />
      </main>
    </>
  );
}

export default App;
