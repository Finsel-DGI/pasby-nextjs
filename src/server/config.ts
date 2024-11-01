export default {
  secret: process.env.PASBY_CLIENT_SECRET ?? '',
  apikey: process.env.PASBY_CONSUMER_KEY ?? '',
  appid: process.env.PASBY_CLIENT_ID ?? '',
  gen: process.env.SECRET_GEN ?? '',
  loginReturnPath: process.env.PASBY_LOGIN_REDIRECT ?? '',
}