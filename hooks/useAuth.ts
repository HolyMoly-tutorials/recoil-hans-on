import { useResetRecoilState, useRecoilState } from "recoil";

import { USER_STATE } from "state";

const useAuth = () => {
  const [{ userName, userId }, setAuth] = useRecoilState(USER_STATE);

  return {
    userName,
    userId,
    setAuth,
  };
};

export default useAuth;
