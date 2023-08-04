export const mapPropertyListFromApiToViewModel = (propertyList) => {
	return propertyList.map(property => mapPropertyFromApiToViewModel(property));
};

//mapeo una sola entidad, esto tengo que exportarlo a la lista
const mapPropertyFromApiToViewModel = property => {
	return {
		id: property.id,
		title: property.title,
		rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
		squereMeter: `${property.squereMeter}m2`,
		notes: `${property.notes.substring(0, 240)}...`,//metodo substring de js, para ver la documentacion mdn y le añado los 3 puntos
		price: `${property.price.toLocaleString()} €`,//Lo hago con el metodo toLocaleString
		image: Array.isArray(property.images) ? property.images[0] : '',	// con esta comprobacion verifico que tengo un array con la imagen, sino hago esta comprobacion y no tengo imagen se romperia el codigo en este punto
	};
};


const getRoomWord = rooms => {
	return rooms > 1 ? 'habitaciones' : 'habitación';
};

export const mapFilterToQueryParams = filter => {
	let queryParams = '';

	if(filter.saleTypeId) {
		queryParams = `${queryParams}saleTypeId_like=${filter.saleTypeId}&`;
	}

	if(filter.provinceId) {
		queryParams = `${queryParams}provinceId=${filter.provinceId}&`;
	}

	if(filter.minRooms) {
		queryParams = `${queryParams}rooms_gte=${filter.minRooms}&`;
	}

	if(filter.minBathRooms) {
		queryParams = `${queryParams}bathrooms_gte=${filter.minBathRooms}&`;
	}

	if(filter.minPrice) {
		queryParams = `${queryParams}price_lte=${filter.minPrice}&`;
	}

	if(filter.maxPrice) {
		queryParams = `${queryParams}price_gte=${filter.maxPrice}&`;
	}

	return queryParams.slice(0, -1);
};