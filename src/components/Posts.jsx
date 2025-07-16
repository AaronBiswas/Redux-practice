import React from "react";
import { useGetPostsQuery } from "../posts/postsApiSlice";

const Posts = () => {
  const query = useGetPostsQuery({});

  if(query.isLoading){
    return (
        <div>Loading...</div>
    )
  }

   if(query.isError){
    return (
        <div>Error...</div>
    )
  }


  return (
    <div>
      <ul>
        {query.data?.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Posts;
