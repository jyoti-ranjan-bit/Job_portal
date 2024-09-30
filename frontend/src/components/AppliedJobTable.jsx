import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'


const AppliedJobTable = () => {
  return (
    <div>
        <Table>
        <TableCaption>A list of your applied jobs</TableCaption>
        <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Job Role</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        [1,2,3,4].length <= 0 ? <span>You haven't applied any job yet.</span> : [1,2,3,4].map((item,index) => (
                            <TableRow key={index}>
                                <TableCell>29-28-24</TableCell>
                                <TableCell>Frontend Developer</TableCell>
                                <TableCell>Microsoft</TableCell>
                                <TableCell className="text-right"><Badge className="text">Selected</Badge></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
        
        
        
        </Table>
    </div>
  )
}

export default AppliedJobTable