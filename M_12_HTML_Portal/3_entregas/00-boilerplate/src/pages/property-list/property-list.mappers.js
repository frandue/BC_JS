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
		image: Array.isArray(property.image) ? property.images[0] : '',	// con esta comprobacion verifico que tengo un array con la imagen, sino hago esta comprobacion y no tengo imagen se romperia el codigo en este punto
	};
};


const getRoomWord = rooms => {
	return rooms > 1 ? 'habitaciones' : 'habitación';
};