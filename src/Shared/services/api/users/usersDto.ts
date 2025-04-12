export interface IRegisterResponse {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

export interface IRegisterRequest extends IRegisterResponse {
  role: string;
  id: number;
}

export interface IAuthUser {
  email: string;
  password: string;
}

export interface ITokensResponse {
  access_token: string;
  refresh_token: string;
}
