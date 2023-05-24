import { Outlet } from 'react-router-dom'
import { HeaderComponent } from '../../components/Header/header.component'
import { LayoutContainer } from './default-layout.styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <HeaderComponent />
      <Outlet />
    </LayoutContainer>
  )
}
