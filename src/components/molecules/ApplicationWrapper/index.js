import { useSelector } from 'react-redux'

const { REACT_APP_IDENTIFIER_MOVCAD } = process.env

export default function ApplicationWrapper({  movcad, children }) {
  const application = useSelector(state => state.application)

  if (movcad && application.name === REACT_APP_IDENTIFIER_MOVCAD) return children

  return null
}
