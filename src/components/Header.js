// all component files start with a capitalized letter

// import React from 'react' // used to be required
import PropTypes from 'prop-types'

const Header = ({ title }) => {
    return (
            <header className="container">
                <h1>{title}</h1>
                <button className="btn">Add</button>
            </header>
        )
}

Header.defaultProps = {
    title: 'Tier List Maker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired, 
}

export default Header