import { atom } from "recoil";

export interface IUser {
  id: string;
  name: string;
}

export const user = atom<IUser>({
  key: "user",
  default: {
    id: "admin",
    name: "관리자",
  },
});
