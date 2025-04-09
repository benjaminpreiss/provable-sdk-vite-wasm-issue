import {
	Account,
	AleoNetworkClient
	//initThreadPool,
} from '@provablehq/sdk';

export async function initClient() {
	// Enables multithreading
	//await initThreadPool();
	const account = new Account({
		privateKey: 'APrivateKey1zkp8CZNn3yeCseEtxuVPbDCwSyhGW6yZKUYKfgXmcpoGPWH'
	});
	const networkClient = new AleoNetworkClient('http://0.0.0.0:3030', { headers: {} });
	networkClient.setAccount(account);
	const lastBlockHeight = await networkClient.getLatestHeight();
	return lastBlockHeight;
}
