import React from 'react'

export const Absolute: React.FC<{ className?: string | undefined }> = ({ children, className }) => {
  return <div className={`absolute flex ${className ?? ''}`}>{children}</div>
}
