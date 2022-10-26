import React, { Component } from 'react'

import SC_ToggleButton from '../components/SC_ToggleButton.jsx'
import SC_Slider from '../components/SC_Slider.jsx'

export default class ToneSynth extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { settings, handleValueChange } = this.props

    return (
      <div className="ToneSynth">
      <div className="green_container">STAY IN TOUCH</div>
        <div className="drums_container">

        <SC_ToggleButton
          text={settings.channel.mute==true ? 'OFF' : 'ON'}
          isOn={settings.channel.mute}
          handleClick={() =>
            handleValueChange('channelMute', !settings.channel.mute)
          }
        />

        <SC_ToggleButton
          text={settings.channelTwo.mute==true ? 'OFF' : 'ON'}
          isOn={settings.channelTwo.mute}
          handleClick={() =>

            handleValueChange('channelTwoMute', !settings.channelTwo.mute)
          }
        />
        <SC_ToggleButton
          text={settings.channelFifth.mute==true ? 'OFF' : 'ON'}
          isOn={settings.channelFifth.mute}
          handleClick={() =>
            handleValueChange('channelFifthMute', !settings.channelFifth.mute)
          }
        />
        <SC_ToggleButton
          text={settings.channelThird.mute==true ? 'OFF' : 'ON'}
          isOn={settings.channelThird.mute}
          handleClick={() =>
            handleValueChange('channelThirdMute', !settings.channelThird.mute)
          }
        />
        <SC_ToggleButton
          text={settings.channelForth.mute==true ? 'OFF' : 'ON'}
          isOn={settings.channelForth.mute}
          handleClick={() =>
            handleValueChange('channelForthMute', !settings.channelForth.mute)
          }
        />
        <SC_ToggleButton
          text={settings.channelSix.mute==true ? 'OFF' : 'ON'}
          isOn={settings.channelSix.mute}
          handleClick={() =>
            handleValueChange('channelSixMute', !settings.channelSix.mute)
          }
        />
        <SC_ToggleButton
          text={settings.channelSeven.mute==true ? 'OFF' : 'ON'}
          isOn={settings.channelSeven.mute}
          handleClick={() =>
            handleValueChange('channelSevenMute', !settings.channelSeven.mute)
          }
        />
        <SC_ToggleButton
          text={settings.channelEight.mute==true ? 'OFF' : 'ON'}
          isOn={settings.channelEight.mute}
          handleClick={() =>
            handleValueChange('channelEightMute', !settings.channelEight.mute)
          }
        />

        </div>
      </div>

    )
  }
}
