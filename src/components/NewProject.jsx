import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ onSaveProject, onCancel }) {
  const inputRefs = {
    title: useRef(),
    description: useRef(),
    dueDate: useRef(),
  };

  function handleSave() {
    const userInput = {};

    for (const key in inputRefs) {
      if (inputRefs[key].current.value === "") {
        return;
      }
      userInput[key] = inputRefs[key].current.value;
    }

    for (const key in inputRefs) {
      inputRefs[key].current.value = "";
    }

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
        <Input ref={inputRefs.title} label="Title" />
        <Input ref={inputRefs.description} label="Description" textarea />
        <Input ref={inputRefs.dueDate} label="Due Date" />
      </div>
    </div>
  );
}
