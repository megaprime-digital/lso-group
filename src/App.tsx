import { useEffect } from "react"
import { SiteLayout } from "./components/SiteLayout"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import ServicesPage from "./pages/ServicesPage"

function normalisePath(pathname: string) {
  if (pathname === "/") return pathname
  return pathname.replace(/\/+$/, "")
}

export default function App() {
  const currentPath = normalisePath(window.location.pathname)

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0 })
      return
    }

    const target = document.getElementById(window.location.hash.slice(1))
    target?.scrollIntoView({ block: "start" })
  }, [currentPath])

  let page
  switch (currentPath) {
    case "/":
      page = <HomePage />
      break
    case "/about-us":
      page = <AboutPage />
      break
    case "/services":
      page = <ServicesPage />
      break
    case "/contact":
      page = <ContactPage />
      break
    default:
      page = <NotFoundPage />
  }

  return <SiteLayout currentPath={currentPath}>{page}</SiteLayout>
}
