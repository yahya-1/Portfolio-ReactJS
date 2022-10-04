import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <section className='qualification section' id='qualification'>
            <h2 className='section__title'>Qualification</h2>
            <span className='section__subtitle'>My personal journey</span>

            <div className='qualification__container container'>
                <div className='qualification__tabs'>
                    <div className={toggleState === 1 ? "qualification__button qualification__active button__flex" :
                        "qualification__button button__flex"}
                        onClick={() => toggleTab(1)}
                    >
                        <i className='uil uil-graduation-cap qualification__icon'></i> Education
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button__flex" :
                        "qualification__button button__flex"}
                        onClick={() => toggleTab(2)}
                    >
                        <i className='uil uil-briefcase-alt qualification__icon'></i> Experience
                    </div>
                </div>


                <div className='qualification__sections'>

                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" :
                        "qualification__content"}>
                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>The Islamic University of Gaza</h3>
                                <span className='qualification__subtitle'>
                                    IT - Bachelor
                                </span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calender-alt'></i> 2018 -
                                    2022
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <div className='qualification__line'></div>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div></div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                            <div>
                                <h3 className='qualification__title'>Gaza sky geeks</h3>
                                <span className='qualification__subtitle'>
                                    Foundations Course Frontend - Incubator
                                </span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calender-alt'></i>2021 -
                                    2022
                                </div>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>Kuwait Vocational
                                    Training Center</h3>
                                <span className='qualification__subtitle'>
                                    UI/UX Design - Institute
                                </span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calender-alt'></i> 2019 -
                                    2020
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <div className='qualification__line'></div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" :
                        "qualification__content"}>
                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>Website development</h3>
                                <span className='qualification__subtitle'>
                                    ReactJS
                                </span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calender-alt'></i> 2021 -
                                    present
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <div className='qualification__line'></div>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div></div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                            <div>
                                <h3 className='qualification__title'>Web Design</h3>
                                <span className='qualification__subtitle'>
                                    HTML5 - CSS3 - LibrariesCSS - JS
                                </span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calender-alt'></i>2020 -
                                    present
                                </div>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>UI/UX</h3>
                                <span className='qualification__subtitle'>
                                    Figma & XD
                                </span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calender-alt'></i> 2018 -
                                    present
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <div className='qualification__line'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification