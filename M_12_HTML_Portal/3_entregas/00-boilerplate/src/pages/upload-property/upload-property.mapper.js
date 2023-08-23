export const mapPropertyFromViewModelToApi = (propertyValue) => { 
  return {
    Id: propertyValue.accountId,
    title: propertyValue.title,
    notes: propertyValue.notes,
    email: propertyValue.email,
    phone: propertyValue.phone,
    price: propertyValue.price,
    saleTypeIds: propertyValue.saleTypes,
    address: propertyValue.address,
    city: propertyValue.city,
    provinceId: propertyValue.province ,
    squareMeter: propertyValue.squareMeter,
    rooms: propertyValue.rooms,
    bathrooms: propertyValue.bathrooms,
    locationUrl: propertyValue.locationUrl,
    mainFeatures: propertyValue.mainFeatures,
    equipmentIds: propertyValue.equipments,
    images: propertyValue.images,
  };
};
