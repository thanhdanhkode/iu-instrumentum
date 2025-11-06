const login = (
  username: string,
  password: string,
  option: { rememberMe?: boolean; method?: string } = {}
): void => {
  switch (option.method) {
    case "payload":
      break

    default: {
      const usernameInput = document.querySelector<HTMLInputElement>('input[id*="TaiKhoa"]')
      const passwordInput = document.querySelector<HTMLInputElement>('input[id*="MatKhau"]')
      const loginButton = document.querySelector<HTMLInputElement>('input[type="submit"][id*="DangNhap"]')

      if (!usernameInput || !passwordInput) return
      usernameInput.value = username
      passwordInput.value = password

      loginButton?.click()
      break
    }
  }
}

const logout = (method: string) => {
  switch (method) {
    case "":
      break

    default: {
      const logoutLink = document.querySelector<HTMLAnchorElement>('a[id*="Logout"]')

      logoutLink?.click()
      break
    }
  }
}

export interface AuthModule {
  login: {
    /**
     * Automatically log in to website using method
     * @param username - student/staff ID
     * @param password - password
     * @param option - rememberMe: whether to remember login info, method: login method
     */
    (username: string, password: string): void
    (username: string, password: string, option: { rememberMe?: boolean; method?: string }): void
  },
  /**
   * Automatically log out from website
   * @param method - logout method
   */
  logout: (method: string) => void
}

/**
 * Authentication module
 * Methods:
 * - login(): Automatically log in to website
 * - logout(): Automatically log out from website
 */
export const auth: AuthModule = { login, logout }
