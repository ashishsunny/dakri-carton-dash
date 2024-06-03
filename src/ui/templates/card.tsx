'use client'

import React from 'react'
import IconMapper from '../components/icon-mapper'

interface DashboardCardProps {
  title: string
  width?: string
  height?: string
  icon?: string
  children: React.ReactNode
  margin?: string
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  width,
  height,
  icon,
  children,
  margin,
}) => {
  const iconType = icon
  return (
    <div
      className={`rounded-lg bg-slate-50 shadow-md p-4 ${width} ${height} ${margin}`}
    >
      <div className="flex">
        <div className="items-center justify-center pr-[1rem]">
          {icon ? (
            <IconMapper style={{ fontSize: '25px' }} iconName={iconType} />
          ) : null}
        </div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
      </div>
      <div className="overflow-y-auto">{children}</div>
    </div>
  )
}

export default DashboardCard
