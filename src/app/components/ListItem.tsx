import { MouseEvent } from "react";

export default function ListItem({ nft }: any) {
  const handleItemClick = (e: MouseEvent): void => {
    e.preventDefault();
    console.log(nft);
  };
  return (
    <li
      id={nft.id}
      className="flex justify-between gap-x-6 py-5 list-item"
      onClick={(e) => handleItemClick(e)}
    >
      <div className="flex min-w-0 gap-x-4">
        <img
          className="h-12 w-12 flex-none rounded-full bg-gray-50"
          src={nft?.image_url}
          alt=""
        />
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {nft?.name}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            {nft?.description}
          </p>
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p className="text-sm leading-6 text-gray-900">Owner: {nft?.owner}</p>
        <p className="mt-1 text-xs leading-5 text-gray-500">
          Creator: {nft?.creator}
        </p>
      </div>
    </li>
  );
}
