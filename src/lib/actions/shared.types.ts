export interface SignUpParams {
  username: string;
  email: string;
  password: string;
}

export interface SignInParams {
  email: string;
  password: string;
}

export interface GetProductsParams {
  query?: string;
  page?: number;
  filter?: string;
}
