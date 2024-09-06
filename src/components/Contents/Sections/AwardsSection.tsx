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
                            <img className="float-right" src={EuclidMedalImage} alt="Euclid School Champion Medal" height="300" />
                            <p>
                                I achieved the highest score at my school in the 2024 Euclid CEMC math contest.
                                There was tough competition at my school that year. While one contestant was writing
                                his first contest, many had years of experience and training in extracurricular programs.
                                I was able to outperform my classmates despite it being my first year of competition
                                by focusing on developing my problem-solving skills, rather than memorizing a vast quantity
                                of information.
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
                            <img className="float-right" src={ICPCTShirtImage} alt="ICPC T-shirt" height="300" />
                            <p>
                                In May 2024, the "2023 Post World Finals Online ICPC Challenge powered by Huawei",
                                was held on Codeforces. I decided to participate, and had my eye on this commemorative
                                T-shirt, offered to the top 200 contestants on the leaderboard.
                            </p>
                            <p>
                                I spent countless hours over the following two weeks implementing and (painstakingly) debugging
                                my solution to the contest's problem. The score was based on a range of factors,
                                including datatype efficiency and accuracy.
                            </p>
                            <p>
                                In the end, I placed 113-th out of 2151 contestants across the world, securing my T-shirt prize.
                                Not only did I gain a T-shirt (maybe I would actually wear it if it wasn't bright white!), but
                                I also learned a lot about motivation and what I can accomplish when I have an ambitious goal.
                            </p>
                        </div>
                    </>
                }
            />

        </>
    )
}

export default AwardsSection
