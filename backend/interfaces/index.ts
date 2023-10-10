
export interface IResponse {
    users: IUser[];
    message: string;
}
  
export interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface UserId  {
    _id?: number
}