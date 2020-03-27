import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x615C1cd7729bCE1fD68f07c2B4eb2cA5aeEC1f7f',
);

export default instance;
