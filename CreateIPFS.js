import axios from "axios";

/////////////////////////////// CONFIG //////////////////////////////////////
const API_KEY = process.env.PUMPVIAL_API_KEY;
const payload = {
  image: imageString, // From the React.js example (Base64 data url)
  name: "PumpKit Memecoin",
  symbol: "PKIT",
  description: "The greatest toolkit to start shipping!",
  twitter: "https://@pumpkit_memecoin",
  telegram: "https://t.me/pumpkit_memecoin",
  website: "https://pumpkitmemecoin.com",
};
//////////////////////////////// END ////////////////////////////////////////

const createIPFS = async () => {
  const URL = "https://api.pumpvial.com/create-ipfs";

  try {
    const request = await axios.post(URL, payload, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
      },
    });

    console.log("Metadata:", request.data);
  } catch (error) {
    console.error("Error:", error);
  }
};

createIPFS();
