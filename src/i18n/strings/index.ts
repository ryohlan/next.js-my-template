import en from './en.json'
import ja from './ja.json'

export const strings: Record<string, any> = {
  ja,
  en,
}

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: keyof typeof en
    }
  }
}
