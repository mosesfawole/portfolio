import socials from "../lib/socials";
const Footer = () => {
  return (
    <>
      <div className="flex items-center  justify-center">
        <div className="flex items-center  ">
          <ul className="flex">
            {socials.map((social, index) => (
              <li
                className="font-barlow text-[#D0D6F9] hover:text-white "
                key={index}
              >
                <a
                  rel="noreferrer"
                  href={social.href}
                  target="_blank"
                  noreferrer="true"
                  className=" flex items-center gap-4"
                >
                  <img src={social.logo} />
                  <p className="animate-pulse text-xl">{social.name}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
