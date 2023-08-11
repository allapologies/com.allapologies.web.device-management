import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
  flexRender,
  SortingState, getSortedRowModel,
} from '@tanstack/react-table';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { useState } from 'react';

import { Device } from '../domain/Device.ts';
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

const initialSorting: SortingState = [
  {
    id: 'name',
    desc: false,
  },
];

export const DevicesTable = () => {
  const { devices } = useDevices();
  const [sorting, setSorting] = useState(initialSorting)

  const table = useReactTable({
    data: devices,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
  });

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <TableCell key={header.id}>
                  {header.isPlaceholder ? null : (
                    <div
                      {...{
                        className: header.column.getCanSort()
                          ? 'cursor-pointer select-none'
                          : '',
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: ' 🔼',
                        desc: ' 🔽',
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
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
