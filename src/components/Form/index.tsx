import React, { useState, Fragment, useEffect } from 'react';
import { nanoid } from 'nanoid';
import './styles.css';

import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';
import Charts from '../Charts';

const data = [
  {
    id: 'zkvGEWSQ7TNg-YvvukPJp',
    name: 'АРК (без м. Севасто- поль)',
    totalAmount: '155,2',
    stationary: '31.1',
    mobile: '124.1',
    population: '1967.3',
    territory: '26.1',
  },
  {
    id: 'KOEanjqd6RkWlZw_XjyQs',
    name: 'Вінницька',
    totalAmount: '218,1',
    stationary: '130.3',
    mobile: '87.8',
    population: '1660.0',
    territory: '26.5',
  },
  {
    id: '_BBJn66Y5IDKf1O8f39j5',
    name: 'Волинська',
    totalAmount: '63,4',
    stationary: '10.0',
    mobile: '53.4',
    population: '1036.2',
    territory: '20.2',
  },
  {
    id: 'nXliLgD4nADT3Gpt3kOIV',
    name: 'Дніпропетровська',
    totalAmount: '1164,8',
    stationary: '952.3',
    mobile: '212.5',
    population: '3374.2',
    territory: '31.9',
  },
  {
    id: '6GxAyFde9gtctZshQzI48',
    name: 'Донецька',
    totalAmount: '1767,2',
    stationary: '1533.4',
    mobile: '233.8',
    population: '4500.5',
    territory: '26.5',
  },
  {
    id: 'debmJmkYsg6uRSSB4hAy7',
    name: 'Житомирська',
    totalAmount: '80,5',
    stationary: '19.1',
    mobile: '61.4',
    population: '1294.2',
    territory: '29.9',
  },
  {
    id: 'KMgtT0CrjPILuBOCvuhgt',
    name: 'Закарпатська',
    totalAmount: '91,4',
    stationary: '23.2',
    mobile: '68.2',
    population: '1243.4',
    territory: '12.8',
  },
  {
    id: 'IJK1rZGW1tPLS8xWKdtGj',
    name: ' Івано-Франківська',
    totalAmount: '298,3',
    stationary: '241.7',
    mobile: '56.6',
    population: '1381.1',
    territory: '13.9',
  },
  {
    id: 'lNsv1bzfFWyispLbJ4lKK',
    name: 'Київська (без м. Київ)',
    totalAmount: '289,9',
    stationary: '107.4',
    mobile: '182.5',
    population: '1727.8',
    territory: '28.1',
  },
  {
    id: 'T_XIq2Z8PMdlPw_Kploxr',
    name: 'Кіровоградська',
    totalAmount: '75,1',
    stationary: '14.2',
    mobile: '60.9',
    population: '1027.0',
    territory: '24.6',
  },
];

export default ({ addToUserCollection, history }) => {
  const [regions, setRegions] = useState<any>(data);
  const [userCollection, setUserCollection] = useState('');

  const [addFormData, setAddFormData] = useState({
    name: '',
    totalAmount: '',
    stationary: '',
    mobile: '',
    population: '',
    territory: '',
  });

  const [editFormData, setEditFormData] = useState({
    name: '',
    totalAmount: '',
    stationary: '',
    mobile: '',
    population: '',
    territory: '',
  });

  const [editRegionId, setEditRegionId] = useState(null);

  const handleAddFormChange = event => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = event => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = event => {
    event.preventDefault();

    const newRegion = {
      id: nanoid(),
      name: addFormData.name,
      totalAmount: addFormData.totalAmount,
      stationary: addFormData.stationary,
      mobile: addFormData.mobile,
      population: addFormData.population,
      territory: addFormData.territory,
    };

    const newRegions = [...regions, newRegion];
    setRegions(newRegions);
  };

  const handleEditFormSubmit = event => {
    event.preventDefault();

    const editedRegion = {
      id: editRegionId,
      name: editFormData.name,
      totalAmount: editFormData.totalAmount,
      stationary: editFormData.stationary,
      mobile: editFormData.mobile,
      population: editFormData.population,
      territory: editFormData.territory,
    };

    const newRegions = [...regions];

    const index = regions.findIndex(reg => reg.id === editRegionId);

    newRegions[index] = editedRegion;

    setRegions(newRegions);

    setEditRegionId(null);
  };

  const handleEditClick = (event, reg) => {
    event.preventDefault();
    setEditRegionId(reg.id);

    const formValues = {
      name: reg.name,
      totalAmount: reg.totalAmount,
      stationary: reg.stationary,
      mobile: reg.mobile,
      population: reg.population,
      territory: reg.territory,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditRegionId(null);
  };

  const handleDeleteClick = regionId => {
    const newRegions = [...regions];

    const index = regions.findIndex(reg => reg.id === regionId);

    newRegions.splice(index, 1);

    setRegions(newRegions);
  };

  const saveToUserCollection = event => {
    event.preventDefault();
    addToUserCollection(userCollection, [userCollection, ...regions]);
  };

  return (
    <div className="table-container">
      <h2>Your History</h2>
      <div>
        {history &&
          [...history].map(h => {
            return (
              <button
                key={JSON.stringify(h)}
                onClick={() => {
                  console.log(regions);
                  console.log(h.collectionData.slice(1));
                  const newRegions = [...h.collectionData];
                  setRegions(newRegions.slice(1));
                }}>
                {JSON.stringify(h.collectionData[0])}
              </button>
            );
          })}
      </div>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Region</th>
              <th>Total amount </th>
              <th>By stationary</th>
              <th>By mobile</th>
              <th>Population </th>
              <th>Territory </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {regions.map(reg => (
              <Fragment key={JSON.stringify(reg)}>
                {editRegionId === reg.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    region={reg}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <h2>Add a Region</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="name"
          required
          placeholder="region "
          onChange={handleAddFormChange}
        />
        <input
          type="number "
          step="0.01"
          name="totalAmount"
          required
          placeholder="total polution amount "
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          step="0.01"
          name="stationary"
          required
          placeholder="by stationary"
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          step="0.01"
          name="mobile"
          required
          placeholder="by mobile"
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          step="0.01"
          name="population"
          required
          placeholder="population"
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          step="0.01"
          name="territory"
          required
          placeholder="territory"
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
      <h2>Add to my history</h2>
      <form onSubmit={saveToUserCollection}>
        <input
          type="text"
          name="territory"
          required
          placeholder="territory"
          onChange={e => setUserCollection(e.target.value)}
        />
        <button type="submit">Save to my history</button>
      </form>
      <Charts data={regions} />
    </div>
  );
};
