import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components";
import queryString from "query-string";
import { getHerosByName } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const heroes = getHerosByName(q);

  const showSearch= (q.length ===0)
  const showError=(q.length >0 && heroes.length ===0)

  const { searchtext, onInputChange } = useForm({
    searchtext: q,
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    // if (searchtext.trim().length <= 1) return;

    navigate(`?q=${searchtext}`);
  };
  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="search a hero"
              className="form-control"
              name="searchtext"
              autoComplete="off"
              value={searchtext}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results: </h4>
          <hr />

          {/* {q == "" ? (
            <div className=" alert alert-primary">search a Hero</div>
          ) : (
            heroes.length === 0 && (
              <div className=" alert alert-danger">
                No hero with <b>{q}</b>
              </div>
            )
          )} */}

          <div className=" alert alert-primary animate__animated animate__fadeIn" style={{ display: showSearch ? '':'none' }}>
            search a Hero
          </div>

          <div className=" alert alert-danger animate__animated animate__fadeIn" style={{display: showError ? '' : 'none'}}>
            No hero with <b>{q}</b>
          </div>

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
