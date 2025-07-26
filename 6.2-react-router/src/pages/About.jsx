import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col p-4 items-center">
        <h1 className="text-3xl mb-4">About</h1>
        <p className="mb-4">We are a cat company</p>
        <p className="mb-4">We love cats</p>
      </div>
    </>
  );
}

export default About;
