import data from "./SocialMediasData";
export default function HeaderSocials() {
  return (
    <div className="header__socials">
      {data.map((item) => (
        <a
          className="social"
          key={item.id}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer "
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
