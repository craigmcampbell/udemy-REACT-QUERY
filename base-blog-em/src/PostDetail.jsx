import { useQuery } from "@tanstack/react-query";
import { fetchComments } from "./api";
import "./PostDetail.css";

export function PostDetail({ post, deleteMutation, updateMutation }) {
  // replace with useQuery
  // const data = [];

  const { data, isLoading, isError } = useQuery({
    queryKey: ["comments", post.id],
    queryFn: () => fetchComments(post.id),
  });

  if(isLoading) return <h3>Loading...</h3>

  if(isError) return <h3>Error fetching posts</h3>

  return (
    <>
      <h3 style={{ color: "blue" }}>{post.title}</h3>
      <div>
        <button onClick={() => deleteMutation.mutate(post.id)}>Delete</button>
        {deleteMutation.isSuccess && <p className="success">The post was (not) deleted</p>}
        {deleteMutation.isPending && <p className="loading">Deleting the Post</p>}
        {deleteMutation.isError && <p className="error">Error deleting the Post - {deleteMutation.error.toString()}</p>}
      </div>
      <div>
        <button onClick={() => updateMutation.mutate(post.id)}>Update title</button>
        {updateMutation.isSuccess && <p className="success">The post was updated</p>}
        {updateMutation.isPending && <p className="loading">Updating the Post</p>}
        {updateMutation.isError && <p className="error">Error updating the Post - {deleteMutation.error.toString()}</p>}
      </div>
      <p>{post.body}</p>
      <h4>Comments</h4>
      {data.map((comment) => (
        <li key={comment.id}>
          {comment.email}: {comment.body}
        </li>
      ))}
    </>
  );
}
