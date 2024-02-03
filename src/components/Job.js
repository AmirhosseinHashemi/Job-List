function JobList({ jobs, onFilteredLabels, filteredLabels }) {
  return (
    <ul>
      {jobs.map((job) => (
        <Job
          onFilteredLabels={onFilteredLabels}
          filteredLabels={filteredLabels}
          jobData={job}
          key={job.id}
        />
      ))}
    </ul>
  );
}

function Job({ jobData, onFilteredLabels, filteredLabels }) {
  const { role, level, languages, tools } = jobData;
  const jobLabels = [role, level, ...languages, ...tools];
  let isFiltered = filteredLabels.every((label) => jobLabels.includes(label));

  if (!isFiltered) return null;

  return (
    <li className={jobData.featured ? "job featured" : "job"}>
      <article className="job__content">
        <div className="job__info" aria-label="job information">
          <img className="job__logo" src={jobData.logo} alt="job logo"></img>

          <div className="job__title">
            <h2 className="job__company">{jobData.company}</h2>
            {jobData.new && (
              <span className="job__badge job__badge--new">NEW!</span>
            )}
            {jobData.featured && (
              <span className="job__badge job__badge--featured">FEATURE</span>
            )}
          </div>

          <p className="job__position">{jobData.position}</p>

          <div className="job__bottom">
            <p className="job__posted">{jobData.postedAt}</p>
            <p className="job__contract">{jobData.contract}</p>
            <p className="job__location">{jobData.location}</p>
          </div>
        </div>

        <div className="line"></div>

        <div className="job__btns">
          {jobLabels.map((label) => (
            <Label onFilteredLabels={onFilteredLabels} key={label}>
              {label}
            </Label>
          ))}
        </div>
      </article>
    </li>
  );
}

function Label({ children, onFilteredLabels }) {
  return (
    <button
      onClick={(e) => onFilteredLabels(e.target.innerText)}
      className="job__btn"
      type="button"
    >
      {children}
    </button>
  );
}

export default JobList;
