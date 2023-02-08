import { GetJediPaginatedQuery } from '../../codegen-server';
import JedisBreadcrumbs from './JedisBreadcrumbs';
import JedisCard from './JedisCard';
import JedisCreateCard from './JedisCreateCard';

export interface JedisContainerProps {
  jediPaginated: GetJediPaginatedQuery['jediPaginated'];
}

const JedisContainer: React.FC<JedisContainerProps> = ({
  jediPaginated,
}) => {
  return (
    <div>
      <JedisBreadcrumbs />
      {jediPaginated.jedi.map((jedi) => 
        <JedisCard key={jedi.id} jedi={jedi} />
      )}
      <JedisCreateCard />
    </div>
  );
};

export default JedisContainer;