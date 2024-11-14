import React from "react";
import { getI18n } from "@/locales/server";

export default async function SayHelloTo({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const t = await getI18n();
  const name = (await params).name;
  return <h1>{t("welcome", { name: name })}</h1>;
}
