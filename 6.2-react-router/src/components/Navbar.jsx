import Anchor from "./Anchor";

function Navbar() {
  return (
    <nav class="bg-white flex p-4 justify-between border-gray-200">
      <Anchor to="/">
        <img src="./wurmple.png" class="mr-3 h-6 sm:h-9" alt="Logo" />
      </Anchor>
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
        <Anchor to="/">Home</Anchor>
        <Anchor to="/about">About</Anchor>
        <Anchor to="/contact">Contact</Anchor>
      </ul>
    </nav>
  );
}

export default Navbar;
