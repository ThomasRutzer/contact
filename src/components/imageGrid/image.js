import React, { useMemo } from "react"
import classnames from "classnames"
import Img from "gatsby-image"

const Image = ({ src, alt, fit = "cover", tiles, index, offsetX = 0, offsetY = 0 }) => {
  const createTilesClasses = useMemo(() => classnames({
    [`col-start-${index % 2 === 0 ? "1" : "2"} col-span-5`]: true,
    [`md:col-start-${tiles[0][0]}`]: true,
    [`md:col-span-${tiles[0][1]}`]: true,
    [`md:row-start-${tiles[1][0]}`]: true,
    [`md:row-span-${tiles[1][1]}`]: true
  }), [index, tiles])

  return (
    <div
      style={{
        transform: `translate(${offsetX}px, ${offsetY}px)`
      }}
      className={
        `${createTilesClasses} 
        overflow-hidden
        mt-${index === 0 ? "0" : "4"} md:mt-0
        flex items-center flex-col
        transition-transform duration-1000 delay-${index * 75} ease-in`
      }>
      <Img
        className="w-full"
        imgStyle={{
          "objectFit": fit
        }}
        fluid={src.childImageSharp.fluid}
        alt={alt} />
      <figcaption className="px-1 text-xs italic text-center text-grey-lighter mt-2">
        Fig.{index + 1}: {alt}
      </figcaption>
    </div>
  )
}

export default Image
