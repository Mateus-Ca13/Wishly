import Banner from './_features/Banner'
import AboutAppSection from './_features/AboutAppSection/AboutAppSection'
import WhyUseSection from './_features/WhyUSeSection/WhyUseSection'
import FreePlansDetailsSection from './_features/FreePlansDetailsSection/FreePlansDetailsSection'
import FAQSection from './_features/FAQSection/FAQSection'
import CreateAccountCallSection from './_features/CreateAccountCallSection/CreateAccountCallSection'

export default function Home() {
    return (
        <>
            <Banner />
            <AboutAppSection />
            <WhyUseSection />
            <FreePlansDetailsSection />
            <FAQSection />
            <CreateAccountCallSection />
        </>
    )
}