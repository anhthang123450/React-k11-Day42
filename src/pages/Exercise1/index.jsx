import UserCard from "../../components/UserCard";
import Avatar from "../../components/Avatar";

function Exercise1() {
    return (
        <div>
            <h2>UserCard:</h2>
            <UserCard name="Sơn Đặng" age={20} isVerified="abc" />
            <UserCard name="F8 Student" age={18} isVerified={false} />

            <h2>Avatar:</h2>
            <Avatar src="https://picsum.photos/200/200?rand=1" />
            <Avatar
                src="https://picsum.photos/200/200?rand=2"
                size={100}
                isRounded={false}
            />
        </div>
    );
}

export default Exercise1;
