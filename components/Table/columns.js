export const tableColumn = [
  {
    Header: 'ID',
    accessor: 'id',
    Cell: (val) => {
      const { id } = val.row.original;
      return <div style={{ width: 120 }}>{id}</div>;
    },
  },
  { Header: 'Name', accessor: 'name' },
  { Header: 'District', accessor: 'district' },
];
