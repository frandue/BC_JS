import { getPropertyDetail, getEquipmentName } from './proterty-detail.api';
import { history } from '../../core/router/history';
import { mapDetailFromApiToViewModel } from './proterty-detail.mappers';
import { setPropertyValues } from './property-detail.helpers';


// let PropertyDetail = {
//   images: '',
//   title: '',
//   city: '',
//   rooms: '',
//   squareMeter: '',
//   bathrooms: '',
//   notes: '',
//   mainFeatures: '',
//   rquipmentIds: '',
//   locationUrl: '',
// };

const params = history.getParams();

getPropertyDetail(params.id).then(apiDetail => {
  const detail = mapDetailFromApiToViewModel(apiDetail);   
  console.log(detail);
  setPropertyValues(detail);
});






