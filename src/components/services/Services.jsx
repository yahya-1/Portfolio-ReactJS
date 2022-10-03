import React, { useState } from 'react'
import "./services.css"

const Services = () => {
    const [toggleState, setToggleState] = useState(0)

    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <section className='services section' id='services'>
            <h2 className='section__title'>Services</h2>
            <span className='section__subtitle'>What i offer</span>

            <div className='services__container container grid'>
                <div className='services__content'>
                    <div>
                        <i className='uil uil-web-grid services__icon'></i>
                        <h3 className='services__title'>Frontend Product  <br /> Developer</h3>
                    </div>

                    <span className='services__button' onClick={() => toggleTab(1)}>View More
                        <i className='uil uil-arrow-right services__button-icon'></i>
                    </span>

                    <div className={toggleState === 1 ? "services__modal active__modal" : "services__modal"}>
                        <div className='services__modal-content'>
                            <i className='uil uil-times services_modal-close' onClick={() => toggleTab(0)} ></i>

                            <h3 className='services__modal-title'>Frontend Product Developer</h3>
                            <p className='services_modal-description'>
                                service with more than two years of experience delivering high
                                quality work to clients and businesses.
                            </p>

                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        I develop the user interface.
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Web page development.
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Dealing with React js library and including offices in npm for React js.
                                    </p>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>

                <div className='services__content'>
                    <div>
                        <i className='uil uil-arrow services__icon'></i>
                        <h3 className='services__title'>Ui/Ux <br /> Designer</h3>
                    </div>

                    <span className='services__button' onClick={() => toggleTab(2)}>View More
                        <i className='uil uil-arrow-right services__button-icon'></i>
                    </span>

                    <div className={toggleState === 2 ? "services__modal active__modal" : "services__modal"}>
                        <div className='services__modal-content'>
                            <i className='uil uil-times services_modal-close' onClick={() => toggleTab(0)}></i>

                            <h3 className='services__modal-title'>Ui/Ux Designer</h3>
                            <p className='services_modal-description'>
                                Service with more than 3 years of experience.Providing quality work to
                                clients and companies.
                            </p>

                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        I create ux element interactions.
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        I do consistent and modern user interfaces (ui).
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Design and mockups of products for companies.
                                    </p>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services