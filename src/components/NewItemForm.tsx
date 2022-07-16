import { NewItemFormContainer, NewItemButton, NewItemInput } from '../styles';
import { useState } from 'react';

type NewItemFormProps = {
  handleAdd(text: string): void;
};

export const NewItemForm = ({handleAdd}: NewItemFormProps) => {
  const [text, setText] = useState('')

  return (
    <NewItemFormContainer>
      <NewItemInput
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <NewItemButton onClick={() => handleAdd(text)} >
        Create
      </NewItemButton>
    </NewItemFormContainer>
  )
};
