import { Breadcrumbs, Typography } from '@mui/material';
import Link from 'next/link';

export interface JediBreadcrumbsProps {
  id: number;
}

const JediBreadcrumbs: React.FC<JediBreadcrumbsProps> = ({
  id,
}) => {
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
        {id}
      </Typography>
    </Breadcrumbs>
  )
};

export default JediBreadcrumbs;