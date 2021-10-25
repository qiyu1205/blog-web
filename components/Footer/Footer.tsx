import { FC } from 'react'
import styles from './footer.module.scss'
import { createFromIconfontCN } from '@ant-design/icons'
import { fonterIconFontConfig, beian } from '../../models';

interface Props {}

const {
  scriptUrl,
  iconLinks,
} = fonterIconFontConfig;

const IconFont = createFromIconfontCN({ scriptUrl });

const Footer: FC<Props> = () => (
  <div className={styles.footer}>
    <div className={styles.iconWrap}>
      {
        iconLinks.map(({name, link}) => (
          <a key={name} href={link} className={styles.navItem} target='_blank'>
            <IconFont className={styles.fontIcon} type={name} />
          </a>
        ))
      }
    </div>
    <div>
      <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">
        { beian }
      </a>
    </div>
  </div>
)

export default Footer
