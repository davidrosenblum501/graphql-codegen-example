import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import Link from 'next/link';
import { GetJediPaginatedQuery } from '../../codegen-server';

export interface JedisCardProps {
  jedi: GetJediPaginatedQuery['jediPaginated']['jedi'][0];
}

const JedisCard: React.FC<JedisCardProps> = ({
  jedi,
}) => {
  return (
    <Card variant="outlined" style={{ marginBottom: 15 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {jedi.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {jedi.name} is a {jedi.rank.toLocaleLowerCase()} with a {jedi.lightsaberColor.toLowerCase()} colored lightsaber.
        </Typography>
      </CardContent>
      <CardActions>
          <Link href={`/jedi/${jedi.id}`} style={{ textDecoration: 'none'}}>
            <Button>See profile</Button>
          </Link>
      </CardActions>
    </Card>
  );
};

export default JedisCard;