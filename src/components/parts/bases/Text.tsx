import React from 'react'

export const Text: React.FC<{ className?: string | undefined }> = ({ children, className }) => {
  return <div className={`${className ?? ''}`}>{children}</div>
}
