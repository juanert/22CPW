import Anchor from "../components/Anchor";

function NotFound() {
  return (
    <div className="flex flex-col p-4 items-center">
      <h1>404</h1>
      <p>Page not found</p>
      <Anchor to="/">Home</Anchor>
    </div>
  );
}

export default NotFound;
