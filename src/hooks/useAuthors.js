import { useEffect, useState } from "react";

const useAuthors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch("https://obscure-fjord-59024.herokuapp.com/authors")
      .then((res) => res.json())
      .then((data) => setAuthors(data.authors));
  }, []);
  return authors;
};

export default useAuthors;
