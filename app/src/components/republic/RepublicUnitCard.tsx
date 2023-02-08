import styled from '@emotion/styled';
import { Card, CardContent, Typography } from '@mui/material';
import { GetRepublicUnitsQuery } from '../../codegen-server';

export interface RepublicUnitCardProps {
  republicUnit: GetRepublicUnitsQuery['republicUnits'][0];
}

const StyledCard = styled(Card)<{ $type: 'Jedi' | 'CloneTrooper' }>`
  margin-bottom: 15px;
  border-color: ${(props) => props.$type === 'Jedi' ? 'cornflowerblue' : 'gold'};
`;

const RepublicUnitCard: React.FC<RepublicUnitCardProps> = ({
  republicUnit,
}) => {
  return (
    <StyledCard variant="outlined" $type={republicUnit.__typename}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {republicUnit.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {republicUnit.__typename === 'Jedi'
            ? `${republicUnit.name} is a Jedi ${republicUnit.rank.toLowerCase()}`
            : undefined
          }
          {republicUnit.__typename === 'CloneTrooper'
            ? `${republicUnit.name} is a Clone Trooper from the ${republicUnit.corps}`
            : undefined
          }
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default RepublicUnitCard;