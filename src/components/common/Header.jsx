"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import "react-modern-drawer/dist/index.css";
import Button from "../ui/Button";
import { languages } from "@/data/languages";
import MobileDrawer from "./MobileDrawer";
import { useLocale, useTranslations } from "next-intl";

import { useTransition } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { Link } from "@/i18n/routing";

const Header = () => {
  const t = useTranslations("Header");

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isPending, startTransition] = useTransition();
  const localActive = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const onSelectChange = (e) => {
    const nextLocale = e.target.value;

    startTransition(() => router.replace(`/${nextLocale}`));
  };

  return (
    <header
      className={`sticky top-0 z-[1000] bg-white py-[10px] shadow ease-in-out ${scrolling ? "bg-gray-800 py-2" : "bg-transparent py-8"}`}
    >
      <nav className="container flex items-center justify-between">
        <div className="flex basis-1/4 items-center justify-start">
          <Link href="/">
            <Image
              className={`w-auto transition-all duration-300 ease-in-out ${scrolling ? "h-10" : "h-16"}`}
              src="/images/Logo.png"
              width={52}
              height={39}
              alt="Hire and Fire"
            />
          </Link>
        </div>
        <div className="hidden basis-1/2 lg:block">
          <ul className="flex justify-center text-sm font-medium">
            <li className="px-4">
              <Link
                className={`${pathname === "/about-us" ? "text-primary" : ""} duration-200 hover:text-primary`}
                href="/about-us"
              >
                {t("About_Us")}
              </Link>
            </li>
            <li className="group relative px-4">
              <p className="flex cursor-pointer duration-200 hover:text-primary">
                {t("Employers")} <MdKeyboardArrowDown className="text-xl" />
              </p>

              {/* submenus */}

              <ul className="animate-fadeIn absolute top-5 hidden w-56 space-y-4 rounded-lg border bg-white p-4 shadow-2xl hover:block group-hover:block">
                <li>
                  <Link
                    className={`${pathname === "/employers/employment-service" ? "text-primary" : ""} flex hover:text-primary`}
                    href="/employers/employment-service"
                  >
                    <IoMdArrowDropright className="text-xl" />
                    {t("Employment_Service")}
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${pathname === "/employers/additional-support" ? "text-primary" : ""} flex hover:text-primary`}
                    href="/employers/additional-support"
                  >
                    <IoMdArrowDropright className="text-xl" />
                    {t("Additional_Support")}
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${pathname === "/employers/partnerships-programs" ? "text-primary" : ""} flex hover:text-primary`}
                    href="/employers/partnerships-programs"
                  >
                    <IoMdArrowDropright className="text-xl" />
                    {t("Partnerships_Programs")}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="group relative px-4">
              <p className="flex cursor-pointer duration-200 hover:text-primary">
                {t("Hire_Worker")} <MdKeyboardArrowDown className="text-xl" />
              </p>

              {/* submenus */}
              <ul className="animate-fadeIn absolute top-5 hidden w-44 space-y-4 rounded-lg border bg-white p-4 shadow-2xl hover:block group-hover:block">
                <li>
                  <Link
                    className={`${pathname === "/hire-worker/our-process" ? "text-primary" : ""} flex hover:text-primary`}
                    href="/hire-worker/our-process"
                  >
                    <IoMdArrowDropright className="text-xl" />
                    {t("Our_Process")}
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${pathname === "/hire-worker/request-talent" ? "text-primary" : ""} flex hover:text-primary`}
                    href="/hire-worker/request-talent"
                  >
                    <IoMdArrowDropright className="text-xl" />
                    {t("Request_Talent")}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="px-4">
              <Link
                className={`${pathname === "/industry" ? "text-primary" : ""} duration-200 hover:text-primary`}
                href="/industry"
              >
                {t("Industry")}
              </Link>
            </li>
            <li className="group relative px-4">
              <p className="flex cursor-pointer duration-200 hover:text-primary">
                {t("Resources")} <MdKeyboardArrowDown className="text-xl" />
              </p>

              {/* submenus */}
              <ul className="animate-fadeIn absolute top-5 hidden w-44 space-y-4 rounded-lg border bg-white p-4 shadow-2xl hover:block group-hover:block">
                <li>
                  <Link
                    className={`${pathname === "/resources/faq" ? "text-primary" : ""} duration-20 0 flex hover:text-primary`}
                    href="/resources/faq"
                  >
                    <IoMdArrowDropright className="text-xl" />
                    {t("FAQ")}
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${pathname === "/resources/blog" ? "text-primary" : ""} duration-20 0 flex hover:text-primary`}
                    href="/resources/blog"
                  >
                    <IoMdArrowDropright className="text-xl" />
                    {t("Blog")}
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="hidden basis-1/4 items-center justify-end gap-2 lg:flex">
          <Link href="/contact-us">
            <Button>{t("Contact_Us")}</Button>
          </Link>

          <select
            defaultValue={localActive}
            onChange={onSelectChange}
            className="cursor-pointer rounded-md border-none bg-white px-4 py-2 text-sm text-gray-700 ring-2 focus:ring-2 focus:ring-blue-500"
            disabled={isPending}
          >
            {languages.map((language) => (
              <option value={language.code} key={language.value}>
                {language.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex basis-1/4 items-center justify-end lg:hidden">
          <button
            className="ml-auto rounded-md border-2 p-1"
            onClick={toggleDrawer}
          >
            <FaBars className="text-xl text-secondary duration-200 hover:text-primary" />
          </button>
        </div>
      </nav>

      <MobileDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </header>
  );
};

export default Header;

// className = "sticky top-0 z-[1000] bg-white py-[10px] shadow";
