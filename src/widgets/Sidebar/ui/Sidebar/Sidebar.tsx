import { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwicher'
import { LangSwitcher } from 'widgets/LangSwitcher'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className, }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const onToggle = () => { setCollapsed(!collapsed) }

  return (
      <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed, }, [className])}>
          <button onClick={onToggle}>toggle</button>
          <div className={cls.switchers}>
              <ThemeSwitcher />
              <LangSwitcher />
          </div>
      </div>
  )
}
