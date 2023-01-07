import { atom } from "recoil";

// import { ATOM_KEYS } from "constants/keys";
// import { LoginState } from "types/user.types";

const ATOM_KEYS = {
  USER_INFO: "userInfo",
};

interface UserType {
  userId: string;
  userName: string;
}

interface LoginState {
  isLogin: boolean;
}

const USER_STATE = atom<UserType>({
  key: ATOM_KEYS.USER_INFO,
  default: { userName: "", userId: "" },
});

export { USER_STATE };
