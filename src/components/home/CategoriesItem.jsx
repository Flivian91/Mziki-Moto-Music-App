import React from 'react'

function CategoriesItem({category, active=false}) {
  
  return (
    // Active state
    <button className={`sm:text-sm text-xs font-semibold tracking-wide px-2 md:px-4 py-2  rounded-full  ${active ? " bg-accent text-primary transform -translate-y-2 shadow ": " border border-text text-text hover"}`}>
      {category}
    </button>
  )
}

export default CategoriesItem
