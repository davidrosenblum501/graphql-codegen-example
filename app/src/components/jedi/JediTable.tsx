import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import Link from 'next/link';
import { GetJediQuery } from '../../codegen-server';

export interface JediTableProps {
  jedi: Exclude<GetJediQuery['jedi'], null | undefined>;
}

const JediTable: React.FC<JediTableProps> = ({
  jedi,
}) => {
  return (
    <Paper variant="outlined">
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>{jedi.id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>{jedi.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Lightsaber Color</TableCell>
              <TableCell>{jedi.lightsaberColor}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>{jedi.rank}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Padawan</TableCell>
              <TableCell>
                {jedi.padawan
                  ? <Link href={`/jedi/${jedi.padawan.id}`}>{jedi.padawan.name}</Link>
                  : 'No padawan'
                }
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default JediTable;