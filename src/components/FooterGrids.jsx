import React from 'react'

const FooterGrids = ({ title }) => {
  const solutionsArr = ['Marketing', 'Analytics', 'Commerce', 'Data', 'Cloud']
  const supportArr = ['Pricing', 'Documentation', 'Guides', 'API Status']
  const companyArr = ['About', 'Blog', 'Jobs', 'Press', 'Partners']
  const legalArr = ['Claims', 'Privacy', 'Terms', 'Policies', 'Conditions']
  return (
    <div className='font-Poppins text-white'>
      <h6 className='uppercase font-semibold'>{title}</h6>
      <ul className='pl-4 text-sm text-slate-400'>
        {title === 'Solutions'
          ? solutionsArr.map((item, index) => (
              <li key={index} className='my-2 cursor-pointer hover:text-white'>
                {item}
              </li>
            ))
          : ''}

        {title === 'Support'
          ? supportArr.map((item, index) => (
              <li key={index} className='my-2 cursor-pointer hover:text-white'>
                {item}
              </li>
            ))
          : ''}

        {title === 'Company'
          ? companyArr.map((item, index) => (
              <li key={index} className='my-2 cursor-pointer hover:text-white'>
                {item}
              </li>
            ))
          : ''}

        {title === 'Legal'
          ? legalArr.map((item, index) => (
              <li key={index} className='my-2 cursor-pointer hover:text-white'>
                {item}
              </li>
            ))
          : ''}
      </ul>
    </div>
  )
}

export default FooterGrids
