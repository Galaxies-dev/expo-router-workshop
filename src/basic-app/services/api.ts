import { ApiResult, User } from '@/interfaces/user';

const API = process.env.EXPO_PUBLIC_API_URL;

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch(`${API}/users`);
  const json: ApiResult = await response.json();

  return json.users;
};

export const getUserById = async (id: number): Promise<User> => {
  const response = await fetch(`${API}/users/${id}`);
  const json: User = await response.json();

  return json;
};
