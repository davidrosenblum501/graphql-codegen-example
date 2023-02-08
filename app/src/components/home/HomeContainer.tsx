import { Card, CardContent, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import HomeBreadcrumbs from './HomeBreadcrumbs';

const HomeContainer: React.FC = () => {
  return (
    <div>
      <HomeBreadcrumbs />
      <Grid container spacing={5} justifyContent="center">
        <Grid item lg={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="body1">
                See Jedi stuff <Link href="/jedi">here</Link>.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={6}>  
          <Card variant="outlined">
            <CardContent>
              <Typography variant="body1">
                See Republic stuff <Link href="/republic">here</Link>.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeContainer;