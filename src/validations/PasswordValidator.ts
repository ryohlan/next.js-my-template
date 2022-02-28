/**
 * Cognitoのデフォルトのパスワードルール
 * https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-policies.html
 */

export const PasswordValidator = {
  contains8Characters: (password: string): boolean => {
    const regex = /^\S{8,99}$/
    return regex.test(password)
  },
  containsSpecialCharacters: (password: string): boolean => {
    const regex = /.*[\^$*.\[\]{}\(\)?\-"!@#%&\/\\,><\':;|_~`]/
    return regex.test(password)
  },
  containsUpperCaseLetters: (password: string): boolean => {
    const regex = /.*[A-Z]/
    return regex.test(password)
  },
  containsNumbers: (password: string): boolean => {
    const regex = /.*[0-9]/
    return regex.test(password)
  },
  isValid: (password: string): boolean => {
    return (
      PasswordValidator.contains8Characters(password) &&
      PasswordValidator.containsSpecialCharacters(password) &&
      PasswordValidator.containsUpperCaseLetters(password) &&
      PasswordValidator.containsNumbers(password)
    )
  },
}
