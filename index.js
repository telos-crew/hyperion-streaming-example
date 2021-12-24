const HyperionStreamClient = require('@eosrio/hyperion-stream-client').default;
const fetch = require("isomorphic-fetch")

const client = new HyperionStreamClient('https://telos.caleos.io', {async: true, fetch});

client.onConnect = () => {
  client.streamActions({
    contract: 'telos.decide',
    action: 'castvote',
    account: '',
    start_from: '2019-01-01T00:00:00.000Z',
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