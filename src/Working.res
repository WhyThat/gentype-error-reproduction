type t = string
type props = {children: React.element, t: t}
@genType
let make = ({children}: props) => {
  <div> children </div>
}
