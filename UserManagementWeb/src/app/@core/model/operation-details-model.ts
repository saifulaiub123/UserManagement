import { BookingViewModel } from './booking-view-model';
export interface OperationDetails {
  id? :  number;
  operationId? : number;
  bookingId? : number;

  booking? : BookingViewModel;
}
