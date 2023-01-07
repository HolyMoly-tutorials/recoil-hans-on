export default function Home() {
    const handleAuth = () => {
        console.log("login");
    };
    return (
        <>
            <input type="text" name="id" placeholder="아이디" />
            <input type="text" name="name" placeholder="이름" />
            <button>로그인</button>
        </>
    );
}
