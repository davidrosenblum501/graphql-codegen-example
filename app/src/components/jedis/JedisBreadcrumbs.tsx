import { Breadcrumbs, Typography } from '@mui/material';
import Link from 'next/link';

const JedisBreadcrumbs: React.FC = () => {
  return (
    <Breadcrumbs>
      <Typography>
        <Link href="/">
          home
        </Link>
      </Typography>
      <Typography>
        jedi
      </Typography>
    </Breadcrumbs>
  )
};

export default JedisBreadcrumbs;