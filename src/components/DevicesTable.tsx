import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
  flexRender
} from '@tanstack/react-table';
import { Device } from '../domain/Device.ts';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';

import { RowActions } from './RowActions.tsx';
import { useDevices } from '../service/useDevices.ts';

const columnHelper = createColumnHelper<Device>();

const columns = [
  columnHelper.accessor('name', {
    header: () => 'Name',
  }),
  columnHelper.accessor('type', {
    header: () => 'Type',
  }),
  columnHelper.accessor('owner', {
    header: () => 'Owner',
  }),
  columnHelper.accessor('batteryStatus', {
    header: () => 'Battery (%)',
  }),
  columnHelper.display({
    id: 'actions',
    cell: (props) => <RowActions {...props} />,
  }),
]


export const DevicesTable = () => {
  const { devices } = useDevices();
  const table = useReactTable({
    data: devices,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <TableCell key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map(row => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map(cell => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
};
