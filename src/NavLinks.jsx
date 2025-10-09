import sublinks from './data';
import { useGlobalContext } from './Context';

export const NavLinks = () => {
  const {setPageId} = useGlobalContext();

  return (
    <div className='nav-links'>
      {sublinks.map((sublink)=>{
          const {pageId, page} = sublink;

          return (
            <button key={pageId} onMouseEnter={()=>{setPageId(pageId)}} className='nav-link'>
              {page}
            </button>
          )
          
      })}
    </div>
  )
}