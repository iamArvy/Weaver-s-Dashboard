import type { AuthForm, AuthResponse, RegisterForm, User } from "~/types";

export const sampleUser = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  avatar: "",
  email_verified_at: null,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
};

export const sampleAccessToken = {
  token: "sample-access-token",
  expiry: 2, //in hours
};

export const mockLogin = (
  data: AuthForm
): AuthResponse | PromiseLike<AuthResponse> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.email === sampleUser.email && data.password === "password") {
        resolve({
          user: sampleUser,
          access: sampleAccessToken,
        });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 1000);
  });

export const mockRegister = (
  data: RegisterForm
): AuthResponse | PromiseLike<AuthResponse> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        data.email &&
        data.password &&
        data.name &&
        data.password_confirmation
      ) {
        resolve({
          user: sampleUser,
          access: sampleAccessToken,
        });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 1000);
  });

export const mockGetUser = (
  access_token: string
): { user: User } | PromiseLike<{ user: User }> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (access_token === sampleAccessToken.token) {
        resolve({ user: sampleUser as User });
      } else {
        reject(new Error("Invalid access token"));
      }
    });
  });
