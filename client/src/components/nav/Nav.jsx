import "./nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="navHeaderDiv">
        <p className="navMainDiv">Jump to Section</p>
      </div>
      <div className="navSection2">
        <a href="#item1">
          <p className="navLi">
            {" "}
            <span>01</span> Receive
          </p>
        </a>
        <a href="#item2">
          <p className="navLi">
            {" "}
            <span>02</span> Approve
          </p>
        </a>

        <a href="#item3">
          <p className="navLi">
            {" "}
            <span>03</span> Pay
          </p>
        </a>
        <a href="#item4">
          {" "}
          <p className="navLi">
            {" "}
            <span>04</span> Sync
          </p>
        </a>
        <a href="#item5">
          <p className="navLi">
            {" "}
            <span>05</span> Report
          </p>
        </a>
      </div>
    </nav>
  );
}
