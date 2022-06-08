import React from 'react';
import { CgTrashEmpty, CgTrash } from 'react-icons/cg';
import { TbTrashX } from 'react-icons/tb';

const Header = ({
  handleToggleDarkMode,
  handleTrashBin,
  binIsEmpty,
  trashBinMode,
  clearTrashBin
}) => {
  const deleteIconClass = `delete-icon ${trashBinMode && 'bin-mode'}`;
  const DeleteIcon = binIsEmpty ? CgTrashEmpty : CgTrash;
  return (
    <div className="header">
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="btn dark-btn dark-btn:hover"
      >
        POSTICKS
      </button>
	  {trashBinMode && !binIsEmpty &&(<TbTrashX  onClick={clearTrashBin}/>)}
      <DeleteIcon
        onClick={() =>
          handleTrashBin((previousTrashBinMode) => !previousTrashBinMode)
        }
        className={deleteIconClass}
        size="1.7em"
      />
    </div>
  );
};

export default Header;
