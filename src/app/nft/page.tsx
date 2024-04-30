"use client";
import { useSelector } from "@/redux/store";
import ItemDesc from "../components/ItemDesc";

export default function NFTpage() {
  const { selectedNFT } = useSelector((state) => state.nfts);
  return (
    <>
      <ItemDesc nft={selectedNFT} />
    </>
  );
}
