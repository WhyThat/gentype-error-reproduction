@genType
let \"NotWorking" = NotWorking.make

@genType
let \"Working" = Working.make

type workaroundProps = NotWorking.props
@genType let \"Workaround": workaroundProps => React.element = NotWorking.make
