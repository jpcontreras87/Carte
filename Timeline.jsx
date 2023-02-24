import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { BiHome } from 'react-icons/bi';
import { MdOutlineFeaturedPlayList } from 'react-icons/md';
import { AiOutlineLaptop } from 'react-icons/ai';
import { ImMobile } from 'react-icons/im';
import { FaHamburger } from 'react-icons/fa';
import './timeline.css';

const Timeline = () => {
    return (
        <>
            <h1 className="text-center hero-section" style={{ color: 'white' }}>
                Development Timeline
            </h1>
            <Row className="justify-content-center">
                <Col>
                    <div className="timeline">
                        <div className="timeline-show mb-3 text-center">
                            <h5 className="m-0 time-show-name">2022</h5>
                        </div>

                        <div className="timeline-lg-item timeline-item-left">
                            <div className="timeline-desk">
                                <div className="timeline-box">
                                    <BiHome className="timeline-logo" />
                                    <span className="arrow-alt"></span>
                                    <span className="timeline-icon">
                                        <i className="mdi mdi-adjust"></i>
                                    </span>

                                    <h4 className="mt-0 mb-1 font-16">Initial Visual Prototype</h4>
                                    <p className="text-muted"></p>

                                    <p>Visual Prototype efforts have begun and in process </p>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-lg-item">
                            <div className="timeline-desk">
                                <div className="timeline-box">
                                    <MdOutlineFeaturedPlayList className="timeline-logo" />
                                    <span className="arrow"></span>
                                    <span className="timeline-icon">
                                        <i className="mdi mdi-adjust"></i>
                                    </span>
                                    <h4 className="mt-0 mb-1 font-16">Visual ProtoType</h4>
                                    <p className="text-muted">
                                        <small>July 2022</small>
                                    </p>
                                    <p>
                                        UI/UX Complete along with all wireframes and integrations/features scoped out{' '}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-lg-item timeline-item-left">
                            <div className="timeline-desk">
                                <div className="timeline-box">
                                    <AiOutlineLaptop className="timeline-logo" />
                                    <span className="arrow-alt"></span>
                                    <span className="timeline-icon">
                                        <i className="mdi mdi-adjust"></i>
                                    </span>
                                    <h4 className="mt-0 mb-1 font-16">Working ProtoType</h4>
                                    <p className="text-muted">
                                        <small>Oct 2022</small>
                                    </p>
                                    <p>
                                        MVP available for beta customers but not commercially available. Full
                                        functionality and ongoing testing, iterations and bug fixes{' '}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-show my-3 text-center">
                            <h5 className="m-0 time-show-name">2023</h5>
                        </div>

                        <div className="timeline-lg-item">
                            <div className="timeline-desk">
                                <div className="timeline-box">
                                    <ImMobile className="timeline-logo" />
                                    <span className="arrow"></span>
                                    <span className="timeline-icon">
                                        <i className="mdi mdi-adjust"></i>
                                    </span>
                                    <h4 className="mt-0 mb-1 font-16">Commercially Ready</h4>
                                    <p className="text-muted">
                                        <small>Jan 2023</small>
                                    </p>
                                    <p>
                                        Product Available for all Carte customers Available via web and mobile browsers{' '}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-lg-item timeline-item-left">
                            <div className="timeline-desk">
                                <div className="timeline-box">
                                    <FaHamburger className="timeline-logo" />
                                    <span className="arrow-alt"></span>
                                    <span className="timeline-icon">
                                        <i className="mdi mdi-adjust"></i>
                                    </span>
                                    <h4 className="mt-0 mb-1 font-16">Consumer App Release</h4>
                                    <p className="text-muted">
                                        <small>July 2023</small>
                                    </p>
                                    <p>
                                        Standalone consumer application released to public Today Initial Visual
                                        ProtoType Visual Prototype efforts have begun and in process{' '}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Timeline;
