import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import mData from "./MOCK_DATA.json";
import { useMemo, useState } from "react";
import styles from "./apptable.module.css";
import { Card, Button } from "@fluentui/react-components";
import {
  MoreVertical24Regular,
  ArrowSortDown20Regular,
  ArrowSortUp20Regular,
} from "@fluentui/react-icons";

// type RowType = string | null;
// type RowsType = {
//   id: number;
//   first_name: RowType;
//   last_name: RowType;
//   email: RowType;
//   gender: RowType;
//   ip_address: RowType;
//   cctype: RowType;
//   cc: RowType;
//   curr: RowType;
//   car: RowType;
//   color: RowType;
//   hex: RowType;
//   actions: { id: number };
// };

const columns = [
  {
    header: "ID",
    accessorKey: "id",
    footer: "ID",
  },
  {
    header: "First name",
    accessorKey: "first_name",
    footer: "First name",
  },
  {
    header: "last_name",
    accessorKey: "last_name",
    footer: "last_name",
  },

  {
    header: "email",
    accessorKey: "email",
    footer: "email",
  },
  {
    header: "gender",
    accessorKey: "gender",
    footer: "gender",
  },
  {
    header: "ip_address",
    accessorKey: "ip_address",
    footer: "ip_address",
  },
  {
    header: "cctype",
    accessorKey: "cctype",
    footer: "cctype",
  },
  {
    header: "cc",
    accessorKey: "cc",
    footer: "cc",
  },
  {
    header: "curr",
    accessorKey: "curr",
    footer: "curr",
  },
  {
    header: "car",
    accessorKey: "car",
    footer: "car",
  },
  {
    header: "color",
    accessorKey: "color",
    footer: "color",
  },
  {
    header: "hex",
    accessorKey: "hex",
    footer: "hex",
  },
  {
    header: "Actions",
    accessorKey: "actions",
    footer: "Actions",
    enableSorting: false,
    cell: (value: any) => (
      <div style={{ textAlign: "end" }}>
        <Button
          size="small"
          onClick={() => console.log(value)}
          appearance="subtle"
          icon={<MoreVertical24Regular />}
        />
      </div>
    ),
  },
];

export default function AppTable({ searching, setSearching }: any) {
  const data: any = useMemo(() => mData, []);
  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter: searching,
    },
    onSortingChange: setSorting as any,
    onGlobalFilterChange: setSearching as any,
  });

  return (
    <div className={styles.container}>
      <Card>
        <table className={styles.table}>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => {
              return (
                <tr key={headerGroup.id} className={styles.tr}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <th
                        key={header.id}
                        className={styles.th}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        <div className={styles.thwrapper}>
                          <div>
                            {header.isPlaceholder
                              ? null
                              : flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                          </div>
                          <div style={{ display: "flex" }}>
                            {
                              {
                                asc: <ArrowSortUp20Regular />,
                                desc: <ArrowSortDown20Regular />,
                              }[header.column.getIsSorted() ?? null]
                            }
                          </div>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody>
            {table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => {
                return (
                  <tr key={row.id} className={styles.tr}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td key={cell.id} className={styles.td}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            ) : (
              <tr style={{ textAlign: "center" }} className={styles.tr}>
                <td colSpan={100} className={styles.td}>
                  No data...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
