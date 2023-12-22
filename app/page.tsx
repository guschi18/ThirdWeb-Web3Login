"use client"
import { ThirdwebProvider } from "./components/ThirdwebProvider";
import {
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  en,
  darkTheme,
} from "@thirdweb-dev/react";
import Image from 'next/image'




export default function Home() {
  return (
    <ThirdwebProvider
      activeChain="ethereum"
      clientId="e69171b78718f67f874a3ce70c86975d"
      locale={en()}
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet({ recommended: true }),
        walletConnect(),
        localWallet(),
      ]}>
    <main className="min-h-screen bg-cover bg-center bg-[url('https://firebasestorage.googleapis.com/v0/b/login-page-b381a.appspot.com/o/background.jpg?alt=media&token=90a49f90-6cca-4202-880b-538286e65774')]">
      <div className="flex flex-row justify-between">
      <div className="m-2 font-mono text-2xl font-bold 
      bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
        Example</div>
      <div className="mt-2 mr-2">
        <Image
      src="https://firebasestorage.googleapis.com/v0/b/login-page-b381a.appspot.com/o/logo.png?alt=media&token=f7fa2874-4ff6-40cf-9e8d-f8f08591e05b"
      width={140}
      height={100}
      alt="Logo"
    /></div>
      </div>
      <div className="mr-3 flex flex-row justify-end font-mono text-lg font-bold 
      bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Web3 EngineerDE</div>
      <div className="min-h-[500px] flex flex-col items-center justify-center">
      <div className="mt-32 mb-16 font-mono text-6xl font-bold 
      bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
        ThirdWeb Web3-Login</div>
      <div className="mb-16">
        <ConnectWallet
         theme={darkTheme({
          colors: {
            modalBg: "#131418",
            dropdownBg: "#131418",
            accentText: "#ff5100",
            accentButtonBg: "#ff5100",
            borderColor: "#ff5100",
            separatorLine: "#ff5100",
            danger: "#e54d2e",
            success: "#5bb98c",
            primaryButtonBg: "#ff5100",
          },
        })}
        welcomeScreen={{
          img: {
            src: "https://firebasestorage.googleapis.com/v0/b/login-page-b381a.appspot.com/o/logo.png?alt=media&token=f7fa2874-4ff6-40cf-9e8d-f8f08591e05b",
            width: 150,
            height: 150,
          },
        }}
        modalSize={"wide"}
        /></div>
      </div>
    </main>
    </ThirdwebProvider>
  )
}
