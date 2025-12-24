import { useState } from "react";



export default function TodoItem({ title, id, onEdite, onDelete }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(title)

  function handleSave() {
    if (editValue.trim() === "") return
    onEdite(id, editValue)
    setIsEditing(false)
  }
  return (
    <li>
      {isEditing ? (
        <>
          <input type="text" value={editValue} onChange={evt => setEditValue(evt.target.value)} />
          <button onClick={handleSave}>save</button>
        </>
      ) : (
        <>
          {title}
          <button onClick={() => setIsEditing(true)}>edit</button>
        </>
      )}
      <button onClick={() => onDelete(id)}>delete</button>
    </li>
  );
}