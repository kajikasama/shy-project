import React from "react";
import { imgProject } from "../../../assets";
import "./blogitem.scss";
import { Button } from "../../atoms";
import { useHistory } from "react-router-dom";

const BlogItem = () => {
  const history = useHistory();
  return (
    <div className="blog-item">
      <img className="img-thumb" src={imgProject} alt="post" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author - Date Post</p>
        <p className="body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          modi fugiat numquam aut nemo quos repellat itaque culpa corrupti illo.
          Impedit culpa debitis unde molestias asperiores, voluptatibus omnis.
          Voluptatum, molestias aspernatur. Nesciunt ipsum ut praesentium
          facilis. Facilis nemo eius delectus!
        </p>
        <Button
          title="view detail"
          onClick={() => history.push("/detail-blog")}
        />
      </div>
    </div>
  );
};

export default BlogItem;
