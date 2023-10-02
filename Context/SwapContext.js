import React, { useState, useEffect } from "react";
import { ethers, BigNumber } from "ethers";
import Web3Modal from "web3modal";

//  INTERNAL IMPORT
import {
    checkIfWalletConnected,
    connectWallet,
    connectingWithBooToken,
    connectingWithLifeToken,
    connectingWithSingleSwapToken,
    connectingWithIWETHToken,
    connectingWithDAIToken,
} from "../Utils/appFeatures";

import { IWETHABI } from "./constants";
import ERC20 from "./ERC20.json";

export const SwapTokenContext = React.createContext();

export const SwapTokenContextProvider = ({ children }) => {
    ///  USESTATE
    const [account, setAccount] = useState("");
    const [ether, setEther] = useState("");
    const [networkConnect, setNetworkConnect] = useState("");
    const [weth9, setWeth9] = useState("");
    const [dai, setDai] = useState("");

    const [tokenData, setTokenData] = useState([]);

    const addToken = [
        "0x9D3999af03458c11C78F7e6C0fAE712b455D4e33",
        "0xc4Fe39a1588807CfF8d8897050c39F065eBAb0B8",
    ];

    // FETCH DATA
    const fetchingData = async () => {
        try {
            // GET USER ACCOUNT
            const userAccount = await checkIfWalletConnected();
            setAccount(userAccount);
            //CREATE PROVIDER
            const web3modal = new Web3Modal();
            const connection = await web3modal.connect();
            const provider = new ethers.providers.Web3Provider(connection);
            // CHECK Balance
            const balance = await provider.getBalance(userAccount);
            const convertBal = BigNumber.from(balance).toString();
            const ethValue = ethers.utils.formatEther(convertBal);
            setEther(ethValue);

            // GET NETWORK
            const network = await provider.getNetwork();
            //console.log(network);
            setNetworkConnect(network.name);

            //All TOKEN BALANCE AND DATA
            addToken.map(async (el, i) => {
                //GETTING CONTRACT
                const contract = new ethers.Contract(el, ERC20, provider);
                //GETTING BALANCE OF TOKEN
                const userBalance = await contract.balanceOf(userAccount);
                const tokenLeft = BigNumber.from(userBalance).toString();
                const convertTokenBal = ethers.utils.formatEther(tokenLeft);

                // GET NAME AND SYMBOL
                const symbol = await contract.symbol();
                const name = await contract.name();

                tokenData.push({
                    name: name,
                    symbol: symbol,
                    tokenBalance: convertTokenBal,
                });
            });

            // WETH Balance
            const wethContract = await connectingWithIWETHToken();
            const wethBal = await wethContract.balanceOf(userAccount);
            const wethToken = BigNumber.from(wethBal).toString();
            const convertwethTokenBal = ethers.utils.formatEther(wethToken);
            setWeth9(convertwethTokenBal);

            // DAI Balance
            const daiContract = await connectingWithDAIToken();
            const daiBal = await daiContract.balanceOf(userAccount);
            const daiToken = BigNumber.from(daiBal).toString();
            const convertdaiTokenBal = ethers.utils.formatEther(daiToken);
            setDai(convertdaiTokenBal);
        } catch (error) {
            console.log(error);
        }
    };

    // useEffect(() => {
    //     fetchingData();
    // }, []);



    // Single Swap Token
    const singleSwapToken = async () => {
        try {
            let singleSwapToken;
            let weth;
            let dai;

            singleSwapToken = await connectingWithSingleSwapToken();
            weth = await connectingWithIWETHToken();
            dai = await connectingWithDAIToken();

            const amountIn = 10n ** 18n;

            await weth.deposit({ value : amountIn });
            await weth.approve(singleSwapToken.address , amountIn);

            // SWAP
            await singleSwapToken.swapExactInputSingle( amountIn , {
                gasLimit: 300000,
            });

            const balance = await dai.balanceOf(account);
            const transferAmount = BigNumber.from(balance).toString();
            const ethValue = ethers.utils.formatEther(transferAmount);
            setDai(ethValue);
            console.log(" DAI balance :  " , ethValue);

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <SwapTokenContext.Provider
            value={{
                singleSwapToken,
                tokenData,
                connectWallet,
                account,
                weth9,
                dai,
                networkConnect,
                ether,
            }}
        >
            {children}
        </SwapTokenContext.Provider>
    );
};