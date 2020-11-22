import React from 'react'
import ReactTooltip from 'react-tooltip'

const ImageTooltip = ({ img, alt, id, onClick, dataTip, style }) => (
  <div>
    <img
      onClick={onClick}
      alt={alt}
      data-tip={dataTip}
      data-for={`tooltip-${id}`}
      src={img}
      style={style}
    />
    <ReactTooltip id={`tooltip-${id}`} place="top" />
  </div>
)

export default ImageTooltip
