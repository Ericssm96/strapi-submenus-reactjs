import sublinks from "./data";
import { useGlobalContext } from "./Context";

export const Submenu = () => {
  const {pageId, setPageId} = useGlobalContext();
  const currentPage = sublinks.find((sublink)=>sublink.pageId === pageId);
  console.log(currentPage);

  return (
    <div className={currentPage ? "submenu show-submenu" : "submenu"}>
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