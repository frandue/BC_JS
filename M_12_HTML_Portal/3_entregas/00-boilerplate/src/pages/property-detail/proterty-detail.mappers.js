
//mapeo la casa seleccionada,
export const mapDetailFromApiToViewModel = detail => {
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
    equipments: detail.equipmentIds,  // equipments salen solo los numeros
    locationUrl: detail.locationUrl
	};  
};


const getRoomWord = rooms => {
	return rooms > 1 ? 'habitaciones' : 'habitación';
};

const getBatroomWord = bathrooms => {
  return bathrooms > 1 ? 'baños' : 'baños';
};
