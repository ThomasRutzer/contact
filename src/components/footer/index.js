import React from 'react'
import { ContentWrapper } from '../layout'
import { InternalLink } from "../links"

export default () => (
  <footer className="bg-black">
    <ContentWrapper>
      <div className="md:grid md:grid-cols-3">
        <ul>
          <li className="text-sm inline">
            <InternalLink link="/legal/">
              Legal notice
          </InternalLink>
          </li>
          <li className="text-sm inline ml-4">
            <InternalLink link="/project-archive/">
              project archive
            </InternalLink>
          </li>
        </ul>
      </div>
    </ContentWrapper>
  </footer>
)