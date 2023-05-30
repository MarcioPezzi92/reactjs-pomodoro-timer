import { Scroll, Timer } from 'phosphor-react'
import { HeaderContainer } from './styles'

import TomatoIllustration from '../../assets/images/tomato-illustration.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={TomatoIllustration} alt="Logo image" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
