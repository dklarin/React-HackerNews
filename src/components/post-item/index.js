import React from "react";
import distanceInWords from "date-fns/formatDistance";

const PostItem = ({ post, refetch }) => {
  return (
    <article className="post">
      <section className="upvote">
        <button>1</button>
      </section>
      <section className="body">
        <div className="title">
          <a href={post.url}>{post.description}</a>
        </div>
        <div className="meta">
          <span>
            {post.votes} vote{post.votes > 1 ? "s" : ""}
          </span>

          <span>
            {distanceInWords(new Date(post.createdAt), new Date())} ago
          </span>
        </div>
      </section>
    </article>
  );
};

export default PostItem;
