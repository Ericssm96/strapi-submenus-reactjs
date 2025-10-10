import sublinks from "./data";
import { useGlobalContext } from "./Context";
import { useRef } from "react";

export const Submenu = () => {
  const {pageId, setPageId} = useGlobalContext();
  const currentPage = sublinks.find((sublink)=>sublink.pageId === pageId);

  const submenuContainer = useRef(null);
  
  const handleOnMouseLeave = (e) => {
    const submenu = submenuContainer.current;
    const {clientY, clientX} = e;
    const {bottom, right, left, top} = submenu.getBoundingClientRect();
    
    if(clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1){
      setPageId(null);
    }
  }

  return (
    <div className={currentPage ? "submenu show-submenu" : "submenu"} onMouseLeave={handleOnMouseLeave} ref={submenuContainer}>
      <h5>{currentPage?.page}</h5>

      <div className="submenu-links" style={{display:"grid", gridTemplateColumns: currentPage?.links.length > 3 ? 'repeat(2, 1fr)' : '1fr'}}>
        {currentPage?.links.map(link => {
          const {id, url, icon, label} = link;

          return (
            <a href={url} key={id}>{icon} {label}</a>
          )
        })}
      </div>
    </div>
  )
}