// react
import React from 'react'
import PropTypes from 'prop-types'
import { ClipLoader } from 'react-spinners'

// styles
import style from './index.scss'

class Button extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    primary: PropTypes.bool,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    className: PropTypes.string,
    leftImage: PropTypes.string
  }

  render() {
    const {
      className = '',
      primary,
      leftImage,
      loading = false,
      ...passThroughProps
    } = this.props
    const btnClass = `${style.button} ${loading ? style.loading : ''}`
    return (
      <button
        className={`${btnClass} ${this.props.disabled ? style.disabled : ''} ${
          this.props.primary ? style.primary : ''
        } ${className}`}
        {...passThroughProps}
      >
        {
          leftImage && !this.props.loading && (
            <img src={ leftImage } alt='' />
          )
        }
        {
          loading && (
            <ClipLoader
              sizeUnit={'px'}
              size={15}
              height={15}
              width={15}
              color={'#fff'}
              loading={ true }
            />
          )
        }
        {this.props.label}
      </button>
    )
  }
}

export default Button
