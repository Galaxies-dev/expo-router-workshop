import { ApiResult, User } from '@/interfaces/user';

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch('https://dummyjson.com/users');
  const json: ApiResult = await response.json();

  return json.users;
};

export const getUserById = async (id: number): Promise<User> => {
  const response = await fetch(`https://dummyjson.com/users/${id}`);
  const json: User = await response.json();

  return json;
};
