import { Breadcrumbs, Typography } from '@mui/material';
import Link from 'next/link';

const JediCreateBreadcrumbs: React.FC = () => {
  return (
    <Breadcrumbs>
      <Typography>
        <Link href="/">
          home
        </Link>
      </Typography>
      <Typography>
        <Link href="/jedi">
          jedi
        </Link>
      </Typography>
      <Typography>
        create
      </Typography>
    </Breadcrumbs>
  );
};

export default JediCreateBreadcrumbs;