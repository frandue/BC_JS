



import { getPropertyList, getSaleTypeList, getProvinceList } from './propety-list.api';
import { mapFilterToQueryParams, mapPropertyListFromApiToViewModel } from './property-list.mappers';
import { addPropertyRows, setOptions, clearPropertyRows } from './property-list.helpers';
import { roomOptions, bathroomOptions, minPriceOptions, maxPriceOptions } from './property-list.constants';
import { onSubmitForm, onUpdateField } from '../../common/helpers'
//Nos traemos los datos del servidor, sabemos que es codigo asincrono y la respuesta seria la propertyList
Promise.all([ getPropertyList(), getSaleTypeList(), getProvinceList(),]).then(
  ([propertyList, saleTypeList, provinceList]) => {// Usadon el destructuring del array resultList
  loadPropertyList(propertyList);
  setOptions(saleTypeList, 'select-sale-type', '¿Qué venta?');
  setOptions(provinceList, 'select-province', '¿Dónde?');
  setOptions(roomOptions, 'select-room', '¿Habitaciones?');
  setOptions(bathroomOptions, 'select-bathroom', '¿Cuartos de baño?');
  setOptions(minPriceOptions, 'select-min-price', 'Min (EUR)');
  setOptions(maxPriceOptions, 'select-max-price', 'Max (EUR)');
}
);


const loadPropertyList = getPropertyList => {//Queremos convertirlo a modo de vista
  const viewModelPropertyList = mapPropertyListFromApiToViewModel(getPropertyList);
  addPropertyRows(viewModelPropertyList);
};

let filter = {
  saleTypeId: '',
  provinceId: '',
  minRooms: '',
  minBathrooms:'',
  minPrice: '',
  maxPrice: '',
};

onUpdateField('select-sale-type', event => {
  const value = event.target.value;
  filter = {
    ...filter,
    saleTypeId: value,
  };
});

onUpdateField('select-province', event => {
  const value = event.target.value;
  filter = {
    ...filter,
    provinceId: value,
  };
});

onUpdateField('select-room',event => {
  const value = event.target.value;
  filter = {
    ...filter,
    minRooms: value,
  };
});

onUpdateField('select-bathroom', event => {
  const value = event.target.value;
  filter = {
    ...filter,
    minBathrooms: value,
  };
});


onUpdateField('select-min-price', event => {
  const value = event.target.value;
  filter = {
    ...filter,
    minPrice: value,
  };
});

onUpdateField('select-max-price', event => {
  const value = event.target.value;
  filter = {
    ...filter,
    maxPrice: value,
  };
});

onSubmitForm('search-button', () => {
  const queryParams = mapFilterToQueryParams(filter);
  clearPropertyRows();
  getPropertyList(queryParams).then(propertyList => {
    loadPropertyList(propertyList);
  });
});



