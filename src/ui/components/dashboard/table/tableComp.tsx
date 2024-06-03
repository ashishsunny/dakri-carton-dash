// File: table-component.tsx
'use client'

import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/src/ui/components/dashboard/table/table'
import { Button } from '../button/button'

const TableComponent: React.FC<TableComponentProps> = ({ data }) => {
  return (
    <Table>
      <TableCaption>{data.dataType}</TableCaption>
      <TableHeader>
        <TableRow>
          {data.tableHeader.map((header, index) => (
            <TableHead key={index}>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.data.map((item, index) => (
          <TableRow key={index}>
            {Object.keys(item).map((key) => (
              <TableCell key={`${index}-${key}`}>{item[key]}</TableCell>
            ))}
            <TableCell>
              <Button className="bg-blue-400 hover:bg-blue-500">Details</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default TableComponent
