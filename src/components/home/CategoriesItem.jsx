import React from 'react'

function CategoriesItem({category, active=false}) {
  
  return (
    // Active state
    <button className={`text-sm font-semibold tracking-wide px-4 py-2  rounded-full  ${active ? " bg-accent text-primary": " border border-text text-text hover"}`}>
      {category}
    </button>
  )
}

export default CategoriesItem
