type Props = {
  children: React.ReactNode;
};

export const ThCell = ({ children }: Props) => (
  <th className="p-2 border-b border-gray-300 dark:border-gray-700">
    {children}
  </th>
);

export const TdCell = ({ children }: Props) => (
  <td className="p-2 border-b border-gray-300 dark:border-gray-700">
    {children}
  </td>
);
