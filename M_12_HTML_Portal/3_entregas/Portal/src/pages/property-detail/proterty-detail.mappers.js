// Mapeo la casa seleccionada
export const mapDetailFromApiToViewModel = (detail, equipmentList) => {
	return {
		id: detail.id,    ////
		title: detail.title,    ////
    city: detail.city,    ////
    squareMeter: detail.squareMeter,    ////
		rooms: `${detail.rooms} ${getRoomWord(detail.rooms)}`,      ////
		notes: `${detail.notes}`,    ////
		price: `${detail.price.toLocaleString()} €`,    ////
		mainImage: Array.isArray(detail.images) ? detail.images[0] : '',	// con esta comprobacion verifico que tengo un array con la imagen, sino hago esta comprobacion y no tengo imagen se romperia el codigo en este punto
    bathrooms: `${detail.bathrooms} ${getBatroomWord(detail.bathrooms)}`,     ////
    mainFeatures: detail.mainFeatures,    // Caracteristicas basicas
    equipments: mapEquipmentIdsToEquipmentNames(detail.equipmentIds, equipmentList), // Mapear los números de equipos a nombres
    locationUrl: detail.locationUrl,
    images: Array.isArray(detail.images) ? detail.images : '',
	};  
};


const getRoomWord = rooms => {
	return rooms > 1 ? 'habitaciones' : 'habitación';
};

const getBatroomWord = bathrooms => {
  return bathrooms > 1 ? 'baños' : 'baños';
};


const mapEquipmentIdsToEquipmentNames = (equipmentIds, equipmentList) => {
  const listName = [];  // Movido el array fuera del bucle

  equipmentIds.forEach(equipmentId => {
    const equipment = equipmentList.find(equipment => equipment.id === equipmentId);
    if (equipment) {
      listName.push(equipment.name);
    }
  });

  return listName;
};


export const mapContactFromViewModelToApi = (contactValue, detail) => { 
  return {
    accountId: contactValue.accountId,
    message: contactValue.message,
    email: contactValue.email,
  };
};
