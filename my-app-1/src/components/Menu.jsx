import s from './Menu.module.css';
const Menu = () => {
  return (
      <div className={s.menu}>
          <ul>
              <li><a href="">Profile</a></li>
              <li><a href="">Messages</a></li>
              <li><a href="">News</a></li>
              <li><a href="">Music</a></li>
              <li><a href="">Settings</a></li>
          </ul>
      </div>
  )
};
export default Menu;