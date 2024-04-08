import Link from "next/link";
import { useLang } from "@/hooks/useLang";

const Footer = () => {
  const { lang, translations } = useLang();

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__top__container">
          <div className="footer__logo"></div>
          <div className="footer__contacts">
            <span>
              <a href="tel:+74999998283">+7 (499) 999-82-83</a>
            </span>
            <span>
              <a href="mailto:rostelecom.merc@rt.ru">rostelecom.merc@rt.ru</a>
            </span>
          </div>

          <ul className="list-reset footer__socials">
            <li className="footer__socials__item">
              <a
                href="https://t.me/dvejer"
                className="footer__socials__item__link"
              />
            </li>
            <li className="footer__socials__item">
              <a
                href="https://vk.com"
                className="footer__socials__item__link"
              />
            </li>
            <li className="footer__socials__item">
              <a
                href="https://youtube.com"
                className="footer__socials__item__link"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottom__container">
          <div className="footer__copyright">
            © 2023 ПАО {translations[lang].footer.copyright}
            <br />
            (18+)
          </div>
          <div className="footer__policy">
            <div className="footer__policy__inner">
              <Link href="/personal-data-policy">
                {translations[lang].footer.policy}
              </Link>
              <Link href="/privacy-policy">
                {translations[lang].footer.privacy}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
