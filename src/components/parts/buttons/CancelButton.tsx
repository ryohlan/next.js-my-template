import { Button } from './Button'

type Props = {
  onClick: () => void
}

export const CancelButton: React.FC<Props> = (props) => {
  return (
    <Button className="bg-gradient-to-b from-neutral-700 to-neutral-800" onClick={props.onClick}>
      {props.children}
    </Button>
  )
}
