import { useState } from "react";
import Input from "./Input";

export default function NewProject({ onSaveProject, onCancel }) {
  const [userInput, setUserInput] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUserInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSave() {
    onSaveProject(userInput);
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            className="text-stone-800 hover:text-stone-950"
            onClick={onCancel}
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input
          label="Title"
          name="title"
          value={userInput.title}
          onChange={handleChange}
        />
        <Input
          label="Description"
          name="description"
          value={userInput.description}
          onChange={handleChange}
          textarea
        />
        <Input
          label="Due Date"
          name="dueDate"
          value={userInput.dueDate}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
