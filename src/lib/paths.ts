export default {
  base: "https://oauth.pasby.africa/api/v1/".replace(/\/+$/, ""),
  endpoint: {
    login: '/oidc/kipindi',
    handshake: '/oidc/kupeana',
    resource: '/oidc/resource',
  }
}