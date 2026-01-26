import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Post } from '@/types';

interface HistoryTableProps {
    data: Post[];
  }
  
const HistoryTable = async({data}:HistoryTableProps) => {
    return (
        <div className='border rounded-md'>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>title</TableHead>
                        <TableHead>Content</TableHead>
                        <TableHead>tags</TableHead>
                        <TableHead>isFeatured</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                 {data?.map((i:Post)=>{
                            return (
                                <TableRow key={i?.id}>
                                    <TableCell>{i?.title}</TableCell>
                                    <TableCell>{i?.content}</TableCell>
                                    <TableCell>{i?.tags}</TableCell>
                                    <TableCell>{JSON.stringify(i?.isFeatured)}</TableCell>
                                </TableRow>
                            )
                        })}
                   
                </TableBody>
            </Table>
        </div>
    );
};

export default HistoryTable;