import Collapsible from '../../../components/Collapsible'
import EuclidMedalImage from '../../../assets/images/awards/euclid_medal.jpg'
import ICPCTShirtImage from '../../../assets/images/awards/icpc_tshirt.jpg'

const AwardsSection = () => {
    return (
        <>
            <Collapsible
                description={
                    <>
                        <h1>Euclid School Champion</h1>
                    </>
                }
                content={
                    <>
                        <div>
                            <p>
                                Award recognizing the highest score in the 2024 Euclid CEMC Math contest at my high school.
                                I was able to achieve the highest performance despite it being my first year in competitive
                                mathematics by focusing on my problem-solving skills.
                            </p>
                        </div>
                    </>
                }
            />

            <Collapsible
                description={
                    <>
                        <h1>ICPC Challenge Top 200</h1>
                    </>
                }
                content={
                    <>
                        <div>
                            <p>
                                The "2023 Post World Finals Online ICPC Challenge powered by Huawei" was held on Codeforces
                                in May 2024. The top 200 participants received a T-shirt prize.
                            </p>
                            <p>
                                There was a singular problem, in which contestants where graded based on their solution's
                                accuracy, and efficiency of datatype and memory usage.
                            </p>
                            <p>
                                I placed 113-th out of 2151 international contestants, receiving the T-shirt prize.
                            </p>
                        </div>
                    </>
                }
            />

        </>
    )
}

export default AwardsSection
