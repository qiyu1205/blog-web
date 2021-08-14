import Link from 'next/link'
import {
  HomeOutlined,
  CalendarOutlined,
  ProfileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import NavigatorStyle from './styled';

interface Props {
  avatar: string,
  user: string,
}

const NavigatorList = () => (
  <div className='navgatorList'>
    <Link href='/'>
      <a className='navItem'>
        <HomeOutlined />
        <span>HOME</span>
      </a>
    </Link>
    <Link  href='/blog'>
      <a className='navItem'>
        <CalendarOutlined />
        <span>BLOG</span>
      </a>
    </Link>
    <Link  href={'/archive'}>
      <a className='navItem'>
        <ProfileOutlined />
        <span>TIMELINE</span>
      </a>
    </Link>
    <Link href={'/me'}>
      <a className='navItem'>
        <UserOutlined />
        <span>ABOUT</span>
      </a>
    </Link>
  </div>
);

const Nav = ({ avatar, user }: Props) => (
  <NavigatorStyle>
    <div className='logo'>
      <img className='avatar' src={avatar} alt='logo' />
      <span>{`${user}`}' blog</span>
    </div>
    <NavigatorList />
  </NavigatorStyle>
);
export default Nav;
  