import React, { useState, useEffect } from 'react';

const DataFetching = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error caught:', error);
      console.log('The data is not working... sorry');
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">List items from API</h1>
      <ul className="list-disc list-inside">
        {posts.map(post => (
          <li key={post.id} className="mb-2 p-4 border rounded-lg bg-gray-100">
            {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetching;
