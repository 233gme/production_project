import { classNames } from 'shared/lib/classNames/classNames'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import LightIcon from 'shared/assets/icons/themeSwitcher/sun.svg'
import DarkIcon from 'shared/assets/icons/themeSwitcher/moon.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className, }: ThemeSwitcherProps) => {
  const { theme, toggleTheme, } = useTheme()

  return (
      <Button
        theme={ThemeButton.CLEAR}
        onClick={toggleTheme}
        className={classNames('', {}, [className])}
        >
          {theme === Theme.DARK ? <LightIcon/> : <DarkIcon/>}
      </Button>
  )
}
