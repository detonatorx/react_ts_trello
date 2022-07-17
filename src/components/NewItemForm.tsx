import { NewItemFormContainer, NewItemButton, NewItemInput } from '../styles';
import { useState } from 'react';
import { useFocus } from '../utils/useFocus';

type NewItemFormProps = {
  handleAdd(text: string): void;
};

export const NewItemForm = ({ handleAdd }: NewItemFormProps) => {
  const [text, setText] = useState('');
  const inputRef = useFocus();

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAdd(text);
    }
  };

  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyPress={handleEnter}
      />
      <NewItemButton onClick={() => handleAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};
