import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from "../../utils";

import { changeLanguageApp } from '../../store/actions';

class HomeHeader extends Component {

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
    }

    render() {
        let language = this.props.language;

        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='home-header-logo'>
                            <div className='header-logo-box'>
                                <i className="fa-solid fa-bars choose-bar"></i>
                                <div className='header-logo'></div>
                                <div className='header-logo-name'>BookingCare</div>
                            </div>
                        </div>
                        <div className='home-header-center'>
                            <div className='category-box'>
                                <div className='child-category'>
                                    <div><b><FormattedMessage id="home-header.speciality" /></b></div>
                                    <div className='subs-title'><FormattedMessage id="home-header.searchdoctor" /></div>
                                </div>
                                <div className='child-category'>
                                    <div><b><FormattedMessage id="home-header.health-facility" /></b></div>
                                    <div className='subs-title'><FormattedMessage id="home-header.select-room" /></div>
                                </div>
                                <div className='child-category'>
                                    <div><b><FormattedMessage id="home-header.doctor" /></b></div>
                                    <div className='subs-title'><FormattedMessage id="home-header.select-doctor" /></div>
                                </div>
                                <div className='child-category'>
                                    <div><b><FormattedMessage id="home-header.fee" /></b></div>
                                    <div className='subs-title'><FormattedMessage id="home-header.check-health" /></div>
                                </div>
                            </div>
                        </div>
                        <div className='home-header-help'>
                            <div className='support'>
                                <i className="fa-solid fa-circle-question"></i>
                                <FormattedMessage id="home-header.support" />
                            </div>
                            <div className={language === LANGUAGES.VI ? 'language-vi action' : 'language-vi'}><span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span></div>
                            <div className={language === LANGUAGES.EN ? 'language-en action' : 'language-en'}><span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span></div>
                        </div>
                    </div>
                </div>
                <div className='home-header-banner'>
                    <div className='home-title'>
                        <div className='home_title1'>
                            <FormattedMessage id="banner.title1" />
                        </div>
                        <div className='home_title2'>
                            <FormattedMessage id="banner.title2" />
                        </div>
                    </div>
                    <div className='search'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input className='input-search' type='text' placeholder='Tìm kiếm' />
                    </div>
                    <div className='list-options'>
                        <div className='option'>
                            <div className='option-icon'>
                                <i className="fa-regular fa-hospital"></i>
                            </div>
                            <div className='option-name'>
                                <FormattedMessage id="banner.child1" />
                            </div>
                        </div>
                        <div className='option'>
                            <div className='option-icon'>
                                <i className="fa-solid fa-mobile-screen-button"></i>
                            </div>
                            <div className='option-name'>
                                <FormattedMessage id="banner.child2" />
                            </div>
                        </div>
                        <div className='option'>
                            <div className='option-icon'>
                                <i className="fa-solid fa-hospital-user"></i>
                            </div>
                            <div className='option-name'>
                                <FormattedMessage id="banner.child3" />
                            </div>
                        </div>
                        <div className='option'>
                            <div className='option-icon'>
                                <i className="fa-solid fa-microscope"></i>
                            </div>
                            <div className='option-name'>
                                <FormattedMessage id="banner.child4" />
                            </div>
                        </div>
                        <div className='option'>
                            <div className='option-icon'>
                                <i className="fa-solid fa-head-side-virus"></i>
                            </div>
                            <div className='option-name'>
                                <FormattedMessage id="banner.child5" />
                            </div>
                        </div>
                        <div className='option'>
                            <div className='option-icon'>
                                <i className="fa-solid fa-tooth"></i>
                            </div>
                            <div className='option-name'>
                                <FormattedMessage id="banner.child6" />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
