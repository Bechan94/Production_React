import { Theme, useTheme } from 'app/providers/Themes'
import cls from './ThemeSwitcher.module.scss'
import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'


interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher:FC<ThemeSwitcherProps> = (props) => {
  const { className } = props
  const { theme, toggleTheme} = useTheme()
  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  )
}