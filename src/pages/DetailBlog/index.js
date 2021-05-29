import React from "react";
import "./detail-blog.scss";
import { imgProject } from "../../assets";
import { Link } from "../../components/atoms";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
  const history = useHistory();
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={imgProject} />
      <p className="blog-title">Title Blog</p>
      <p className="blog-author">Author - Date Post</p>
      <p className="blog-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quidem,
        quos aut maxime quam, at minus, laboriosam vel dignissimos inventore
        eveniet qui?olor hic recusandae, officiis architecto iure labore.
      </p>
      <Link title="Kembali ke home" onClick={() => history.push("/")} />
    </div>
  );
};

export default CreateBlog;
