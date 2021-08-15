import Pusher from 'pusher';

const pusher = new Pusher({
    appId: '1069466',
    key: '677b8b7173a61104c2be',
    secret: 'bd725dad32f6d4d33bf5',
    cluster: 'eu',
    encrypted: true
  });

  export default pusher;