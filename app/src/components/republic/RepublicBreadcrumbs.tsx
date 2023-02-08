import { Breadcrumbs, Typography } from '@mui/material';
import Link from 'next/link';

const RepublicBreadcrumbs: React.FC = () => {
  return (
    <Breadcrumbs>
      <Typography>
        <Link href="/">
          home
        </Link>
      </Typography>
      <Typography>
        republic
      </Typography>
    </Breadcrumbs>
  )
};

export default RepublicBreadcrumbs;