/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';
import { MdDeleteOutline, MdDelete } from 'react-icons/md';
import { IoArrowBack } from 'react-icons/io5';

function Header({ handleTrashBin, binIsEmpty, trashBinMode, clearTrashBin }) {
  const deleteIconClass = `delete-icon ${trashBinMode && 'bin-mode'}`;
  const DeleteIcon = binIsEmpty ? MdDeleteOutline : MdDelete;
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="header">
      <div className="header-left">
        {trashBinMode && (
          <button
            onClick={() => handleTrashBin(false)}
            className="btn-back"
            aria-label="Volver a notas"
            title="Volver a notas"
          >
            <IoArrowBack size="1.3em" />
          </button>
        )}
        <h1 className="app-title">
          {trashBinMode ? 'PAPELERA' : 'POST ITS NOTES'}
        </h1>
      </div>
      {trashBinMode && !binIsEmpty && (
        <button
          onClick={clearTrashBin}
          className="btn btn-deleteForever btn-deleteForever:hover"
        >
          EMPTY BIN
        </button>
      )}
      <button
        onClick={() =>
          handleTrashBin((previousTrashBinMode) => !previousTrashBinMode)
        }
        className={deleteIconClass}
        aria-label={trashBinMode ? 'Volver a notas' : 'Ver papelera'}
        title={trashBinMode ? 'Volver a notas' : 'Ver papelera'}
      >
        <DeleteIcon size="1.3em" />
      </button>
    </div>
  );
}

export default Header;
