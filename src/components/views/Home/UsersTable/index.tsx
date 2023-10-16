import { TableComponent } from 'components';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

export interface IUsersTableProps {
  className?: string,
};

export const UsersTable: React.FC<IUsersTableProps> = (props) => {
  const { users } = useSelector((root: RootState) => root.user);
  const rows = [
    {
      key: '_id',
      value: 'User ID'
    },
    {
      key: 'balance',
      value: 'Balance',
    },
  ];

  return (
    <TableComponent
      {...props}
      rows={rows}
      cols={users}
    />
  )
}