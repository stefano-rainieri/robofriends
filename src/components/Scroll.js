import React from 'react';

export const Scroll = ({ children }) => {
  return (
    <div style={{ overflowY: 'auto', borderTop: '1px solid black', height: '500px' }}>
      {children}
    </div>
  )
}