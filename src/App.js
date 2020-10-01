import React, { useState, useEffect, Fragment } from "react";
import Form from "./components/Form";
import Gallery from "./components/Gallery";
import Pagination from "./components/Pagination";
import Spinner from "./components/Spinner";
import Error from "./components/Error";

function App() {
  const [search, setSearch] = useState("watermelon");
  const [images, setImages] = useState([]);
  const [pages, setPages] = useState(0);
  const [actualPage, setActualPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  var attempsToError = 5;

  const consultApi = async () => {
    const imagesPerPage = 30;
    const query = search.replace(/\s/g, "+");
    const key = "18401140-3aa5ecdac92d79c76fb78db0b";
    const url = `https://pixabay.com/api/?key=${key}&q=${query}&image_type=photo&per_page=${imagesPerPage}&page=${actualPage}`;

    try {
      const request = await fetch(url);
      const response = await request.json();

      setError(false);
      setImages(response.hits);

      const totalPages = Math.ceil(response.totalHits / imagesPerPage);
      setPages(totalPages);
    } catch (e) {
      if (attempsToError === 0) {
        setSearch("");
        return setError(true);
      }

      attempsToError--;
      consultApi();
    }
  };

  useEffect(() => {
    setIsLoading(true);
    setActualPage(1);
    consultApi();
    if (!isLoading) {
      const gallery = document.querySelector(".gallery");
      gallery.scrollIntoView({ behavior: "smooth" });
    }
    setTimeout(()=>{setIsLoading(false);},2000)
  }, [search]);

  useEffect(() => {
    consultApi();
    if (!isLoading) {
      const gallery = document.querySelector(".gallery");
      gallery.scrollIntoView({ behavior: "smooth" });
    }
  }, [actualPage]);

  return (
    <div className="container  border-darken-1">
      <h1 className="brand-logo center-align">
        <span className="green-text lighten-1">Wather</span>
        <span className="red-text lighten-1">Melon</span>
      </h1>
      <Form setSearch={setSearch} />

      {error ? (
        <Error message={"Connection problem,please check your Internet"} />
      ) : null}

      {isLoading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Gallery images={images} error={error} />
          <Pagination
            pages={pages}
            actualPage={actualPage}
            setActualPage={setActualPage}
            error={error}
          />
        </Fragment>
      )}
    </div>
  );
}

export default App;
