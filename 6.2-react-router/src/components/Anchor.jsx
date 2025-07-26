import { Link } from "react-router";

function Anchor({ to, children }) {
  return (
    <Link
      to={to}
      className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
      {children}
    </Link>
  );
}

export default Anchor;
