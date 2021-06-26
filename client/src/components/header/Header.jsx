import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <div className="headerTitleSm">Welcome to </div>
        <div className="headerTitleLg">Blog</div>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        alt=""
      />
    </div>
  );
}

export default Header;
