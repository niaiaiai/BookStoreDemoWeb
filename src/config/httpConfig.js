const config = {
  apiBaseUrl: 'http://localhost:51574/',
  // apiBaseUrl: 'https://studydemo.online:65364/',
  ids4: {
    idsAuthority: 'https://localhost:44318',
    // idsAuthority: 'https://studydemo.online:65365',
    clientId: 'js',
    scope: 'openid bookstore profile userrole offline_access',
    passwordType: 'password',
    refreshType: 'refresh_token'
  }
}

export default config