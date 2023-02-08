import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useCreateJediMutation } from '../../codegen-client';
import JediCreateBreadcrumbs from './JediCreateBreadcrumbs';
import JediCreateForm, { JediCreateFormOnSubmit } from './JediCreateForm';

const JediCreateContainer: React.FC = () => {
  const router = useRouter();

  const [
    createJedi,
    { error, loading }
  ] = useCreateJediMutation();

  const onSubmit = useCallback<JediCreateFormOnSubmit>((data) => {
    createJedi({
      variables: {
        input: {
          name: data.name,
          lightsaberColor: data.lightsaberColor,
          rank: data.rank,
        },
      },
      onCompleted: (result) => {
        const { id } = result.createJedi;
        router.push(`/jedi/${id}`);
      },
    })
  }, [createJedi]);

  return (
    <div>
      <JediCreateBreadcrumbs />
      <JediCreateForm disabled={loading} onSubmit={onSubmit} />
      {error && <div>{error.message}</div>}
    </div>
  );
};

export default JediCreateContainer;