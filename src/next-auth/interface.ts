export type AuthUser = {
  id: string;
  email: string;
  name: string;
  credentialsToken: string;
};

export type AuthToken = {
  userId: string;
  CredentialsToken?: string;
};

export type AuthSession = {
  user: {
    id: string;
    email?: string | null;
    name?: string | null;
  };
  expires: string;
};
