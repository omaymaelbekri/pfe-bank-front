
export interface Auth {

}
// models.ts

export interface LoginDto {
  username: string;
  password: string;
}

export interface TokenDto {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  refreshExpiresIn: number;
  tokenType: string;
  sessionState: string;
  scope: string;
}

export interface UserSignup {
  name: string;
  famillyName: string;
  email: string;
  telephone: string;
  password: string;
  confirmPassword: string;
  companyName: string;
}

export interface UserDto {
  uuid: string;
  username: string;
  name: string;
  famillyName: string;
  email: string;
  email_verified: boolean;
  groups: string[];
  idKeycloak: string;
  roles: string[][];
}
