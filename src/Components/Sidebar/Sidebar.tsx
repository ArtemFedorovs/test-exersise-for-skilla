import styles from './Sidebar.module.css';
import Logo from '../../icons/Logo.svg';
import ResultsIcon from '../../icons/ResultsIcon.svg';
import OrdersIcon from '../../icons/OrdersIcon.svg';
import MailIcon from '../../icons/MailIcon.svg';
import CallsIcon from '../../icons/CallsIcon.svg';
import ClientsIcon from '../../icons/ClientsIcon.svg';
import DocsIcon from '../../icons/DocsIcon.svg';
import EmployeeIcon from '../../icons/EmployeeIcon.svg';
import ReportIcon from '../../icons/ReportIcon.svg';
import InfoIcon from '../../icons/InfoIcon.svg';
import SettingsIcon from '../../icons/SettingsIcon.svg';




import SidebarMenuItem from '../SidebarMenuItem/SidebarMenuItem';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <img src={Logo} className={styles.logo}></img>
      <SidebarMenuItem icon={ResultsIcon} name={'Итоги'}/>
      <SidebarMenuItem icon={OrdersIcon} name={'Заказы'}/>
      <SidebarMenuItem icon={MailIcon} name={'Сообщения'}/>
      <SidebarMenuItem icon={CallsIcon} name={'Звонки'}/>
      <SidebarMenuItem icon={ClientsIcon} name={'Контрагенты'}/>
      <SidebarMenuItem icon={DocsIcon} name={'Документы'}/>
      <SidebarMenuItem icon={EmployeeIcon} name={'Исполнители'}/>
      <SidebarMenuItem icon={ReportIcon} name={'Отчеты'}/>
      <SidebarMenuItem icon={InfoIcon} name={'База знаний'}/>
      <SidebarMenuItem icon={SettingsIcon} name={'Настройки'}/>
    </div>
  )
}

