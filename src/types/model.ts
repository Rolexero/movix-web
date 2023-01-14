export interface SignUpModel {
  displayName: string;
  email: string;
  password: string;
}

export type SignInModel = Omit<SignUpModel, "displayName">;
