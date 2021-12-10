import React from "react";

export default function App() {
  const title = "Blog Post";
  const body = "This is my Blog";
  const comments = [
    { id: 1, text: "comment one" },
    { id: 2, text: "comment two" },
    { id: 3, text: "comment three" },
  ];
  const showComments = false;

  const commentBlock = () => (
    <div className="comments">
      <h3>Comments {comments.length}</h3>

      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
  return (
    <>
      <h1>Hello</h1>
      <h2>{title}</h2>
      <p>{body}</p>

      {showComments && commentBlock}
    </>
  );
}
