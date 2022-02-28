import React from 'react'

export const VStack: React.FC<{ className?: string | undefined }> = ({ children, className }) => {
  return <div className={`relative flex w-full flex-col ${className ?? ''}`}>{children}</div>
}
