import "./nav.css"

export default function Nav() {
  return (
    <nav className="nav">
      <div className="navHeaderDiv">
        <p className="navMainDiv">Jump to Section</p>
      </div>
      <div className="navSection2">
      <p className="navLi"> <span>01</span> Receive</p>
      <p className="navLi"> <span>02</span> Approve</p>
      <p className="navLi"> <span>03</span> Pay</p>
      <p className="navLi"> <span>04</span> Sync</p>
      <p className="navLi"> <span>05</span> Report</p>
      </div>
    </nav>
  )
}
