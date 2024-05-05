/* eslint-disable indent */
"use client";
import ReactPaginate from "react-paginate";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { IProductsPage } from "@/types/catalog";
import { useLang } from "@/hooks/useLang";
import { setCatalogCategoryOptions } from "@/context/catalog";
import styles from "@/styles/catalog/index.module.scss";
import skeletonStyles from "@/styles/skeleton/index.module.scss";

const ProductsPage = ({ searchParams, pageName }: IProductsPage) => {
  const { lang, translations } = useLang();

  useEffect(() => {
    switch (pageName) {
      case "catalog":
        setCatalogCategoryOptions({
          rootCategoryOptions: [
            {
              id: 2,
              title: translations[lang].main_menu.cloth,
              href: "/catalog/cloth",
            },
            {
              id: 3,
              title: translations[lang].main_menu.accessories,
              href: "/catalog/accessories",
            },
            {
              id: 4,
              title: translations[lang].main_menu.souvenirs,
              href: "/catalog/souvenirs",
            },
            {
              id: 5,
              title: translations[lang].main_menu.office,
              href: "/catalog/office",
            },
          ],
        });
        break;
      case "accessories":
        setCatalogCategoryOptions({
          accessoryCategoryOptions: [
            {
              id: 1,
              title: translations[lang].comparison.bags,
              filterHandler: () => {},
            },
            {
              id: 2,
              title: translations[lang].comparison.headdress,
              filterHandler: () => {},
            },
            {
              id: 3,
              title: translations[lang].comparison.umbrella,
              filterHandler: () => {},
            },
          ],
        });
        break;
      case "cloth":
        setCatalogCategoryOptions({
          clothCategoryOptions: [
            {
              id: 1,
              title: translations[lang].comparison["t-shirts"],
              filterHandler: () => {},
            },
            {
              id: 2,
              title: translations[lang].comparison["long-sleeves"],
              filterHandler: () => {},
            },
            {
              id: 3,
              title: translations[lang].comparison.hoodie,
              filterHandler: () => {},
            },
            {
              id: 4,
              title: translations[lang].comparison.outerwear,
              filterHandler: () => {},
            },
          ],
        });
        break;
      case "office":
        setCatalogCategoryOptions({
          officeCategoryOptions: [
            {
              id: 1,
              title: translations[lang].comparison.pen,
              filterHandler: () => {},
            },
            {
              id: 2,
              title: translations[lang].comparison.notebook,
              filterHandler: () => {},
            },
          ],
        });
        break;
      case "souvenirs":
        setCatalogCategoryOptions({
          souvenirsCategoryOptions: [
            {
              id: 1,
              title: translations[lang].comparison["business-souvenirs"],
              filterHandler: () => {},
            },
            {
              id: 2,
              title: translations[lang].comparison["promotional-souvenirs"],
              filterHandler: () => {},
            },
          ],
        });
        break;
      default:
        break;
    }
  }, [lang]);

  return (
    <>
      <motion.ul
        className={skeletonStyles.skeleton}
        style={{ marginBottom: 60 }}
      >
        {Array.from(new Array(12)).map((_, i) => (
          <li key={i} className={skeletonStyles.skeleton__item}>
            <div className={skeletonStyles.skeleton__item__light} />
          </li>
        ))}
      </motion.ul>

      <motion.ul className={`list-reset ${styles.catalog__list}`}></motion.ul>

      <div className={styles.catalog__bottom}>
        <ReactPaginate
          {...paginationProps}
          nextLabel={<span>{translations[lang].catalog.next_page}</span>}
          previousLabel={
            <span>{translations[lang].catalog.previous_page}</span>
          }
        />
      </div>
    </>
  );
};

export default ProductsPage;
