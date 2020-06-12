import React from 'react'
import withLocale from '../hocs/withLocale'
import useTranslation from '../hooks/useTranslation'

const NavigationBar: React.FC = () => {
  const [navText, setNavText] = React.useState('ls')
  const { t } = useTranslation()

  const toggleMenu = () => {
    let links = document.getElementById('links')
    let nav = document.getElementById('nav')

    if (links.style.display === 'block') {
      closeMenu()
    } else {
      openMenu(links, nav)
    }
  }

  const openMenu = (links, nav) => {
    links.style.display = 'block'
    nav.style.height = '60vh';
    setNavText('cd')
  }

  const closeMenu = () => {
    let links = document.getElementById('links')
    let nav = document.getElementById('nav')

    links.style.display = 'none'
    nav.style.height = '60px';
    setNavText('ls')
  }

  return (
    <nav id="nav">
      <ul id="links" onClick={closeMenu}>
        <li><a href="#home">{t("navigationHome")}</a></li>
        <li><a href="#about">{t("navigationAbout")}</a></li>
        <li><a href="#skills">{t("navigationSkills")}</a></li>
        <li><a href="#portfolio">{t("navigationWork")}</a></li>
        <li><a href="#contact">{t("navigationContact")}</a></li>
      </ul>

      <span className="icon" onClick={toggleMenu}>
        {navText}
      </span>
    </nav>
  );
}

export default NavigationBar