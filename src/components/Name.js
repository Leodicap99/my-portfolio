import { FaGithub, FaGoodreads, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Name() {
  const [text] = useTypewriter({
    words: [
      "Software Developer",
      "JavaScript",
      "TypeScript",
      "React",
      "Redux",
      "Tailwind CSS",
      "Material UI",
      "HTML",
      "CSS",
    ],
    loop: 0,
    delaySpeed: 2000,
  });

  return (
    <div className="fixed flex flex-col justify-center items-center h-screen pl-14">
      <img
        src="./my-portfolio/photo.jpg"
        alt="my pic"
        className="h-52 w-48 rounded-full object-cover border-white border-2"
      />
      <h1 className="text-amber-50 text-5xl pt-9 ">Aditya Sankara Kumar</h1>
      <div className="text-yellow-400 text-3xl pt-9 flex items-center">
        <span>{text}</span>
        <Cursor />
      </div>
      <div className="flex gap-5 mt-10">
        <a
          href="https://github.com/Leodicap99"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="h-10 w-10 text-black hover:text-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/adityaskumar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="h-10 w-10 text-black hover:text-white" />
        </a>
        <a href="mailto:adityaskumar2400@gmail.com" rel="noopener noreferrer">
          <IoIosMail className="h-10 w-10 text-black hover:text-white" />
        </a>
        <a
          href="https://www.goodreads.com/user/show/118017148-aditya-skumar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGoodreads className="h-10 w-10 text-black hover:text-white" />
        </a>
        <a
          href="https://leetcode.com/u/Leodicap99/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode className="h-10 w-10 text-black hover:text-white" />
        </a>
      </div>
    </div>
  );
}

export default Name;
