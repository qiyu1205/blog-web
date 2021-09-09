import Link from 'next/link'
import {
  HomeOutlined,
  CalendarOutlined,
  ProfileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import styles from './nav.module.scss';

interface Props {
  avatar: string,
  user: string,
}

const NavigatorList = () => (
  <div className={styles.navgatorList}>
    <Link href='/'>
      <a className={styles.navItem}>
        <HomeOutlined />
        <span>HOME</span>
      </a>
    </Link>
    <Link  href='/blog'>
      <a className={styles.navItem}>
        <CalendarOutlined />
        <span>BLOG</span>
      </a>
    </Link>
    <Link  href={'/archive'}>
      <a className={styles.navItem}>
        <ProfileOutlined />
        <span>TIMELINE</span>
      </a>
    </Link>
    <Link href={'/me'}>
      <a className={styles.navItem}>
        <UserOutlined />
        <span>ABOUT</span>
      </a>
    </Link>
  </div>
);

const Nav = ({ avatar, user }: Props) => (
  <div className={styles.nav}>
    <div className={styles.logo}>
      <img className={styles.avatar} src={avatar} alt='logo' />
      <span>{`${user}`}' blog</span>
    </div>
    <NavigatorList />
  </div>
);
export default Nav;
  