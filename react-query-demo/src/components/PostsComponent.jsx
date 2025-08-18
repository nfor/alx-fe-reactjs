// src/components/PostsComponent.jsx
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

export default function PostsComponent() {
  const { data, isLoading, isError, error, isFetching, refetch } = useQuery(
    'posts',
    fetchPosts,
    {
      cacheTime: 1000 * 60 * 5,       // 5 min cache
      staleTime: 1000 * 30,           // 30s fresh
      refetchOnWindowFocus: false,    // don’t auto-refetch on window focus
      keepPreviousData: true,         // keep old data while fetching
    }
  );

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Posts</h2>

      {/* Manual Refetch Button */}
      <button
        onClick={() => refetch()}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Refetch Posts
      </button>

      {isFetching && <p className="text-sm text-gray-500">Refreshing...</p>}

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
