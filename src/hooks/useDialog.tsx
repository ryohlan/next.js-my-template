import React, { useCallback } from 'react'
import { atom, useRecoilState, useSetRecoilState } from 'recoil'
import { Dialog, Props as DialogProps } from '../components/parts/dialogs/Dialog'

type DialogAtomType = DialogProps

const dialogAtom = atom<DialogAtomType | undefined>({ key: 'DialogAtom', default: undefined })

export const useDialog = () => {
  const set = useSetRecoilState(dialogAtom)

  return {
    show: useCallback(
      (param: DialogAtomType) => {
        set(param)
      },
      [set],
    ),
    hide: useCallback(() => {
      set(undefined)
    }, [set]),
  }
}

export const DialogProvider: React.FC = ({ children }) => {
  const [state, set] = useRecoilState(dialogAtom)
  return (
    <>
      {state ? (
        <Dialog
          type={state.type}
          message={state.message}
          buttons={state.buttons.map((button) => ({
            ...button,
            onClick: () => {
              button.onClick?.()
              set(undefined)
            },
          }))}
        />
      ) : null}
      {children}
    </>
  )
}
