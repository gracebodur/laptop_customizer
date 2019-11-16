import React from 'react';
import FeaturesList from '../FeatureList/FeatureList'

class Features extends React.Component {
    render() {
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                 {/* features build in the FeatureListComponent */}
                <FeaturesList 
                USCurrencyFormat={this.props.USCurrencyFormat} 
                selected={this.props.selected} 
                features={this.props.features} 
                updateFeature={this.props.updateFeature}
                />
    
        </form>
        )
    }
}

export default Features;