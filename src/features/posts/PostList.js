import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./postSlice";
import Post from "./Post";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

export default function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const isLoading = useSelector((state) => state.posts.isLoading);
  const error = useSelector((state) => state.posts.error);
  const selectedSubreddit = useSelector(
    (state) => state.subreddits.selectedSubreddit
  );

  useEffect(() => {
    if (selectedSubreddit) {
      dispatch(fetchPosts(selectedSubreddit));
    }
  }, [dispatch, selectedSubreddit]);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (isLoading) return <Loading />;
  if (error) {
    const errorMessage = error.toLowerCase().includes('failed to fetch') 
      ? `${error}. Please try refreshing the page.`
      : error;
    return <Error message={errorMessage} />;
  }

  return (
    <div className="post-list">
      {posts.map((post) => (
        <Post
          key={post.id}
          post={{
            id: post.id,
            title: post.title,
            author: post.author,
            ups: post.ups,
            image: post.url,
            num_comments: post.num_comments,
          }}
        />
      ))}
    </div>
  );
}
