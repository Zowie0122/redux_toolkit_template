import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,
  addPost,
  allPostsSelector,
  postLoading
} from "../store/reducers/posts";

export default function Fruits() {
  const dispatch = useDispatch();

  const allPosts = useSelector(allPostsSelector);
  const loading = useSelector(postLoading);

  const [newPost, setNewPost] = useState("");
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h1>Hello I am TODOs Component and I am using thunk</h1>
      <p>{loading && "Loading"}</p>
      <div>
        <p>The current drinks we have:</p>
        <ul>
          {allPosts.map((post, i) => (
            <li key={i}>{post.title}</li>
          ))}
        </ul>
        <label>
          Post:
          <input
            type="text"
            name="posts"
            value={newPost}
            onChange={(e) => {
              setNewPost(e.target.value);
            }}
          />
        </label>
        <button
          onClick={() =>
            dispatch(
              addPost({
                id: Math.random(100),
                title: newPost
              })
            )
          }
        >
          Add
        </button>
      </div>
    </div>
  );
}
