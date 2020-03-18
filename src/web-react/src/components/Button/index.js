import React from "react"

import { Link } from "./styles"

function Button ({ to, children, outlined, ...rest }){
return <Link {...rest} outlined={outlined} to={to}>{children}</Link>
}

export {Button}