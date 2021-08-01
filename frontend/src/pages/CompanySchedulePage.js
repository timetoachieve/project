import React from 'react';
import { TableView } from '../components';
import { rows, columns } from '../data';

export function CompanyScheduleScreen () {
  return <div>
    <TableView columns={columns} rows={rows} />
  </div>;
}