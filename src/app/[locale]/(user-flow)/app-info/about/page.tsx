import CustomCarousel from "../../components/carousel";
import Footer from "../../home/components/footer";
import Header from "../../home/components/header";

export default function () {
    const founders = [
        { name: "Rakkan Kedm ", role: "Co-founder & Chief " },
        { name: "Rakkan Kedm ", role: "Co-founder & Chief " },
        { name: "Rakkan Kedm ", role: "Co-founder & Chief " },
        { name: "Rakkan Kedm ", role: "Co-founder & Chief " },
        { name: "Rakkan Kedm ", role: "Co-founder & Chief " },
    ]
    const termsAndConditions = `What started out as a collective dream and an innovative idea has now become a reality. Finding the right home has always been a stressful process, that’s where Nawy comes in. We have helped more than 100,000 families easily find the most suitable property to turn into a loving home.

As a prop-tech property startup, we offer various services to our customers including brokerage and property financing services. The property financing or the "Move now, Pay later" service is allowing hundreds of families to immediately move into their dream houses with payment plans of up to 10 years.

Additionally, we signed a 1 billion EGP agreement with Contact Financial’s real estate finance subsidiary - Med Wealth Funds - to fund the "Move now, Pay later" service. Under the terms of the agreement, Nawy’s customers will be able to buy the property they want now while paying over time.

Co-founded by Mostafa El Beltagy, Mohamed Abou Ghanima, Abdel-Azim Osman, Ahmed Rafea, and Aly Rafea, Nawy is driven by dedication and innovation to be the number one platform for real estate solutions in the region.

Currently, we have 200+ employees in numerous departments working passionately to deliver exceptional experiences to our customers. Nawy has a notable tech team that utilizes machine learning and artificial intelligence. In order to develop new cutting edge technologies and tools to give our customers personalized recommendations.

Since we opened our doors, there have been two investment funding rounds totaling $5 million. Among the investors are well-known successful names in the industry such as the Sawiris Family Office and angel investors such as Etisalat Group’s CEO - Hatem Dowidar. We are allocating these funds to expand our team, build a better platform and deliver new services.

On a mission to revolutionize the real estate industry, we promise to help each and every one of our customers to make a well-informed decision and buy their dream house.`;
    return (
        <>
            <main className="mt-12">
                <div className="flex flex-col gap-6 mx-[3.75rem]">
                    <div className="text-4xl text-Gray-900 font-bold">Terms and Conditions</div>
                    <div style={{whiteSpace:"pre-wrap"}} className="text-2xl font-medium text-Gray-700">
                        {termsAndConditions}
                    </div>
                    {/* Founders */}
                    <div className="p-[3.75rem] gap-8 flex flex-col items-center bg-Gray-50">
                        <div className="text-Gray-900 text-4xl font-bold">Founders</div>
                        <CustomCarousel loop={true} items={
                            founders.map((founder, index) => (
                                <div key={index} className="flex flex-col items-center gap-2 border border-Gray-300 bg-Gray-25 p-6 *:w-96 *:text-center">
                                    <div className="text-2xl font-bold text-Gray-700 ">{founder.name}</div>
                                    <div className="text-xl font-regular text-Gray-600">{founder.role}</div>
                                </div>
                            ))
                        }/>
                    </div>
                </div>
            </main>
        </>
    )

}