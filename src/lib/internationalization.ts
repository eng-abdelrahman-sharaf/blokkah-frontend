import { type NextRequest, NextResponse } from "next/server";
import path from "path";


export const languageNames = {"en": "English", "ar": "العربية"};
export const  locales = Object.keys(languageNames);

const defaultLocale = "ar";

export function addLocaleToPathName(pathname: string , locale : string = "ar") { 
  return `/${locale}/${pathname}`
}

export function getPathNameWithoutLocale(pathname: string) {
  return locales.reduce((acc, locale) => {
    return acc.replace(`/${locale}/`, "/");
  }, pathname);
}

export function getPathNameLocale(pathname: string) {
  return locales.find(
    (locale) => pathname.startsWith(`/${locale}/`)
  )
}

export const internMatcher = [
  "/buyer",
];
