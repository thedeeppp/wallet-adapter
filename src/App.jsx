import React, {useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter, PhantomWalletAdapter} from '@solana/wallet-adapter-wallets';

import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import './App.css'
import {ShowTokens, TransferToken} from './SendToken'
import {SendToken} from './SendSol'
import {SignMessage} from './SignMessage'
import {Airdrop} from './Airdrop';
import { ShowBalance } from './ShowBalance';

const App = () => {
    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
    const network = WalletAdapterNetwork.Devnet;

    // You can also provide a custom RPC endpoint.
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),
            new UnsafeBurnerWalletAdapter(),
        ],
        [network]
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    
                    { /* Your app's components go here, nested within the context providers. */ }
                    <div className='app-container'>

                    <div className='wallet-buttons'>
                        <WalletMultiButton/>
                        <WalletDisconnectButton/>
                    </div>
                        <Airdrop/>
                        <ShowBalance/>
                        <div className='wallet-buttons'>
                    <SignMessage/>
                        </div>.
                        <SendToken/>
                    <ShowTokens/>
                    <TransferToken/>
                    </div>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default App