"use client";

import { useState, useEffect } from "react";

export default function Posts() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await res.json();
      // console.log(data);
      setPosts(data);
    }
    fetchPosts();
  }, []);

  if (!posts) return <div>Loading...</div>;

  return (
    <ul className="flex flex-col">
      <p> ID: {posts.id}</p>
      <h2> TItle: {posts.title}</h2>
    </ul>
  );
}
