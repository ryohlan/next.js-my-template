import React from 'react'

export const HStack: React.FC<{ className?: string | undefined }> = ({ children, className }) => {
  return <div className={`flex w-full flex-row ${className ?? ''} relative`}>{children}</div>
}
