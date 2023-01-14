export interface SignUpModel {
  full_name: string;
  email: string;
  password: string;
}

export type SignInModel = Omit<SignUpModel, "full_name">;
