import styled from '@emotion/styled';
import { Button, FormGroup, MenuItem, Select, TextField } from '@mui/material';
import { useState } from 'react';
import { JediLightsaberColor, JediRank } from '../../codegen-client';

export interface JediCreateData {
  name: string;
  lightsaberColor: JediLightsaberColor;
  rank: JediRank;
}

export type JediCreateFormOnSubmit = (data: JediCreateData) => void;

export interface JediCreateFormProps {
  disabled?: boolean;
  onSubmit?: JediCreateFormOnSubmit;
}

const StyledTextField = styled(TextField)`
  margin-bottom: 15px;
`;

const StyledSelect = styled(Select)`
  margin-bottom: 15px;
`;

const JediCreateForm: React.FC<JediCreateFormProps> = ({
  disabled,
  onSubmit,
}) => {
  const [name, setName] = useState('');
  const [lightsaberColor, setLightsaberColor] = useState(JediLightsaberColor.Blue);
  const [rank, setRank] = useState(JediRank.Knight);

  const onFormSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
    onSubmit?.({
      name,
      lightsaberColor,
      rank,
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <FormGroup>
        <StyledTextField
          type="text"
          label="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          disabled={disabled}
        />
        <StyledSelect
          // defaultValue={lightsaberColor}
          value={lightsaberColor}
          onChange={(event) => setLightsaberColor(event.target.value as JediLightsaberColor)}
        >
          {Object.values(JediLightsaberColor).map((color) =>
            <MenuItem key={color} value={color}>{color}</MenuItem>
          )}
        </StyledSelect>
        <StyledSelect
          // defaultValue={rank}
          value={rank}
          onChange={(event) => setRank(event.target.value as JediRank)}
        >
          {Object.values(JediRank).map((rank) =>
            <MenuItem key={rank} value={rank}>{rank}</MenuItem>
          )}
        </StyledSelect>
        <Button type="submit">Submit</Button>
      </FormGroup>
    </form>
  );
};

export default JediCreateForm;