const SESSION_STORAGE_KEY = {
  ACCESS_TOKEN: 'ACCESS_TOKEN',
  ACCESS_TOKEN_EXPIRES_IN: 'ACCESS_TOKEN_EXPIRES_IN',
  REFRESH_TOKEN: 'REFRESH_TOKEN',
}
export const AuthorizationTokenStore = {
  set: (params: { accessToken: string; refreshToken: string; expiredIn: number }) => {
    window.sessionStorage.setItem(SESSION_STORAGE_KEY.ACCESS_TOKEN, params.accessToken)
    window.sessionStorage.setItem(SESSION_STORAGE_KEY.REFRESH_TOKEN, params.refreshToken)
    window.sessionStorage.setItem(SESSION_STORAGE_KEY.ACCESS_TOKEN_EXPIRES_IN, `${params.expiredIn}`)
  },
  getAccessToken: async (): Promise<string | undefined> => {
    const accessToken = window.sessionStorage.getItem(SESSION_STORAGE_KEY.ACCESS_TOKEN)
    const refreshToken = window.sessionStorage.getItem(SESSION_STORAGE_KEY.REFRESH_TOKEN)
    const expiresIn = parseInt(
      window.sessionStorage.getItem(SESSION_STORAGE_KEY.ACCESS_TOKEN_EXPIRES_IN) ?? '0',
      10,
    )
    // TODO：アクセストークンとリフレッシュトークンがある場合に有効の場合はそのまま、期限切れの場合はRefreshしてかトークンを返す。
    return accessToken && refreshToken && expiresIn > 0 ? accessToken : undefined
  },
}
