import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Input from "../components/Input";

function About() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col p-4 items-center">
        <h1 className="text-3xl mb-4">Contact</h1>
        <form className="flex flex-col items-center gap-2">
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Input type="text" placeholder="Subject" />
          <Input type="textarea" placeholder="Message" />
          <Button>Send</Button>
        </form>
      </div>
    </>
  );
}

export default About;
