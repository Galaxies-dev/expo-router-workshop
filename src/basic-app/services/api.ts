import { ApiResult, User } from '@/interfaces/user';

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch('https://dummyjson.com/users');
  const json: ApiResult = await response.json();

  return json.users;
};
