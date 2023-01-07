import { useRef } from "react";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";

import { IUser, user } from "constants/atom";

export default function Home() {
  const router = useRouter();
  const setUserState = useSetRecoilState<IUser>(user);
  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const handleAuth = () => {
    const id = idRef.current?.value;
    const name = nameRef.current?.value;

    if (!id || !name) {
      alert("모든 필드값을 채워주세요 :(");
    } else {
      setUserState({
        id,
        name,
      });
      router.push("/main");
    }
  };

  return (
    <>
      <input ref={idRef} type="text" id="id" placeholder="아이디" />
      <input ref={nameRef} type="text" id="name" placeholder="이름" />
      <button onClick={handleAuth}>로그인</button>
    </>
  );
}
