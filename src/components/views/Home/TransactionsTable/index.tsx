import { TableComponent } from "components";
import { useSelector } from "react-redux";
import { RootState } from "store";

export interface ITransactionsTableProps {
  className?: string,
};

export const TransactionsTable: React.FC<ITransactionsTableProps> = (props) => {
  const { transactions } = useSelector((root: RootState) => root.transaction);
  
  const rows = [
    {
      key: '_id',
      value: 'Transaction ID'
    },
    {
      key: 'senderId',
      value: 'From',
    },
    {
      key: 'recieverId',
      value: 'To',
    },
    {
      key: 'amount',
      value: 'Value',
    },
  ];

  return (
    <TableComponent
      {...props}
      rows={rows}
      cols={transactions}
    />
  )
}