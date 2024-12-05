const CONFIG = {
    KEY: process.env.KEY,
    BASE_URL: 'https://api.themoviedb.org/3/',
    BASE_IMAGE_URL: 'https://image.tmdb.org/t/p/w500/',
    DEFAULT_LANGUAGE: 'en-us',

    DATABASE_NAME: process.env.DATABASE_NAME,
    DATABASE_VERSION: process.env.DATABASE_VERSION,
    OBJECT_STORE_NAME: process.env.OBJECT_STORE_NAME,

    WEB_SOCKET_SERVER: 'wss://stormy-badlands-06326.herokuapp.com',

    PUSH_MSG_VAPID_PUBLIC_KEY: 'BN7-r0Svv7CsTi18-OPYtJLVW0bfuZ1x1UtrygczKjennA_qs7OWmgOewcuYSYF3Gc_mPbqsDh2YoGCDPL0RxDQ',
    PUSH_MSG_SUBSCRIBE_URL: 'https://dicoding-movie-push-notif.netlify.app/.netlify/functions/subscribe',
    PUSH_MSG_UNSUBSCRIBE_URL: 'https://dicoding-movie-push-notif.netlify.app/.netlify/functions/unsubscribe',
};

export default CONFIG;