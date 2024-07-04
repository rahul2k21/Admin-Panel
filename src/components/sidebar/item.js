import React from 'react';

function SidebarItem({ item, className }) {
  return (
    <div className={className}>
      <p className='text-md '>{item.name}</p>
    </div>
  );
}

export default SidebarItem;
