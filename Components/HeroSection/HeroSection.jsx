import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";

// INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import images from "../../assets";
import { Token, SearchToken } from "../index";

import { SwapTokenContext } from "../../Context/SwapContext";

const HeroSection = () => {
    //UseState
    const [openSetting, setOpenSetting] = useState(false);
    const [openToken, setOpenToken] = useState(false);
    const [openTokenTwo, setOpenTokenTwo] = useState(false);

    const { singleSwapToken , tokenData , account , connectWallet , ether , dai } = useContext(SwapTokenContext);

    //Token 1
    const [tokenOne, setTokenOne] = useState({
        name: "",
        image: "",
    });

    //Token 2
    const [tokenTwo, setTokenTwo] = useState({
        name: "",
        image: "",
    });

    return (
        <div className={Style.HeroSection}>
            <div className={Style.HeroSection_box}>
                <div className={Style.HeroSection_box_heading}>
                    <p>Swap</p>
                    <div className={Style.HeroSection_box_heading_img}>
                        <Image
                            src={images.close}
                            alt="image"
                            width={50}
                            height={50}
                            onClick={() => setOpenSetting(true)}
                        />
                    </div>
                </div>

                <div className={Style.HeroSection_box_input}>
                    <input type="text" placeholder="0" />
                    <button onClick={() => setOpenToken(true)}>
                        <Image
                            src={images.image || images.etherlogo}
                            width={20}
                            height={20}
                            alt="ether"
                        />
                        {tokenOne.name || "ETH"}
                        <small>{ether.slice(0 , 7)}</small>
                    </button>
                </div>
                <div className={Style.HeroSection_box_input}>
                    <input type="text" placeholder="0" />
                    <button onClick={() => setOpenTokenTwo(true)}>
                        <Image
                            src={tokenTwo.image || images.etherlogo}
                            width={20}
                            height={20}
                            alt="ether"
                        />
                        {tokenTwo.name || "ETH"}
                        <small>{dai.slice(0 , 7)}</small>
                    </button>
                </div>

                {account ? (
                    <button
                        className={Style.HeroSection_box_btn}
                        onClick={() => singleSwapToken()}
                    >
                        Swap
                    </button>
                ) : (
                    <button
                        onClick={() => connectWallet()}
                        className={Style.HeroSection_box_btn}
                    >
                        Connect Wallet
                    </button>
                )}
            </div>

            {openSetting && <Token setOpenSetting={setOpenSetting} />}

            {openToken && (
                <SearchToken
                    openToken={setOpenToken}
                    tokens={setTokenOne}
                    tokenData={tokenData}
                />
            )}
            {openTokenTwo && (
                <SearchToken
                    openToken={setOpenTokenTwo}
                    tokens={setTokenTwo}
                    tokenData={tokenData}
                />
            )}
        </div>
    );
};

export default HeroSection;