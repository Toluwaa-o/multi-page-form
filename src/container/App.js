import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom"
import Info from '../pages/Info'
import Plan from '../pages/Plan'
import Addons from '../pages/Addons'
import Summary from '../pages/Summary'
import Completed from '../pages/Completed'
import ErrorPage from '../pages/ErrorPage'
import Page from './Page'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/multi-page-form' element={<Page />} errorElement={<ErrorPage />}>
            <Route index element={<Info />} />
            <Route path="plan" element={<Plan />} />
            <Route path='add-ons' element={<Addons />} />
            <Route path='summary' element={<Summary />} />
            <Route path='completed' element={<Completed />} />

            <Route path='*' element={<ErrorPage />} />
        </Route>
    )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
