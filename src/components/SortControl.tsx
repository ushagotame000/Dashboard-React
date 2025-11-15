import React from "react";

interface SortControlProps {
  sortKey: "name" | "email" | "username";
  onSortKeyChange: (key: "name" | "email" | "username") => void;
}

const SortControl: React.FC<SortControlProps> = ({ sortKey, onSortKeyChange }) => {
  return (
    <div>
      <select
        value={sortKey}
        onChange={(e) => onSortKeyChange(e.target.value as any)}
        className="border p-2 rounded bg-white text-gray-900 border-gray-300
        dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700"
      >
        <option value="name">Sort by Name</option>
        <option value="email">Sort by Email</option>
        <option value="username">Sort by Username</option>
      </select>
    </div>
  );
};

export default SortControl;
