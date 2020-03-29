import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x2F41705dD9789c67c25379967740c2ADa2350350',
);

export default instance;
