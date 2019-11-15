import React from 'react'
import slugify from 'slugify';

class FeatureOptions extends React.Component {
        render() {
            const options = this.props.feature.map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
                <div key={itemHash} className="feature__item">
                    <input
                        type="radio"
                        id={itemHash}
                        className="feature__option"
                        name={slugify(this.props.feature)}
                        checked={item.name === this.props.selected[this.props.feature].name}
                        onChange={e => this.props.updateFeature(this.props.featureName, item)}
                    />
                <label htmlFor={itemHash} className="feature__label">
                    {item.name} ({this.props.USCurrencyFormat(item.cost)})
                </label>
                </div>
                );
            });
            return options
}
        }

export default FeatureOptions