import React from 'react';

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required
          placeholder="Region"
          name="name"
          value={editFormData.name}
          onChange={handleEditFormChange}></input>
      </td>
      <td>
        <input
          type="number"
          step="0.01"
          required
          placeholder="Total"
          name="totalAmount"
          value={editFormData.totalAmount}
          onChange={handleEditFormChange}></input>
      </td>
      <td>
        <input
          type="number"
          step="0.01"
          required
          placeholder="by stationary"
          name="stationary"
          value={editFormData.stationary}
          onChange={handleEditFormChange}></input>
      </td>
      <td>
        <input
          type="number"
          step="0.01"
          required
          placeholder="by mobile"
          name="mobile"
          value={editFormData.mobile}
          onChange={handleEditFormChange}></input>
      </td>
      <td>
        <input
          type="population"
          step="0.01"
          required
          placeholder="population"
          name="population"
          value={editFormData.population}
          onChange={handleEditFormChange}></input>
      </td>
      <td>
        <input
          type="number"
          step="0.01"
          required
          placeholder="territory"
          name="territory"
          value={editFormData.territory}
          onChange={handleEditFormChange}></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
