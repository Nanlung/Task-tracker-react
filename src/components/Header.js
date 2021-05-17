import Button from './Button';

const Header = ({title}) => {

  const onClick = () => {
    console.log('Button Clicked')
  }

  return (
    <div>
      <header className="header">
  <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
      </header>
    </div>
  )
}

export default Header
