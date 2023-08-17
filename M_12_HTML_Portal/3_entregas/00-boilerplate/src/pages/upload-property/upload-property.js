import { getEquipmentList, getProvincesList, getSaleTypes, makePropertie } from './upload-property.api';
import { setCheckboxList, setOptionList, formatCheckboxId  } from './upload-property.helpers';
import { onUpdateField, onSetError, onSubmitForm, onSetFormErrors} from '../../common/helpers';
import { mapPropertyFromViewModelToApi } from './upload-property.mapper';
import { routes } from '../../core/router/routes';
import { formValidation } from './upload-property.validation';
import { history } from '../../core/router/history';

Promise.all([getProvincesList(), getEquipmentList(), getSaleTypes()])
  .then((values) => {
    const provincesList = values[0];
    const equipmentList = values[1];
    const saleTypeList = values[2];
    setOptionList(provincesList, 'province');
    setCheckboxList(equipmentList,'equipments');
    setCheckboxList(saleTypeList,'saleTypes');
    listSaleTypeList(saleTypeList);  //Le paso la lista saleTypeList
    listEquipmentList(equipmentList);
  }
);

let newProperty = {
  title: '',
  notes: '',
  email: '',
  phone: '',
  price: '',
  saleTypes: [],
  address: '',
  city: '',
  province: '',
  squareMeter: '',
  rooms: '',
  bathrooms: '',
  locationUrl: '',
  mainFeatures: [],
  equipmentIds: [],
  images: [],
};

//Almaceno los nuevos datos de la propiedad
onUpdateField('title', event => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    title: value
  };
  // VALIDADCION  
formValidation.validateField('title', newProperty.title).then(result => {
  onSetError('title', result);
  });
});
onUpdateField('notes', event => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    notes: value
  };
});
onUpdateField('email', event => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    email: value
  };
});
onUpdateField('phone', event => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    phone: value
  };
});
onUpdateField('price', event => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    price: parseFloat(value)
  };
});
// onUpdateField('saleTypes', event => {
//   const value = event.target.value;
//   newProperty = {
//     ...newProperty,
//     saleTypes: value
//   };
// });
///////////////////

const addSaleType = value => newProperty = {...newProperty, saleTypes: [...newProperty.saleTypes, value]}

const listSaleTypeList = saleTypeList => {
  saleTypeList.forEach(element => { // tenemos que recorrer con forEach esta lista y en cada elemento hacer el 'onUpdateField'
    const id = formatCheckboxId(element);
    onUpdateField(id, event => {
      const value = event.target.value;
      addSaleType(value);
    })
  });
};


///////////////////
onUpdateField('address', event => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    address: value
  };
});
onUpdateField('city', event => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    city: value
  };
});
onUpdateField('province', event => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    province: value
  };
});
onUpdateField('squareMeter', event => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    squareMeter: parseFloat(value)
  };
});
onUpdateField('rooms', event => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    rooms: parseFloat(value)
  };
});
onUpdateField('bathrooms', event => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    bathrooms: parseFloat(value)
  };
});
onUpdateField('locationUrl', event => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    locationUrl: value
  };
});
onUpdateField('mainFeatures', event => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    mainFeatures: value
  };
});
// onUpdateField('equipments', event => {
//   const value = event.target.value;
//   newProperty = {
//     ...newProperty,
//     equipmentIds: value
//   };
// });

/////////////

const addEquipment = value => newProperty = {...newProperty, equipmentIds: [...newProperty.equipmentIds, value]}

const listEquipmentList = equipmentList => {
  equipmentList.forEach(element => { // tenemos que recorrer con forEach esta lista y en cada elemento hacer el 'onUpdateField'
    const id = formatCheckboxId(element);
    onUpdateField(id, event => {
      const value = event.target.value;
      addEquipment(value);
    })
  });
};

/////////////

onUpdateField('images', event => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    images: value
  };
});

//Exportla nueva propiedad con el boton
onSubmitForm('save-button', () => {
  formValidation.validateForm(newProperty).then(result => {
      onSetFormErrors(result);
      if (result.succeeded) {
        const apiNewProperty = mapPropertyFromViewModelToApi(newProperty);
        makePropertie(apiNewProperty).then((response) => {
          if (response.id) {
            alert("Nueva propiedad realizada con éxito");
            history.push(routes.propertyList);
          } else {
            alert("Ha habido un problema. No se ha podido guardar");
          }
        });
      }
  });      
 });




