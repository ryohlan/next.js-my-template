import React from 'react'

export const Fixed: React.FC<{ className?: string | undefined }> = ({ children, className }) => {
  return <div className={`fixed flex ${className ?? ''}`}>{children}</div>
}
