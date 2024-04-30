"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";
// mock data from json
import nftData from "../api/nft.json";

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
              <li key={nft.name} className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                  <img
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                    src={nft.image_url}
                    alt=""
                  />
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {nft.name}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {nft.description}
                    </p>
                  </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">
                    Owner: {nft.owner}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Creator: {nft.creator}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
