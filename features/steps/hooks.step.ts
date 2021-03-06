import {Before, BeforeAll, setDefaultTimeout} from '@cucumber/cucumber';
import {Arianee, NETWORK} from '../../src';
import {CCStore} from './helpers/store';

setDefaultTimeout(60 * 2 * 1000);

let singletonArianee;
BeforeAll(async () => {
  const network = <NETWORK>process.env.NETWORK || NETWORK.arianeeTestnet;
  process.env.NETWORK = network;
  singletonArianee = await new Arianee().init(network);
  console.log(`ALL E2E TESTS ARE RUN ON:${network}`);
});

Before(function () {
  this.store = new CCStore();
  this.walletFactory = () => singletonArianee;
});
