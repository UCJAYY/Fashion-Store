
import React from "react";

import BlogData from "../../data/blog.json";

import BlogItem from "./BlogItem";


const Blog = () => {
  return (
    <>
      <div className="rainbow-blog-area rainbow-section-gap bg-color-1">
        <div className="container">
          <div className="row row--30">
            <div className="col-lg-12">
              <BlogItem blog={BlogData && BlogData.blog} />
            </div>
            
          </div>
        </div>
      </div>

    </>
  );
};

export default Blog;
