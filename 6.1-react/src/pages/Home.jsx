import APIExample from "../components/APIExample";
import APIExample2 from "../components/APIExample2";
import LoginForm from "../components/LoginForm";
import ThemeExample from "../components/ThemeExample";
import UseRef from "../hooks/UseRef";
import UseState from "../hooks/UseState";
import { Link } from "react-router";

function Home() {
  return (
    <main className="mx-auto space-y-8 py-8">
      <ThemeExample />
      <UseState />
      <UseRef />
      <hr />
      <LoginForm />
      <hr />
      <APIExample />
      <hr />
      <APIExample2 />
      <hr />
      <Link to="/about" className="underline hover:text-blue-500">
        About
      </Link>
    </main>
  );
}

export default Home;
