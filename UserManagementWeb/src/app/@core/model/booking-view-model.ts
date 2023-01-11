import { BookingDetails } from "./booking-details";

export interface BookingViewModel {
      id? : number;
      bookingNo? : string;
      shipperId? : number;
      shipperName? : string;
      conalgneeId? : number;
      conalgneeName? : string;
      departureId? : number;
      departureName? : string;
      destinationId? : number;
      destinationName? : string;
      incoTermId? : number;
      incoTermName? : string;
      marketingAreaId?: number;
      marketingAreaName? : string;
      delivery? : string;
      pickup? : string;
      airlineId? : number;
      airlingName? : string;
      readyDate? : Date;
      pieces? : number;
      cw? : number;
      companyId? : number;
      companyName? : string;
      agentId? : number;
      agentName? : string;
      coloaderId? : number;
      coloaderName? : string;
      content? : string;
      stateId? : number;
      stateName? : string;
      gWeight? : number;
      m3? : number;
      mainCompanyId? : number;
      mainCompanyName? : string;
      wEntryDate? : Date;
      wEntryTime? : Date;
      freightId? : number;
      freightName? : string;
      businessModelId? : number;
      businessModelName? : string;
      flightDeparted? : number;
      flightDepartedName? : string;
      ordino? : boolean;
      rellefCargo? : boolean;

      cApp? : string;
      kongimento? : string;
      etd? : string;
      wd? : string;
      wt? : string;
      fd? : string;

      bookingDetails?: BookingDetails[];
}
