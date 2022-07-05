import "./main.css"
export default function Main() {
  class DataInfo {
  constructor(id,title, header, body, img) {
    this.id=id
    this.title = title;
    this.header = header;
    this.body = body;
    this.img=img;
  }  
}
const item1 = new DataInfo("01", "01 receive", "Eliminate manual data entry ", "Save time and avoid manual input errors by directing all invoices to your dedicated Rho bill inbox. Invoice details are auto-populated and mapped to your accounting codes so you can focus your time elsewhere.", "/img/graphic1.png" )

const item2 = new DataInfo("02", "02 approve", "Automate your approvals", "Empower finance to collaborate with teams for faster and safer bill pay. Rho’s smart approval controls automatically assign approvers for every invoice, giving you a clear audit trail, increased oversight, and time back in your day", "/img/graphic2.png" )

const item3 = new DataInfo("03", "03 pay","Pay bills with ease ", "Pay all your invoices within Rho for free - pay anyone, anywhere, via domestic ACH wires, International SWIFT wires, Foreign FX, and checks. Eliminate expenses including SaaS and transaction fees and say hello to easy, automated bill pay.", "/img/graphic3.png" )

const item4 = new DataInfo("04", "04 sync", "Reconcile in a flash","Automate your books and reduce A/P workload with Rho’s advanced accounting integration. Perfectly in sync with your books, all invoices and payments are created and reconciled automatically so you can close each month faster.  ", "/img/graphic4.png" )

const item5 = new DataInfo("05", "05 report", "Streamline your reporting","Run live A/P and stay on top of your bills with complete visibility AP reporting. View all liabilities, track invoices, understand payee impacts to your bottom line via Vendor Reports and quickly access payee details via streamlined payee profiles.", "/img/graphic5.png" )

  return (
   <div className="masterDiv">
   {/* Item 1 */}
    <div className='mainDiv'>
        <div className="mainText">
            <p className="mainTextHeader">{item1.title}</p>
            <h3 className="mainTextH3"> {item1.header} </h3>
            <p className="mainTextBody">{item1.body} </p>
        </div>
       <div className="imgDiv">
        <img  className="img" src={item1.img} alt="Cool Features" />
       </div>
    </div>
    {/* Item2 */}
    <div className='mainDiv'>
        <div className="mainText">
            <p className="mainTextHeader">{item2.title}</p>
            <h3 className="mainTextH3"> {item2.header} </h3>
            <p className="mainTextBody">{item2.body} </p>
        </div>
       <div className="imgDiv">
        <img  className="img" src={item2.img} alt="Cool Features" />
       </div>
    </div>
    {/* Item3 */}
    <div className='mainDiv'>
        <div className="mainText">
            <p className="mainTextHeader">{item3.title}</p>
            <h3 className="mainTextH3"> {item3.header} </h3>
            <p className="mainTextBody">{item3.body} </p>
        </div>
       <div className="imgDiv">
        <img  className="img" src={item3.img} alt="Cool Features" />
       </div>
    </div>
      {/* Item4 */}
      <div className='mainDiv'>
        <div className="mainText">
            <p className="mainTextHeader">{item4.title}</p>
            <h3 className="mainTextH3"> {item4.header} </h3>
            <p className="mainTextBody">{item4.body} </p>
        </div>
       <div className="imgDiv">
        <img  className="img" src={item4.img} alt="Cool Features" />
       </div>
    </div>

      {/* Item4 */}
      <div className='mainDiv'>
        <div className="mainText">
            <p className="mainTextHeader">{item5.title}</p>
            <h3 className="mainTextH3"> {item5.header} </h3>
            <p className="mainTextBody">{item5.body} </p>
        </div>
       <div className="imgDiv">
        <img  className="img" src={item5.img} alt="Cool Features" />
       </div>
    </div>

   </div>
   
  )
}
