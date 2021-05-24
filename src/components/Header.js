import Button from './Button';

const Header = ({title, onAdd}) => {

  return (
    <div>
      <header className="header">
  <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onAdd} />
      </header>
    </div>
  )
}

export default Header
