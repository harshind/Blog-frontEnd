import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import useAuthors from "../hooks/useAuthors";
//import useAddPosts from "../hooks/useaddPosts";
const AddPost = () => {
  const [Title, setNewTitle] = useState("");

  const onInputChange = (event) => {
    setNewTitle(event.target.value);
  };

  const [newAuthor, setNewAuthor] = useState("");

  const selectAuthor = (event) => {
    setNewAuthor(event.target.value);
  };

  const [newContent, setNewContent] = useState("");

  const onContentChange = (event) => {
    setNewContent(event.target.value);
  };

  const [route, setRoute] = useState("/");
  const authors = useAuthors();
  const [posts, setPosts] = useState([]);
  const [load, setLoad] = useState(false);
  //addPosts(Title, newAuthor, newContent);
  const submitHandle = (event) => {
    event.preventDefault();
    if (newAuthor === "") {
      alert("Please select an Author");
    } else if (newContent.length < 200) {
      alert("Minimum 200 words required");
    } else if (Title === "") {
      alert("Please Provide a title");
    } else {
      const postObj = {
        title: Title,
        content: newContent,
        author: newAuthor
      };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...postObj
        })
      };
      fetch("https://obscure-fjord-59024.herokuapp.com/posts/", requestOptions)
        .then((response) => {
          response.json();
          setLoad(true);
        })
        .then((data) => data);
    }
  };
  if (load) {
    return <Redirect to="/" />;
  }
  return (
    <Form>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input
          type="text"
          name="title"
          value={Title}
          id="title"
          placeholder="Title of your post"
          onChange={onInputChange}
        />
      </FormGroup>

      <FormGroup>
        <Label for="select-author">Authors</Label>

        <Input
          type="select"
          name="author"
          id="select-author"
          onChange={selectAuthor}
        >
          <option key="select" value="">
            select Author
          </option>
          {authors.map((author, index) => {
            return (
              <option key={author._id} value={author._id}>
                {author.name}
              </option>
            );
          })}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="content">Content</Label>
        <Input
          type="textarea"
          name="content"
          onChange={onContentChange}
          value={newContent}
          id="content"
        />
      </FormGroup>
      <Button onClick={submitHandle}>Submit</Button>
    </Form>
  );
};

export default AddPost;
