import { useEffect, useState } from "react";

const useAuthors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch("https://x9q94.sse.codesandbox.io/authors")
      .then((res) => res.json())
      .then((data) => setAuthors(data.authors));
  }, []);
  return authors;
};

export default useAuthors;
