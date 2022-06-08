import React from 'react';
import { CgTrashEmpty, CgTrash } from 'react-icons/cg';
import { TbTrashX } from 'react-icons/tb';

const Header = ({
  handleTrashBin,
  binIsEmpty,
  trashBinMode,
  clearTrashBin
}) => {
  const deleteIconClass = `delete-icon ${trashBinMode && 'bin-mode'}`;
  const DeleteIcon = binIsEmpty ? CgTrashEmpty : CgTrash;
  return (
    <div className="header">
      <h6> POST ITS NOTES </h6>
      {trashBinMode && !binIsEmpty && <TbTrashX onClick={clearTrashBin} />}
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
