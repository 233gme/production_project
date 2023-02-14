import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotFound.module.scss'
import { useTranslation } from 'react-i18next'

interface NotFoundProps {
  className?: string
}

export const NotFound = ({ className }: NotFoundProps) => {
  const { t } = useTranslation('notfound')

  return (
      <div className={classNames(cls.NotFound)}>
          {t('Page not found')}
      </div>
  )
}
