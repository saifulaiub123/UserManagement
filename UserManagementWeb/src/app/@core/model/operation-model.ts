import { OperationDetails } from "./operation-details-model";

export interface OperationModel {

  id? : number;
  awbNo? : string;
  airlineId? : number;
  departureId? : number;
  destinationId? : number;
  etd? : Date;
  pieces? : number;
  weight? : number;
  operationManager? : string;
  flightNo? : string;
  flightDate? : Date;
  patentNo? : string;
  patentDate? : Date;
  warehouse? : string;
  cw? : number;
  m3? : number;
  operationDetails? : OperationDetails[];
  bookingIds? : number[];
}
