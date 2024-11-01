import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onSaveProject, onCancel }) {
  const inputRefs = {
    title: useRef(),
    description: useRef(),
    dueDate: useRef(),
  };
  const modal = useRef();

  function handleSave() {
    const userInput = {};

    for (const key in inputRefs) {
      const value = inputRefs[key].current.value;
      if (value.trim() === "") {
        modal.current.open();
        return;
      }
      userInput[key] = value;
    }

    onSaveProject(userInput);
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
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
          <Input type="text" ref={inputRefs.title} label="Title" />
          <Input ref={inputRefs.description} label="Description" textarea />
          <Input type="date" ref={inputRefs.dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
