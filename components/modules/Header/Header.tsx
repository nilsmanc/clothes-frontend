import { useLang } from "@/hooks/useLang";

const Header = () => {
  const { lang, translations } = useLang();

  return (
    <header className="header">
      <div className="container header_container">
        <button className="btn-reset header_burger">
          <button className="btn-reset header_burger">
            {translations[lang].header.menu_btn}
          </button>
        </button>
      </div>
    </header>
  );
};

export default Header;
