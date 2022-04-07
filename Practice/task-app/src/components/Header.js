import PropType from 'prop-types'
import Button from './Button'
const Header = ({title, onAdd, showAddTask}) => {

  return (
    <header className='header'>
      <h1 >{title}</h1>
      <Button color= {showAddTask ? 'darkred' : 'green'} text= {showAddTask ? 'Hide' : 'Add'} onClick={onAdd}></Button>
    </header>
  )
}

Header.defaultProps = {
  title : 'Task Tracker'
}

Header.propTypes = {
  title: PropType.string.isRequired
}
 

export default Header
