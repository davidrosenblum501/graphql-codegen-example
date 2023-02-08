import { Button, Card, CardContent, Typography } from '@mui/material'
import Link from 'next/link';

const JedisCreateCard: React.FC = () => {
  return (
    <Link href="/jedi/create">
      <Button>
        Create a custom Jedi
      </Button>
    </Link>
  );
};

export default JedisCreateCard;