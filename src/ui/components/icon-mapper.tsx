import React from 'react'
import { GoTools } from 'react-icons/go'
import { CiWarning } from 'react-icons/ci'
import { LuPackagePlus } from 'react-icons/lu'

const IconMapper = ({ iconName, style }) => {
  const iconMap = {
    tools: GoTools,
    warning: CiWarning,
    package: LuPackagePlus,
  }

  const IconComponent = iconMap[iconName] || null // Default to home icon if not found

  return <IconComponent style={style} />
}

export default IconMapper
