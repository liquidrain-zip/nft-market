"use client";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect } from "react";

import { useSelector, useDispatch } from "@/redux/store";
import { getResources, setSelectedNFT } from "@/redux/slices/mainSlice";

import ListItem from "../components/ListItem";

export default function Dashboard() {
  const dispatch = useDispatch();
  // session
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/dashboard");
    },
  });
  const user = session?.user;
  // redirect
  const { push } = useRouter();
  const handleItemSelect = (nft: any) => {
    dispatch(setSelectedNFT(nft));
    push("/nft");
  };
  // set data
  const { NFTs } = useSelector((state) => state.nfts);
  useEffect(() => {
    dispatch(getResources());
  }, []);

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
            {NFTs.map((nft: any) => (
              <ListItem
                nft={nft}
                key={nft.id}
                handleSelect={handleItemSelect}
              />
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
