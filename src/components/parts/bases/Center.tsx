import React from 'react'

export const Center: React.FC<{ className?: string | undefined }> = ({ children, className }) => {
  return (
    <div className={`relative flex w-full flex-row items-center justify-center ${className ?? ''}`}>
      {children}
    </div>
  )
}
