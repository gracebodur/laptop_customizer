import React from 'react'

class CustomizeForm extends React.Component {
    const {features} = this.props.features
    render() {
        return (
        <form className="main__form">
        <h2>Customize your laptop</h2>
            {features}
        </form>
        )
    }
}

export default CustomizeForm