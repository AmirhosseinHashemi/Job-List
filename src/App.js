function App() {
  return (
    <>
      <Header />
      <main className="wrapper">
        <Job />
      </main>
    </>
  );
}

function Header() {
  return <header className="header"></header>;
}

function Job() {
  return (
    <div className="job featured">
      <article className="job__content">
        <div className="job__info" aria-label="job information">
          <img
            className="job__logo"
            src="/images/photosnap.svg"
            alt="job logo"
          ></img>

          <div className="job__title">
            <h2 className="job__company">Photosnap</h2>
            <span className="job__badge job__badge--new">NEW!</span>
            <span className="job__badge job__badge--featured">FEATURE</span>
          </div>

          <p className="job__position">Senior Frontend Developer</p>

          <div className="job__bottom">
            <p className="job__posted">1d ago</p>
            <p className="job__contract">Full Time</p>
            <p className="job__location">USA Only</p>
          </div>
        </div>

        <div className="line"></div>

        <div className="job__btns">
          <button className="job__btn" type="button">
            Frontend
          </button>
        </div>
      </article>
    </div>
  );
}

export default App;
