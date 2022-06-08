import React from 'react';
import { FcEmptyTrash, FcFullTrash } from 'react-icons/fc';
import { TiDelete } from 'react-icons/ti';

const Header = ({
  handleTrashBin,
  binIsEmpty,
  trashBinMode,
  clearTrashBin
}) => {
  const deleteIconClass = `delete-icon ${trashBinMode && 'bin-mode'}`;
  const DeleteIcon = binIsEmpty ? FcEmptyTrash : FcFullTrash;
  return (
    <div className="header">
      <h8>POST ITS NOTES</h8>
      {trashBinMode && !binIsEmpty && <TiDelete onClick={clearTrashBin} size="2em" color='red'  />}
      <DeleteIcon
        onClick={() =>
          handleTrashBin((previousTrashBinMode) => !previousTrashBinMode)
        }
        className={deleteIconClass}
        size="2em"
      />
    </div>
  );
};

export default Header;
