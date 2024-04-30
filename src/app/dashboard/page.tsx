"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";
// mock data from json
import nftData from "../api/nft.json";
import ListItem from "../components/ListItem";

export default function Dashboard() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/dashboard");
    },
  });

  const user = session?.user;

  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Welcome back {user?.name}!
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <ul role="list" className="divide-y divide-gray-100">
            {nftData.map((nft) => (
              <ListItem nft={nft} key={nft.id} />
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
