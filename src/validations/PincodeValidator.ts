export const PincodeValidator = {
  isValid: (pincode: string) => {
    const regex = /^\d{6}$/
    return regex.test(pincode)
  },
}
