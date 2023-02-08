import { GetRepublicUnitsQuery } from '../../codegen-server';
import RepublicBreadcrumbs from './RepublicBreadcrumbs';
import RepublicUnitCard from './RepublicUnitCard';

export interface RepublicContainerProps {
  republicUnits: GetRepublicUnitsQuery['republicUnits'];
}

const RepublicContainer: React.FC<RepublicContainerProps> = ({
  republicUnits,
}) => {
  return (
    <div>
      <RepublicBreadcrumbs />
      {republicUnits.map((republicUnit) =>
        <RepublicUnitCard
          key={`${republicUnit.id}-${republicUnit.name}`}
          republicUnit={republicUnit}
        />
      )}
    </div>
  );
};

export default RepublicContainer;