import React, { useCallback, useMemo, useState } from 'react'
import { FIGURE_DATA } from '../mock'
import { HoverState } from '@/utils/types'
import { FigureCard } from '../components'

interface Props { }

const ImageList: React.FC<Props> = (props) => {
  const { } = props
  const [hoveredFigure, setHoveredFigure] = useState<HoverState>(null)

  const handleMouseEnter = useCallback((figureId: HoverState) => {
    setHoveredFigure(figureId)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setHoveredFigure(null)
  }, [])

  const renderFigureCard = useMemo(() => {
    return FIGURE_DATA.map((figureData) => (
      <FigureCard
        key={figureData.id}
        data={figureData}
        isHovered={hoveredFigure === figureData.id}
        onMouseEnter={() => handleMouseEnter(figureData.id)}
        onMouseLeave={handleMouseLeave}
      />
    ))
  }, [handleMouseEnter, handleMouseLeave, hoveredFigure])

  return (
    <div className="flex flex-col lg:flex-row h-full" role="region" aria-label="Skills and technologies showcase">
      {renderFigureCard}
    </div>
  )
}

export default React.memo<Props>(ImageList)