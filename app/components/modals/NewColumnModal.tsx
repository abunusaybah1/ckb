import React, { useEffect, useState } from "react";
import { NewColumnModalProps } from "../../types";
import { defaultColumns } from "../../lib/default_columns";

const NewColumnModal: React.FC<NewColumnModalProps> = ({
  isOpen,
  onClose,
  onAdd,
  //   id,
  //   setId,
}) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (isOpen) {
      setValue("");
    }
  }, [isOpen]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value) return;
    onClose();
    onAdd(value);
    // setId(defaultColumns.length++);
  };

  return (
    <div
      className="fixed z-1000 inset-0 bg-black/40 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-md rounded-xl p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-bold">New column</h2>
          <button onClick={onClose} className="text-xl ">
            x
          </button>
        </div>
        <form className="flex gap-2">
          <input
            type="text"
            value={value}
            placeholder="Enter column name"
            className=" border-blue-800 border-2 rounded-lg px-3 py-2 flex-1"
            onChange={(e) => setValue(e.target.value)}
            autoFocus
          />
          <input
            type="button"
            value="Add"
            onClick={handleAdd}
            className="bg-blue-800 text-white px-4 py-2 rounded-lg"
          />
          {/* <input type="text" value={id} /> */}
        </form>
      </div>
    </div>
  );
};

export default NewColumnModal;
