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
import InfoForButtonIcon from '../../icons/InfoForButtonIcon.svg';
import PlusForButtonIcon from '../../icons/PlusForButtonIcon.svg';



import SidebarButton from '../SidebarButton/SidebarButton';
import SidebarMenuItem from '../SidebarMenuItem/SidebarMenuItem';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <img src={Logo} className={styles.logo}></img>
      <SidebarMenuItem active={false} icon={ResultsIcon} name={'Итоги'}/>
      <SidebarMenuItem active={false} icon={OrdersIcon} name={'Заказы'}/>
      <SidebarMenuItem active={false} icon={MailIcon} name={'Сообщения'}/>
      <SidebarMenuItem active={true} icon={CallsIcon} name={'Звонки'}/>
      <SidebarMenuItem active={false} icon={ClientsIcon} name={'Контрагенты'}/>
      <SidebarMenuItem active={false} icon={DocsIcon} name={'Документы'}/>
      <SidebarMenuItem active={false} icon={EmployeeIcon} name={'Исполнители'}/>
      <SidebarMenuItem active={false} icon={ReportIcon} name={'Отчеты'}/>
      <SidebarMenuItem active={false} icon={InfoIcon} name={'База знаний'}/>
      <SidebarMenuItem active={false} icon={SettingsIcon} name={'Настройки'}/>
      <div className={styles.buttonGroup}>
       <SidebarButton icon={PlusForButtonIcon} name={'Добавить заказ'}/>
       <SidebarButton icon={InfoForButtonIcon} name={'Оплата'}/> 
      </div>
    </div>
  )
}

