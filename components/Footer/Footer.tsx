import { FC } from 'react'
import styles from './footer.module.scss'

interface Props {}


const Footer: FC<Props> = () => (
  <div className={styles.footer}>
    {/* TODO: github juejin npm codepen */}
    <div>
      <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">
        皖ICP备2021012675号
      </a>
    </div>
  </div>
)

export default Footer
