interface Props {
    children: JSX.Element
}

const Layout = (props:Props) => {
    return (
        <div className="grid grid-cols-12">
          <div className="col-span-12">
             <p>Navbar</p>
          </div>
          <div className="col-span-4">
             <p>Left bar</p>
          </div>
          <div className="col-span-4">
             <p>Control Panel</p>
             {props.children}
          </div>
          <div className="col-span-4">
             <p>Right bar</p>
          </div>
        </div>
    )
}

export default Layout