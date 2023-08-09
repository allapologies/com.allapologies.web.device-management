import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
  flexRender
} from '@tanstack/react-table';
import { Device } from '../domain/Device.ts';
import { devices } from './mocks.ts';

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
    cell: () => <div />,
  }),
]


export const DevicesTable = () => {
  const table = useReactTable({
    data: devices,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="p-2">
      <table>
        <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
              </th>
            ))}
          </tr>
        ))}
        </thead>
        <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
        </tbody>
        <tfoot>
        {table.getFooterGroups().map(footerGroup => (
          <tr key={footerGroup.id}>
            {footerGroup.headers.map(header => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                    header.column.columnDef.footer,
                    header.getContext()
                  )}
              </th>
            ))}
          </tr>
        ))}
        </tfoot>
      </table>
      <div className="h-4" />
    </div>
  )
};
