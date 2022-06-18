import React from 'react';

const ReadOnlyRow = ({ region, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{region.name}</td>
      <td>{region.totalAmount}</td>
      <td>{region.stationary}</td>
      <td>{region.mobile}</td>
      <td>{region.population}</td>
      <td>{region.territory}</td>
      <td>
        <button type="button" onClick={event => handleEditClick(event, region)}>
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(region.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
