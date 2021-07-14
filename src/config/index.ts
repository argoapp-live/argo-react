export interface IConfig {
  urls: {
    API_URL: string;
    IMAGE_NOT_FOUND: string;
  };
  web3: {
    PAYMENT_CONTRACT_ADDRESS: string;
    ERC20_CONTRACT_ADDRESS: string;
    onboard: {
      DAPP_ID: string;
      NETWORK_ID: number;
    };
    BICONOMY_KEY: string;
    CMC_KEY: string;
    VERIFYING_MESSAGE: string;
  };
  nft: {
    NFT_CONTRACT_ADDRESS: string;
    BICONOMY_KEY: string;
    DOMAIN_SEPERATOR: string;
    SUBGRAPH: string;
  };
}

const NODE_ENV: string = "production";

const development: IConfig = {
  urls: {
    API_URL: "https://api.argoapp.live",
    IMAGE_NOT_FOUND:
      "https://image.freepik.com/free-vector/no-data-concept-illustration_114360-616.jpg",
  },
  web3: {
    PAYMENT_CONTRACT_ADDRESS: "0x113bcF2d1DeB08D295291dA8Bce33ACAD9c9A726",
    ERC20_CONTRACT_ADDRESS: "0x02546A1848EA5282dC4a01529623c10C748f1E9f",
    onboard: {
      DAPP_ID: "052b3fe9-87d5-4614-b2e9-6dd81115979a",
      NETWORK_ID: 80001,
    },
    BICONOMY_KEY: "K97155Ti7.fb32dac1-77df-404b-9e63-621d64ad6718",
    CMC_KEY: "0c5b25a6-4d37-4836-8b43-a6c575667cdd",
    VERIFYING_MESSAGE:
      "I'm the owner of this wallet and want to remove it from the organization.",
  },
  nft: {
    NFT_CONTRACT_ADDRESS: "0x919C4acaC356f830Ef13fDEAFb46157ff322CD9C",
    BICONOMY_KEY: "yMQiMZwyl.7e832681-c312-475d-a290-5ab28b3db930",
    DOMAIN_SEPERATOR: "ArGo Interactive NFT",
    SUBGRAPH: "https://api.thegraph.com/subgraphs/name/abhimanyu121/interactivenft",
  },
};

const production: IConfig = {
  urls: {
    API_URL: "http://localhost:8080",
    IMAGE_NOT_FOUND:
      "https://image.freepik.com/free-vector/no-data-concept-illustration_114360-616.jpg",
  },
  web3: {
    PAYMENT_CONTRACT_ADDRESS: "0x113bcF2d1DeB08D295291dA8Bce33ACAD9c9A726",
    ERC20_CONTRACT_ADDRESS: "0x02546A1848EA5282dC4a01529623c10C748f1E9f",
    onboard: {
      DAPP_ID: "052b3fe9-87d5-4614-b2e9-6dd81115979a",
      NETWORK_ID: 80001,
    },
    BICONOMY_KEY: "K97155Ti7.fb32dac1-77df-404b-9e63-621d64ad6718",
    CMC_KEY: "0c5b25a6-4d37-4836-8b43-a6c575667cdd",
    VERIFYING_MESSAGE:
      "I'm the owner of this wallet and want to remove it from the organization.",
  },
  nft: {
    NFT_CONTRACT_ADDRESS: "0x919C4acaC356f830Ef13fDEAFb46157ff322CD9C",
    BICONOMY_KEY: "yMQiMZwyl.7e832681-c312-475d-a290-5ab28b3db930",
    DOMAIN_SEPERATOR: "ArGo Interactive NFT",
    SUBGRAPH: "https://api.thegraph.com/subgraphs/name/abhimanyu121/interactivenft",
  },
};

const test: IConfig = {
  urls: {
    API_URL: "http://localhost:8080",
    IMAGE_NOT_FOUND:
      "https://image.freepik.com/free-vector/no-data-concept-illustration_114360-616.jpg",
  },
  web3: {
    PAYMENT_CONTRACT_ADDRESS: "0x113bcF2d1DeB08D295291dA8Bce33ACAD9c9A726",
    ERC20_CONTRACT_ADDRESS: "0xE044842Ce0A54dF5Dc11dbB962B462B28331728e",
    onboard: {
      DAPP_ID: "052b3fe9-87d5-4614-b2e9-6dd81115979a",
      NETWORK_ID: 1,
    },
    BICONOMY_KEY: "K97155Ti7.fb32dac1-77df-404b-9e63-621d64ad6718",
    CMC_KEY: "0c5b25a6-4d37-4836-8b43-a6c575667cdd",
    VERIFYING_MESSAGE:
      "I'm the owner of this wallet and want to remove it from the organization.",
  },
  nft: {
    NFT_CONTRACT_ADDRESS: "0x919C4acaC356f830Ef13fDEAFb46157ff322CD9C",
    BICONOMY_KEY: "yMQiMZwyl.7e832681-c312-475d-a290-5ab28b3db930",
    DOMAIN_SEPERATOR: "ArGo Interactive NFT",
    SUBGRAPH: "https://api.thegraph.com/subgraphs/name/abhimanyu121/interactivenft",
  },
};

const config: {
  [name: string]: IConfig;
} = {
  test,
  development,
  production,
};

export default config[NODE_ENV];
