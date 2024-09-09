export default function CalculatorPage() {

  return (
    <div>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-primary m-1 ">Click</div>
        <ul tabIndex={0} className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
          <li />
        </ul>
      </div>
    </div>
  )
}  