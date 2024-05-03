"use client";
import { useGate } from "effector-react";
import Hero from "@/components/modules/MainPage/Hero/Hero";
import { MainPageGate } from "@/context/goods";
import { usePageTitle } from "@/hooks/usePageTitle";

const MainPage = () => {
  useGate(MainPageGate);
  usePageTitle("main");

  return (
    <main>
      <Hero />
      <Categories />
      <NewGoods />
      <BestsellerGoods />
      <BrandLife />
    </main>
  );
};

export default MainPage;
