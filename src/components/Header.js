/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';
import { CgTrashEmpty, CgTrash } from 'react-icons/cg';

function Header({ handleTrashBin, binIsEmpty, trashBinMode, clearTrashBin }) {
  const deleteIconClass = `delete-icon ${trashBinMode && 'bin-mode'}`;
  const DeleteIcon = binIsEmpty ? CgTrashEmpty : CgTrash;
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="header">
      <h8>POST ITS NOTES</h8>
      {trashBinMode && !binIsEmpty && (
        <button
          onClick={clearTrashBin}
          className="btn btn-deleteForever btn-deleteForever:hover"
        >
          DELETE
        </button>
      )}
      <DeleteIcon
        onClick={() =>
          handleTrashBin((previousTrashBinMode) => !previousTrashBinMode)
        }
        className={deleteIconClass}
        size="1.7em"
        color="#032649"
      />
    </div>
  );
}

export default Header;
