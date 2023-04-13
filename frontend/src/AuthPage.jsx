import axios from "axios";

const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios
      .post("http://localhost:3001/authenticate", { username: value })
      .then((r) => props.onAuth({ ...r.data, secret: value }))
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>Welcome</div>

        <div>Set a username to get started</div>

        <div>
          <div>Username</div>
          <input name="username" />
          <button type="submit">Enter</button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
