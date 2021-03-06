import React from "react"
import { Link } from "gatsby"

const InternalLink = ({ children, link }) => (
  <Link
    className="internal-link text-secondary-lighter text-sm"
    to={link}
    activeClassName="internal-link--active"
  >
    {children}
  </Link>
)

export default InternalLink
