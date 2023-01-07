import { useRecoilValue } from "recoil";
import { IUser, user } from "constants/atom";

export default function Main() {
  const { id, name } = useRecoilValue<IUser>(user);

  return (
    <main>
      <h1>메인페이지입니다.</h1>

      <p>사용자 이름 : {name}</p>
      <p>사용자 아이디 : {id}</p>
    </main>
  );
}
