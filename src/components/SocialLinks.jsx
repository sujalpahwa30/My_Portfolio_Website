import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex justify-center gap-6 mt-4">
      <a href="https://github.com/sujalpahwa30" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-3xl hover:text-gray-400 transition duration-300" />
      </a>
      <a href="https://linkedin.com/in/sujal-pahwa-358313267" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-3xl hover:text-blue-500 transition duration-300" />
      </a>
      <a href="https://twitter.com/sujal_pahwa" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-3xl hover:text-blue-400 transition duration-300" />
      </a>
    </div>
  );
};

export default SocialLinks;