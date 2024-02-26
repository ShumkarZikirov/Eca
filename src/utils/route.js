import HomePage from "../pages/home-page";
import ServicesPage from "../pages/services-page";
import ContactUsPage from "../pages/contact-us-page";
import OurNewsPage from "../pages/our-news-page";
import ProjectsPage from "../pages/projects-page";
import AssociatedMembersPage from "../pages/associated-members-page";
import NewsDetail from "../components/news-detail";
import AboutUsPage from "../pages/about-us-page";
import OurClientsPage from "../pages/our-clients-page";
import CompanyPage from "../pages/company-page";
import Recommendations from "../components/recommendations";
import InfoTalantbek from "../components/info-peoples/info-talantbek";
import InfoAziret from "../components/info-peoples/info-aziret";
import InfoEdil from "../components/info-peoples/info-edil";
import InfoRaida from "../components/info-peoples/info-raida";
import InfoSuriya from '../components/info-peoples/info-suria'
import VacanciesPage from "../pages/vacancies-page";

export const  routes = [
    {path: '/', element: <HomePage/>},
    {path: '/services', element: <ServicesPage/>},
    {path: '/contact-us', element: <ContactUsPage/>},
    {path: '/news', element: <OurNewsPage/>},
    {path: '/project', element: <ProjectsPage/>},
    {path: '/associated-members', element: <AssociatedMembersPage/>},
    {path: '/news-detail/:id', element: <NewsDetail/>},
    {path: '/about-us', element: <AboutUsPage/>},
    {path: '/our-clients', element: <OurClientsPage/>},
    {path: '/company/:id', element: <CompanyPage/>},
    {path: '/recommendations', element: <Recommendations/>},
    {path: '/Talantbek T. Sakishev', element: <InfoTalantbek/>},
    {path: '/Raida Bashirova', element: <InfoRaida/>},
    {path: '/Edil Mamytbekov', element: <InfoEdil/>},
    {path: '/Aziret Sakishev', element: <InfoAziret/>},
    {path: '/Suriya Mirzhalalova', element: <InfoSuriya/>},
    {path: '/vacancies', element: <VacanciesPage/>},

]
