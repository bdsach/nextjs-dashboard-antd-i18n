import { getI18n } from "@/locales/server";
import React from "react";

export default async function Index() {
  const t = await getI18n();
  return (
    <div>
      <h1>{t("hello")}</h1>
    </div>
  );
}
