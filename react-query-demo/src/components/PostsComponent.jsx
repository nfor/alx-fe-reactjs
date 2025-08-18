// src/components/PostsComponent.jsx
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

export default function PostsComponent() {
  const { data, isLoading, isError, error } = useQuery('posts', fetchPosts);

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Posts</h2>
      <ul className="space-y-2">
        {data.slice(0, 10).map(post => (
          <li key={post.id} className="border p-3 rounded-md shadow">
            <h3 className="font-semibold">{post.title}</h3>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
