import { AppContainer } from './styles';
import { FC } from 'react';
import { AddNewItem } from './components/AddNewItem';
import { Column } from './components/Column';
import { Card } from './components/Card';

export const App: FC = () => {
  return (
    <AppContainer>
      <Column text="To do">
        <Card text='Generate app structure'/>
      </Column>
      <Column text="In progress">
        <Card text='Learn Typescript'/>
      </Column>
      <Column text="Done">
        <Card text='Begin to use static typing'/>
      </Column>

      <AddNewItem
        toggleButtonText="+ Add another list"
        handleAdd={console.log}
      />
    </AppContainer>
  );
};
