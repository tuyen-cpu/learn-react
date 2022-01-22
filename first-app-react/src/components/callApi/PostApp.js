import React, { useEffect, useState, useCallback } from "react";
import Pagination from "./Pagination";
import PostList from "./PostList";
import queryString from "query-string";
function PostApp() {
  console.log("render - Post App");
  const [posts, setPosts] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 11,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paraString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paraString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const { data, pagination } = responseJSON;
        setPosts(data);
        setPagination(pagination);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchPostList();
  }, [filters]);
  const handleChangePage = useCallback((newPage) => {
    setFilters({
      ...filters,
      _page: newPage,
    });
  }, []);
  return (
    <div>
      <PostList posts={posts} />
      <Pagination pagination={pagination} onChangePage={handleChangePage} />
    </div>
  );
}
export default PostApp;
