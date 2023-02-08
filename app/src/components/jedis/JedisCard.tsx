import styled from '@emotion/styled';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import Link from 'next/link';
import { GetJediPaginatedQuery } from '../../codegen-server';

export interface JedisCardProps {
  jedi: GetJediPaginatedQuery['jediPaginated']['jedi'][0];
}

const StyledCard = styled(Card)`
  margin-bottom: 15px;
`;

const JedisCard: React.FC<JedisCardProps> = ({
  jedi,
}) => {
  return (
    <StyledCard variant="outlined">
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
    </StyledCard>
  );
};

export default JedisCard;