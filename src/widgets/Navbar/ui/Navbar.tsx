import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation('navbar')

  return (
      <div className={classNames(cls.navbar)}>
          <div className={classNames(cls.links)}>
              <AppLink
                theme={AppLinkTheme.SECONDARY}
                className={classNames(cls.mainLink)}
                to={'/'}>
                  {t('Main')}
              </AppLink>
              <AppLink
                theme={AppLinkTheme.SECONDARY}
                to={'/about'}>
                  {t('About')}
              </AppLink>
          </div>
      </div>
  )
}
