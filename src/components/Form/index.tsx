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
  {
    id: 'L01UjUw_ot1L_UqnupeL1',
    name: 'Луганська',
    totalAmount: '662,5',
    stationary: '566.3',
    mobile: '96.2',
    population: '2331.8',
    territory: '26.7',
  },
  {
    id: 'pZrRsjsn6CRftIlK6rh6w',
    name: 'Львівська',
    totalAmount: '266,8',
    stationary: '126.4',
    mobile: '140.4',
    population: '2552.9',
    territory: '21.8',
  },
  {
    id: 'fSYds2LUI3bRBrNaDoHDQ',
    name: 'Миколаївська',
    totalAmount: '89,6',
    stationary: '25.8',
    mobile: '63.8',
    population: '1195.8',
    territory: '24.6',
  },
  {
    id: 'M4hYyJH0Fg1ayuEgGCmze',
    name: 'Одеська',
    totalAmount: '192,2',
    stationary: '34.4',
    mobile: '157.8',
    population: '2392.2',
    territory: '33.3',
  },
  {
    id: 'OCQ9Cl8pdwW3ieCqP5TfN',
    name: 'Полтавська',
    totalAmount: '202,2',
    stationary: '93.4',
    mobile: '108.8',
    population: '1511.4',
    territory: '28.8',
  },
  {
    id: 'E6NfWPinEcumgeDWTodNE',
    name: 'Рівненська',
    totalAmount: '61,5',
    stationary: '16.2',
    mobile: '45.3',
    population: '1151.0',
    territory: '20.1',
  },
  {
    id: 'JiIvi4XxLgRJelKEEuyen',
    name: 'Сумська',
    totalAmount: '87,4',
    stationary: '29.7',
    mobile: '57.7',
    population: '1184.0',
    territory: '23.8',
  },
  {
    id: 'O82iAwtSFfZx3GJ5tTMQ7',
    name: 'Харківська',
    totalAmount: '310,4',
    stationary: '173.1',
    mobile: '137.3',
    population: '2782.4',
    territory: '31.4',
  },
  {
    id: '-2c50Y4kJpgOdqFO7XAQb',
    name: 'Херсонська',
    totalAmount: '84,0',
    stationary: '11.9',
    mobile: '72.1',
    population: '1099.2',
    territory: '28.5',
  },
  {
    id: 'aHlMbJObNJVsNevnYuQZ-',
    name: 'Хмельницька',
    totalAmount: '92,1',
    stationary: '24.5',
    mobile: '67.6',
    population: '1341.4',
    territory: '20.6',
  },
  {
    id: 'jllesHvL0l5nlClaPkSO2',
    name: 'Черкаська',
    totalAmount: '124,0',
    stationary: '43.2',
    mobile: '80.8',
    population: '1304.3',
    territory: '20.9',
  },
  {
    id: '70Dw3wvvc4dToMyucO3wE',
    name: 'Чернівецька',
    totalAmount: '43,3',
    stationary: '3.9',
    mobile: '39.4',
    population: '904.1',
    territory: '8.1',
  },
  {
    id: 'JjxAQ9rpuMFpMj1F0DITn',
    name: 'Чернігівська',
    totalAmount: '98,1',
    stationary: '44.4',
    mobile: '53.7',
    population: '1121.3',
    territory: '31.9',
  },
  {
    id: 'xOCFScTTGz_RSTkiDKe4W',
    name: 'Київ',
    totalAmount: '275,2',
    stationary: '27.0',
    mobile: '248.2',
    population: '2765.5',
    territory: '0.8',
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
    console.log(newRegions);
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
          name="name"
          required
          placeholder="name"
          onChange={e => setUserCollection(e.target.value)}
        />
        <button type="submit">Save to my history</button>
      </form>
      <Charts data={regions} />
    </div>
  );
};
