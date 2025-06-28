import HeroSection from "../components/HeroSection"
import FeaturesSection from "../components/FeaturesSection"
import FAQSection from "../components/FAQSection"
import PricingSection from "../components/PricingSection"


const LoginPage = () => {
    return (
        <>
            <section id="hero"><HeroSection /></section>
            <section id="discover"><FeaturesSection /></section>
            <section id="faq"><FAQSection /></section>
            <section id="pricing"><PricingSection /></section>
        </>
    )
}

export default LoginPage
