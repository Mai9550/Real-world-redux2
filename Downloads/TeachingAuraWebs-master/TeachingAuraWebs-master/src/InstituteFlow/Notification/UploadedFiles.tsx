import React from 'react';
import TrashIc from '../../icon/drawable/TrashIc';

const UploadedFiles = ({ name, id, onDelete }) => {
  return (
    <div className="flex items-center space-x-3 justify-between mt-3">
      <p className="whitespace-nowrap">{name}</p>
      <button type="button" onClick={e => onDelete(e, id)}>
        <TrashIc />
      </button>
    </div>
  );
};

export default UploadedFiles;
