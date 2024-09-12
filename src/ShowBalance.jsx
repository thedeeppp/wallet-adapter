import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function ShowBalance() {
    const { connection } = useConnection();
    const wallet = useWallet();

    (async () => wallet.publicKey && (document.getElementById("balance").innerHTML = (await connection.getBalance(wallet.publicKey)) / LAMPORTS_PER_SOL))();
    
    return (
        <div>
            <p>SOL Balance:</p> 
            <div id="balance"></div>
        </div>
    );
}
