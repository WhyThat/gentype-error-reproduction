type not_imported = string

type props = {children: React.element, not_imported: not_imported}

@genType
let make = ({children}: props) => {
  children
}
