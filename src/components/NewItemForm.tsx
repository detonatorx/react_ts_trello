import { useState } from "react"
import { useFocus } from "../utils/useFocus"
import {
  NewItemFormContainer,
  NewItemButton,
  NewItemInput
} from "../styles"

type NewItemFormProps = {
  handleAdd(text: string): void
}

export const NewItemForm = ({ handleAdd }: NewItemFormProps) => {
  const [text, setText] = useState("")
  const inputRef = useFocus()

  const handleAddText = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      handleAdd(text)
    }
  }

  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleAddText}
      />
      <NewItemButton onClick={() => handleAdd(text)}>
        Create
      </NewItemButton>
    </NewItemFormContainer>
  )
}
