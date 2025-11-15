export const SkeletonRow = () => {
  return (
    <tr className="animate-pulse">
      {Array(7)
        .fill(0)
        .map((_, i) => (
          <td key={i} className="p-3">
            <div className="h-4 rounded bg-gray-300 dark:bg-gray-700/70"></div>
          </td>
        ))}
    </tr>
  );
};
