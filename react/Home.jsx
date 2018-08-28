import React from 'react';
import { connect } from 'react-redux';
import { openBrowserTab } from './actions';

class HomePresentational extends React.Component {
    constructor(props) {
        super(props);
        this.openYoutube = this.openYoutube.bind(this);
    }

    openYoutube() {
        this.props.openBrowserTab('http://youtube.com');
    }

    render() {
        return (
            <button onClick={this.openYoutube}> Open Youtube </button>
        );
    }
}

const mapStateToProps = state => ({
    website: state.website,
});

const mapDispatchToProps = dispatch => ({
    openBrowserTab: url => dispatch(openBrowserTab(url)),
});


const Home = connect(mapStateToProps, mapDispatchToProps)(HomePresentational);

export default Home;
