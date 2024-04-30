import { createSlice, Dispatch } from "@reduxjs/toolkit";
import mockdata from "@/app/json/nft.json";

interface NFT {
  name: string;
  description: string;
  image_url: string;
  owner: string;
  creator: string;
  id: string;
}

interface NFTState {
  NFTs: NFT[];
  selectedNFT: NFT;
}

const initialState: NFTState = {
  NFTs: [],
  selectedNFT: {
    name: "",
    description: "",
    image_url: "",
    owner: "",
    creator: "",
    id: "",
  },
};

const nftSlice = createSlice({
  name: "nfts",
  initialState,
  reducers: {
    getResourcesSuccess(state, action) {
      state.NFTs = action.payload;
    },
    setSelectedNFT(state, action) {
      state.selectedNFT = action.payload;
    },
  },
});

export const { getResourcesSuccess, setSelectedNFT } = nftSlice.actions;

export default nftSlice.reducer;

export function getResources() {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getResourcesSuccess(mockdata));
    } catch (error) {
      console.error("Error fetching NFT resources:", error);
    }
  };
}
