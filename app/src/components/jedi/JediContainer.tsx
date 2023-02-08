import { GetJediQuery } from '../../codegen-server';
import JediBreadcrumbs from './JediBreadcrumbs';
import JediTable from './JediTable';

export interface JediContainerProps {
  jedi: Exclude<GetJediQuery['jedi'], null | undefined>;
}

const JediContainer: React.FC<JediContainerProps> = ({
  jedi,
}) => {
  return (
    <div>
      <JediBreadcrumbs id={jedi.id} />
      <JediTable jedi={jedi} />
    </div>
  );
};

export default JediContainer;