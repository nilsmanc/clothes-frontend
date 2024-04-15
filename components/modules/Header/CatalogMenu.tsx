"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useLang } from "@/hooks/useLang";
import Header from "./Header";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const CatalogMenu = () => {
  const [activeListId, setActiveListId] = useState(0);
  const { lang, translations } = useLang();

  const isMedia450 = useMediaQuery(450);

  const handleCloseMenu = () => {
    setActiveListId(0);
  };

  const isActiveList = (id: number) => activeListId === id;

  const items = [
    {
      name: translations[lang].main_menu.cloth,
      id: 1,
      items: [
        translations[lang].comparison["t-shirts"],
        translations[lang].comparison["long-sleeves"],
        translations[lang].comparison.hoodie,
        translations[lang].comparison.outerwear,
      ],
      handler: () => setActiveListId(1),
    },
    {
      name: translations[lang].main_menu.accessories,
      id: 2,
      items: [
        translations[lang].comparison.bags,
        translations[lang].comparison.headdress,
        translations[lang].comparison.umbrella,
      ],
      handler: () => setActiveListId(2),
    },
    {
      name: translations[lang].main_menu.souvenirs,
      id: 3,
      items: [
        translations[lang].comparison["business-souvenirs"],
        translations[lang].comparison["promotional-souvenirs"],
      ],
      handler: () => setActiveListId(3),
    },
    {
      name: translations[lang].main_menu.office,
      id: 4,
      items: [
        translations[lang].comparison.notebook,
        translations[lang].comparison.pen,
      ],
      handler: () => setActiveListId(4),
    },
  ];
  return (
    <div className="catalog-menu">
      <AnimatePresence>
        <motion.aside
          initial={{ width: 0 }}
          animate={{
            width: "100%",
          }}
          exit={{
            width: 0,
            transition: { delay: 0.7, duration: 0.3 },
          }}
          className="catalog-menu__aside"
        >
          <div className="catalog-menu__header">
            <Header />
          </div>
          <motion.div
            className="catalog-menu__inner"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sideVariants}
          >
            <motion.button
              className="btn-reset catalog-menu__close"
              variants={itemVariants}
              onClick={handleCloseMenu}
            />
            <motion.h2 variants={itemVariants} className="catalog-menu__title">
              {translations[lang].main_menu.catalog}
            </motion.h2>
          </motion.div>
        </motion.aside>
      </AnimatePresence>
    </div>
  );
};

export default CatalogMenu;
