import './Toggler.css';

const Toggler = ({ onClick, option1, option2, value, style }) => {
  return (
    <div className='toggler' style={style}>
      <button type='button' className={`${value ? 'unselected-option' : 'selected-option'} pointer`} onClick={onClick}>{option1}</button>
      <button  type='button' className={`${value ? 'selected-option' : 'unselected-option'} pointer`}onClick={onClick}>{option2}</button>
    </div>
  )
}

export default Toggler