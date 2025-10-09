import sublinks from './data';

export const NavLinks = () => {
  return (
    <div className='nav-links'>
      {sublinks.map((sublink)=>{
          const {pageId, page} = sublink;

          return (
            <button key={pageId} className='nav-link'>
              {page}
            </button>
          )
          
      })}
    </div>
  )
}