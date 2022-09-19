import PostsTimeline from './components/posts/PostsTimeline';
import EventsTimeline from './components/posts/EventsTimeline';
import TrendingProduct from './components/posts/TrendingProduct';

function Sidebar(props) {
  return (
    <div classname="sidebarWrapper">
        <div className="sidebar">   
            <PostsTimeline/>
            
            <EventsTimeline/>
            
            {/* <TrendingProduct/> */}
        </div>
    </div>
  )
}

export default Sidebar