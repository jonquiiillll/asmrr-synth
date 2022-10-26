import React, { PureComponent } from 'react'
import SC_ToggleButtonSet from '../components/SC_ToggleButtonSet.jsx'
export default class SC_Button extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { text, handleClick } = this.props

    return (
      <div className="SC_Button" onClick={handleClick}>
        {text}
      </div>
    )
  }
}
