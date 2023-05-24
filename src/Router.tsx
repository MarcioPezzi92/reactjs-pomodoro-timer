import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/home.page'
import { HistoryPage } from './pages/history.page'
import { DefaultLayout } from './layouts/Default/default.layout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Route>
    </Routes>
  )
}
