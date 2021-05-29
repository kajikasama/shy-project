import React from "react";
import { Input, Button, Upload, TextArea, Gap, Link } from "../../components";
import "./create-blog.scss";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
  const history = useHistory();
  return (
    <div className="blog-post">
      <Link title="kembali ke menu" onClick={() => history.push("/")} />
      <p className="title-blog">Create Blog Page</p>
      <Input label="Post Title" />
      <p>Upload Image</p>
      <Upload />
      <TextArea />
      <Gap height={20} />
      <div className="button-action">
        <Button title="Save" />
      </div>
      <Gap height={100} />
    </div>
  );
};

export default CreateBlog;
