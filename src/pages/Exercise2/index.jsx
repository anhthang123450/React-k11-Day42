import useLocalStorage from "../../hooks/useLocalStorage";

function Exercise2() {
    const [name, setName] = useLocalStorage("name", "F8 User");
    const [phone, setPhone] = useLocalStorage("phone", "012345678");
    const [email, setEmail] = useLocalStorage("email", "thang@gmail.com");

    return (
        <div>
            <div>
                <label htmlFor="">
                    Tên:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <p> {name}!</p>
                </label>
            </div>

            <div>
                <label htmlFor="">
                    SĐT:
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <p> {phone}!</p>
                </label>
            </div>

            <div>
                <label htmlFor="">
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p> {email}!</p>
                </label>
            </div>
        </div>
    );
}

export default Exercise2;
