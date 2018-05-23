/* * * * *
 * Main Container for homepage (URL: "/")
 * * * * */

// Import dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import Hero from '../components/Hero';

// Import Actions
import { changeHeader } from '../actions/mainAction';

class Main extends Component {
    
    changeHeader() {
        const { dispatch, main: { header } } = this.props;
        dispatch(changeHeader(header));
    }  

    render(){
       const { main: { header } } = this.props;
        return(
            <Hero 
                header={header} 
                message={'Welcome to React-Redux!!!'}
                click={this.changeHeader.bind(this)}
            />
        );
    };
};

const mapStoreToProps = store => {
    return {
        main: store.main
    };
};

export default connect(mapStoreToProps)(Main);
