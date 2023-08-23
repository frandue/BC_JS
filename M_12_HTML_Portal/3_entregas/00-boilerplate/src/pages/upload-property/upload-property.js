import { getEquipmentList, getProvincesList, getSaleTypes, makePropertie } from './upload-property.api';
import { setCheckboxList, setOptionList, formatCheckboxId, onAddFeature, onRemoveFeature, formatDeleteFeatureButtonId, onAddImage  } from './upload-property.helpers';
import { onUpdateField, onSetError, onSubmitForm, onSetFormErrors, onAddFile} from '../../common/helpers';
import { mapPropertyFromViewModelToApi } from './upload-property.mapper';
import { routes } from '../../core/router/routes';
import { formValidation } from './upload-property.validation';
import { history } from '../../core/router/history';

const addElement = (value, obj, id) => {
  return { ...obj, [id]: [...obj[id], value] }
};
const removeElement = (value, id) => {
  const index = newProperty[id].indexOf(value);
  newProperty[id].splice(index, 1);
};

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
  accountId: '',
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
  equipments: [],
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
// VALIDADCION  
formValidation.validateField('notes', newProperty.notes).then(result => {
  onSetError('notes', result);
  });
});

onUpdateField('email', event => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    email: value
  };
  // VALIDADCION  
  formValidation.validateField('email', newProperty.email).then(result => {
    onSetError('email', result);
    });
});

onUpdateField('phone', event => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    phone: value
  };
 // VALIDADCION  
 formValidation.validateField('phone', newProperty.phone).then(result => {
  onSetError('phone', result);
  });
});

onUpdateField('price', event => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    price: value
  };
  // VALIDADCION  
  formValidation.validateField('price', newProperty.price).then(result => {
    onSetError('price', result);
  });
});

const addSaleType = value => {
  if (!newProperty.saleTypes.includes(value)) {// Si el valor no esta presente se añade
    newProperty = {
      ...newProperty,
      saleTypes: [...newProperty.saleTypes, value]
    };
  } else {          // Si el valor esta presente se elimina ese valor ya existente
    newProperty = {
      ...newProperty,
      saleTypes: newProperty.saleTypes.filter(saleType => saleType !== value)
    };
  }
};
const listSaleTypeList = saleTypeList => { 
  saleTypeList.forEach(element => {
    const id = formatCheckboxId(element);
    onUpdateField(id, event => {
      const value = event.target.value;
      addSaleType(value);
// Valido que el array tenga minimo un valor
      formValidation.validateField('saleTypes', newProperty.saleTypes).then(result => {
        onSetError('saleTypes', result);
      });  
    })
  });
};

onUpdateField('address', event => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    address: value
  };
  // VALIDADCION  
  formValidation.validateField('address', newProperty.address).then(result => {
    onSetError('address', result);
   });
});

onUpdateField('city', event => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    city: value
  };
  // VALIDADCION  
  formValidation.validateField('city', newProperty.city).then(result => {
    onSetError('city', result);
    });
});

onUpdateField('province', event => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    province: value
  };
  // VALIDADCION  
  formValidation.validateField('province', newProperty.province).then(result => {
    onSetError('province', result);
    });
});

onUpdateField('squareMeter', event => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    squareMeter: parseFloat(value)
  };
  // VALIDADCION  
  formValidation.validateField('squareMeter', newProperty.squareMeter).then(result => {
    onSetError('squareMeter', result);
    });  
});

onUpdateField('rooms', event => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    rooms: parseFloat(value)
  };
  // VALIDADCION  
  formValidation.validateField('rooms', newProperty.rooms).then(result => {
    onSetError('rooms', result);
    }); 
});

onUpdateField('bathrooms', event => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    bathrooms: parseFloat(value)
  };
  // VALIDADCION  
  formValidation.validateField('bathrooms', newProperty.bathrooms).then(result => {
    onSetError('bathrooms', result);
    }); 
});

onUpdateField('locationUrl', event => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    locationUrl: value
  };
  // VALIDADCION  
  formValidation.validateField('locationUrl', newProperty.locationUrl).then(result => {
    onSetError('locationUrl', result);
    }); 
});

onSubmitForm('insert-feature-button', () => {
  const value = document.getElementById('newFeature').value;
  if (value) {
    const deleteId = formatDeleteFeatureButtonId(value);
    newProperty = addElement(value, newProperty, 'mainFeatures');
    onAddFeature(value);
    onSubmitForm(deleteId, () => {
      onRemoveFeature(value);
      removeElement(value, newProperty, 'mainFeatures');
    });
  }
  // VALIDADCION  
  formValidation.validateField('mainFeatures', newProperty.mainFeatures).then(result => {
    onSetError('mainFeatures', result);
    }); 
});

const addEquipment = value => {
  if (!newProperty.equipments.includes(value)) {
    newProperty = {
      ...newProperty,
      equipments: [...newProperty.equipments, value]
    };
  } else {
    newProperty = {
      ...newProperty,
      equipments: newProperty.equipments.filter(saleType => saleType !== value)
    };
  }
};
const listEquipmentList = saleTypeList => {
  saleTypeList.forEach(element => {
    const id = formatCheckboxId(element);
    onUpdateField(id, event => {
      const value = event.target.value;
      addEquipment(value);
    })
  });
};

onAddFile('add-image', value => { // add-image. el id de donde se mapea
  onAddImage(value);
  newProperty = {
    ...newProperty,
    images: [value]
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
