import { BookingDetails } from "./booking-details";

export interface BookingModel {
  id? : number;
  bookingNo? :string;
  shipperId? :number;
  conalgneeId? :number;
  departureId? :number;
  destinationId? :number;
  incoTermId? :number;
  marketingAreaId? :number;
  delivery? :string;
  pickup? :string;
  airlineId? :number;
  readyDate? :string;
  pieces? :string;
  cw? :number;
  companyId? :number;
  agentId? :number;
  coloaderId? :number;
  content? :string;
  stateId? :number;
  gWeight? :number;
  m3? :number;
  mainCompanyId? :number;
  wEntryDate? : string;
  wEntryTime? : string;
  freightId? : number;
  businessModelId? :number;
  flightDeparted? :boolean;
  crdino? : boolean;
  rellefCargo? : boolean

  bookingDetails?: BookingDetails[];
}
