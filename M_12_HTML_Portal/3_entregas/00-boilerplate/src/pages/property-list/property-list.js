



import { getPropertyList, getSaleTypeList, getProvinceList } from './propety-list.api';
import { mapPropertyListFromApiToViewModel } from './property-list.mappers';
import { addPropertyRows } from './property-list.helpers';
//Nos traemos los datos del servidor, sabemos que es codigo asincrono y la respuesta seria la propertyList
Promise.all([ //Voy hacer todas las promesas a la vez con un Promise.all
  getPropertyList(),
  getSaleTypeList(),
  getProvinceList(),
]).then(([propertyList, saleTypeList, provinceList]) => {// Usadon el destructuring del array resultList
  loadPropertyList(propertyList);
}
);


const loadPropertyList = getPropertyList => {//Queremos convertirlo a modo de vista
  const viewModelPropertyList = mapPropertyListFromApiToViewModel(getPropertyList);
  addPropertyRows(viewModelPropertyList);
};

