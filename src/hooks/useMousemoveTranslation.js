import { useEffect, useState, useCallback, useRef } from "react"

import getMousePosFromEvent from "./../utils/getMousePosFromEvent"
import getRandomNumber from "./../utils/getRandomNumber"
import lerp from "./../utils/lerp"
import map from "./../utils/map"

export default (xRangeMin, xRangeMax, yRangeMin, yRangeMax) => {
  const [isActivated, setIsActivated] = useState(false)
  const [tx, setTx] = useState(null)
  const [ty, setTy] = useState(null)
  const mouseY = useRef(null)
  const mouseX = useRef(null)

  const mousemoveHandler = useCallback(e => {
    if (!isActivated) {
      setIsActivated(true)
    }

    const { x, y } = getMousePosFromEvent(e)
    mouseX.current = x
    mouseY.current = y
  }, [isActivated])

  useEffect(() => {
    if (!isActivated) return

    let animationFrameId = null
    const xStart = getRandomNumber(xRangeMin, xRangeMax)
    const yStart = getRandomNumber( yRangeMin, yRangeMax)

    const renderMousemove = () => {
      setTx(tx => lerp(tx, map(mouseX.current, 0, window.innerWidth, -xStart, xStart), 0.07))
      setTy(ty => lerp(ty, map(mouseY.current, 0, window.innerHeight, -yStart, yStart), 0.07))

      animationFrameId = requestAnimationFrame(renderMousemove)
    }
    
    animationFrameId = requestAnimationFrame(renderMousemove)

    return () => cancelAnimationFrame(animationFrameId)
  }, [isActivated, xRangeMin, xRangeMax, yRangeMin, yRangeMax])

  useEffect(() => {
    window.addEventListener('mousemove', mousemoveHandler)

    return () => window.removeEventListener('mousemove', mousemoveHandler)
  }, [mousemoveHandler])

  return {tx, ty}
}