import { tableColumn } from '@Component/Table/columns';
import { demoTableData } from '@Component/Table/constant';
import Table from '@Component/Table/Table';
import React from 'react';

function table() {
  return (
    <div style={{ margin: '2% 5%' }}>
      table
      <div style={{ marginTop: '4%' }}>
        <Table data={demoTableData} columns={tableColumn} />
      </div>
    </div>
  );
}

export default table;
