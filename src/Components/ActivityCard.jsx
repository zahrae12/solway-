import React from 'react'

const ActivityCard = ({label,subtext}) => {
    const boldedText = subtext.replace(/SOLWAY/g, '<strong>SOLWAY</strong>');
  return (
    <div className=' bg-white p-3 mt-0 '>
      <div className="flex items-center">
        <img src="src/assets/icons/Check.svg" alt="Check Icon" className="mr-2" />
        <h3 className="text-xl font-extrabold leading-6 ">{label}</h3>
      </div>
      <p
        className="mt-4 ml-4 font-normal text-base leading-[24px] text-gray-600"
        dangerouslySetInnerHTML={{ __html: boldedText }}
      />
 </div>
  )
}

export default ActivityCard