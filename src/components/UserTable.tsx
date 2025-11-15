import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import SortControl from "./SortControl";
import { useDebounce } from "../hooks/useDebounce";
import type { AppDispatch, RootState } from "@app/store";
import { fetchUsers } from "@features/users/usersSlice";
import { TdCell, ThCell } from "./TableCell";
import { SkeletonRow } from "./SkeletonRow";

const USERS_PER_PAGE = 10;

const UserTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, error } = useSelector((state: RootState) => state.users);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState<"name" | "email" | "username">("name");

  const debouncedPage = useDebounce(currentPage, 300);
  const debouncedSearch = useDebounce(searchTerm, 300);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);


  const filteredUsers = users.filter((user) =>
    `${user.name} ${user.username} ${user.email}  ${user.company}  ${user.website}  `
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase())
  );

  // Sort
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    const fieldA = a[sortKey].toLowerCase();
    const fieldB = b[sortKey].toLowerCase();
  return fieldA.localeCompare(fieldB);
  });


  const totalPages = Math.ceil(sortedUsers.length / USERS_PER_PAGE);

  const paginatedUsers = sortedUsers.slice(
    (debouncedPage - 1) * USERS_PER_PAGE,
    debouncedPage * USERS_PER_PAGE
  );

  return (
    <div className="p-4 space-y-4">
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        
        <SortControl
          sortKey={sortKey}
          onSortKeyChange={setSortKey}
        />
      </div>

      {/* Tablef */}
      <div className="w-full overflow-x-auto ">
      <table className="min-w-[900px] w-full border border-gray-300 dark:border-gray-700 rounded-md">
        <thead className="bg-gray-200 dark:bg-gray-800">
          <tr>
            <ThCell>ID</ThCell>
            <ThCell>Name</ThCell>
            <ThCell>Username</ThCell>
            <ThCell>Email</ThCell>
            <ThCell>Phone</ThCell>
            <ThCell>Website</ThCell>
            <ThCell>Company</ThCell>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            Array(10).fill(0).map((_, i) => <SkeletonRow key={i} />)
          ) : paginatedUsers.length > 0 ? (
            paginatedUsers.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <TdCell>{user.id}</TdCell>
                <TdCell>{user.name}</TdCell>
                <TdCell>{user.username}</TdCell>
                <TdCell>{user.email}</TdCell>
                <TdCell>{user.phone}</TdCell>
                <TdCell>{user.website}</TdCell>
                <TdCell>{user.company.name}</TdCell>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={7}
                className="text-center py-4 text-gray-500 dark:text-gray-300"
              >
                No search results found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
</div>
      {/* Pagination */}
      {!loading && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default UserTable;
