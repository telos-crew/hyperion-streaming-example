const HyperionStreamClient = require('@eosrio/hyperion-stream-client').default;
const fetch = require("isomorphic-fetch")

const client = new HyperionStreamClient('https://telos.caleos.io', {async: true, fetch});

client.onConnect = () => {
  client.streamActions({
    contract: 'telos.decide',
    action: '*',
    account: '',
    start_from: 1,
    read_until: 0,
    filters: [],
  });
}

let i = 1
// see 3 for handling data
client.onData = async (data, ack) => {
    console.log(i);
    i++;
    ack(); // ACK when done
}

client.connect(() => {
  console.log('connected!');
});