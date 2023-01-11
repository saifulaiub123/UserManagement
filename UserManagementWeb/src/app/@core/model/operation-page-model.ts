import { DestinationModel } from './destination-model';
import { AirlineModel } from "./airline-model";
import { DepartureModel } from "./departure-model";

export interface OperationPageModel {
  airlines? : AirlineModel[];
  departures? : DepartureModel[];
  destinations? : DestinationModel[];
}
