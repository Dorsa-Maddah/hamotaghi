export namespace Auth {
  export interface LoginDto {
    email: string;
    password: string;
  }

  export interface LoginResponse {
    access: string;
    refresh: string;
  }
}
