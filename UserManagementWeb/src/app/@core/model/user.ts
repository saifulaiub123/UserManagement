import { UserRole } from "./user-role";

export class User {
  id?: number;
  name?: string;
  email?: string;
  phoneNumber?: string;
  userRoles? : UserRole[];
}
