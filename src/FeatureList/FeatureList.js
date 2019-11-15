import React from 'react'
import FeatureOptions from '../FeatureOptions/FeatureOptions'

class FeatureList extends React.Component {
    render() {
      const features = Object.keys(this.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx; 
        return (
            <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            {/* {options} build in FeatureOptions pass props */}
            <FeatureOptions 
            featureName = {feature}
            feature={this.props.features[feature]}
            features={this.props.features}
            updateFeature={this.props.updateFeature}
            selected={this.props.selected}
            USCurrencyFormat={this.props.USCurrencyFormat}
            />
          </fieldset>
        )
      })
        return features
    }
  }


export default FeatureList