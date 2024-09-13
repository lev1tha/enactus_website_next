import React from "react";
import Layout from "@/widget/layout";

export default async function getServerSideProps({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div>
      <Layout />
    </div>
  );
}
