// all component files start with a capitalized letter

// import React from 'react' // used to be required
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {

    return (
            <header className="header">
                <h1>{title}</h1>
                <Button
                color={showAdd ? 'crimson' : 'green'}
                text={showAdd ?'Cancel':'Add'}
                onClick={onAdd} />
            
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