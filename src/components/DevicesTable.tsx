import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
  flexRender,
  SortingState, getSortedRowModel,
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useState } from 'react';

import { Device } from '../domain/Device';
import { RowActions } from './RowActions';
import { useDevices } from '../service/useDevices';

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
    cell: ({ row: { original: { id } } }) => <RowActions deviceId={id} />,
  }),
];

const initialSorting: SortingState = [
  {
    id: 'name',
    desc: false,
  },
];

export function DevicesTable() {
  const { devices, error, isLoading } = useDevices();
  const [sorting, setSorting] = useState(initialSorting);

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
    <TableContainer sx={{ maxHeight: 'calc(100vh - 60px)' }}>
      <Table stickyHeader>
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableCell key={header.id}>
                  {header.isPlaceholder ? null : (
                    // component is interactive and has a handler
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
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
                        header.getContext(),
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
          {error ? (
            <TableRow>
              <TableCell colSpan={columns.length} sx={{ textAlign: 'center', color: 'error.main' }}>
                {error.toString()}
              </TableCell>
            </TableRow>
          ) : null}
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={columns.length} sx={{ textAlign: 'center' }}>
                ...loading...
              </TableCell>
            </TableRow>
          ) : null}
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
