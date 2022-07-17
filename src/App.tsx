import { AppContainer } from './styles';
import { FC } from 'react';
import { AddNewItem } from './components/AddNewItem';
import { Column } from './components/Column';
import { useAppState } from './state/AppStateContext';

export const App: FC = () => {
  const { lists } = useAppState();

  return (
    <AppContainer>
      {lists.map(list => (
        <Column text={list.text} key={list.id} id={list.id} />
      ))}

      <AddNewItem
        toggleButtonText="+ Add another list"
        handleAdd={console.log}
      />
    </AppContainer>
  );
};
