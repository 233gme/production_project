import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ErrorPage.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

interface ErrorPageProps {
  className?: string
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
  const { t } = useTranslation('translation')
  const reloadPage = () => { location.reload() }

  return (
      <div className={classNames(cls.ErrorPage)}>
          <p>{t('error message')}</p>
          <Button onClick={reloadPage}>
              {t('reload button')}
          </Button>
      </div>
  )
}