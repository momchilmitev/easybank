import Image from "next/image";

const ToggleNavButton = ({ isOpen, setIsOpen }) => {
  let iconSrc = isOpen ? "/icons/icon-close.svg" : "/icons/icon-hamburger.svg";
  return (
    <Image
      className="app__btn--toggle"
      src={iconSrc}
      alt="mobile menu icon"
      width={isOpen ? 18 : 24}
      height={isOpen ? 19 : 11}
      onClick={() => setIsOpen(!isOpen)}
    />
  );
};

export default ToggleNavButton;
