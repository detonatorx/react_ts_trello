import { Column } from './components/Column';
import { AppContainer } from './styles';
import { useAppState } from './state/AppStateContext';
import { AddNewItem } from './components/AddNewItem';
import { CustomDragLayer } from './dnd/CustomDragLayer';
import { addList } from './state/actions';

export const App = () => {
  const { lists, dispatch } = useAppState();

  return (
    <AppContainer>
      <CustomDragLayer />

      {lists.map((list, i) => (
        <Column id={list.id} text={list.text} key={list.id} />
      ))}
      
      <AddNewItem
        toggleButtonText="+ Add another list"
        handleAdd={text => dispatch(addList(text))}
      />
    </AppContainer>
  );
};
