const channel = {
  volume: 0,
  mute: true
}

const channelTwo = {
  volume: 15,
  mute: true
}

const channelThird = {
  volume: 15,
  mute: true
}

const channelForth = {
  volume: 0,
  mute: true
}


const channelFifth = {
  volume: 10,
  mute: true
}

const channelSix = {
  volume: 0,
  mute: true
}

const channelSeven = {
  volume: 0,
  mute: true
}

const channelEight = {
  volume: 0,
  mute: true
}


const pingPongDelay = {
  wet: 1,
  delayTime: 1,
  maxDelayTime: 1
}

const chorus = {
  wet: 0.4,
  type: 'triangle',
  frequency: 100,
  delayTime: 3.5,
  depth: 1,
  spread: 1000
}

const sequence = {
  steps: [
    {
      time: '0:0:0',
      noteName: 'A1',
      duration: '4n',
      velocity: 0.6
    },
    {
      time: '0:1:0',
      noteName: 'A2',
      duration: '4n',
      velocity: 0.2
    },
    {
      time: '0:2:0',
      noteName: 'A1',
      duration: '4n',
      velocity: 0.6
    },
    {
      time: '0:3:0',
      noteName: 'A2',
      duration: '4n',
      velocity: 0.2
    }
  ],
  duration: '1m',
  loop: true
}

const sequenceTwo = {
  steps: [
    {
      time: '0:0:0',
      noteName: 'A1',
      duration: '4n',
      velocity: 0.6
    },
    {
      time: '0:0:3',
      noteName: 'A2',
      duration: '4n',
      velocity: 0.2
    },
    {
      time: '0:1:2',
      noteName: 'A1',
      duration: '4n',
      velocity: 0.6
    },
    {
      time: '0:2:0',
      noteName: 'A2',
      duration: '4n',
      velocity: 0.2
    }
  ],
  duration: '1m',
  loop: true
}

const sequenceThird = {
  steps: [
    {
      time: '0:0:0',
      noteName: 'A2',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:0:0',
      noteName: 'A2',
      duration: '4n',
      velocity: 1
    },
    {
      time: '2:0:0',
      noteName: 'A2',
      duration: '4n',
      velocity: 1
    },
    {
      time: '3:0:0',
      noteName: 'A2',
      duration: '4n',
      velocity: 1
    },
  ],
  duration: '4m',
  loop: true
}

const sequenceForth = {
  steps: [
    {
      time: '0:0:2',
      noteName: 'A1',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:0:3',
      noteName: 'A1',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:0:2',
      noteName: 'A1',
      duration: '4n',
      velocity: 1
    },

  ],
  duration: '2m',
  loop: true
}

const sequenceFifth = {
  steps: [
    {
      time: '0:0:0',
      noteName: 'A1',
      duration: '1n',
      velocity: 1
    },
    {
      time: '1:0:0',
      noteName: 'A2',
      duration: '1n',
      velocity: 1
    },
    {
      time: '2:0:0',
      noteName: 'A3',
      duration: '1n',
      velocity: 1
    },


  ],
  duration: '3m',
  loop: true
}

const sequenceSix = {
  steps: [
    {
      time: '0:0:0',
      noteName: 'A2',
      duration: '1n',
      velocity: 1
    },
    {
      time: '1:0:0',
      noteName: 'A2',
      duration: '1n',
      velocity: 1
    },
    {
      time: '2:0:0',
      noteName: 'A2',
      duration: '1n',
      velocity: 1
    },
  ],
  duration: '2m',
  loop: true
}

const sequenceSeven = {
  steps: [
    {
      time: '0:0:0',
      noteName: 'A2',
      duration: '1n',
      velocity: 1
    },
    {
      time: '1:1:0',
      noteName: 'A2',
      duration: '1n',
      velocity: 1
    },
    {
      time: '2:1:0',
      noteName: 'A2',
      duration: '1n',
      velocity: 1
    },
  ],
  duration: '2m',
  loop: true
}

const sequenceEight = {
  steps: [
    {
      time: '0:0:0',
      noteName: 'A1',
      duration: '1n',
      velocity: 0.6
    },
    {
      time: '1:1:0',
      noteName: 'A1',
      duration: '1n',
      velocity: 0.6
    },
    {
      time: '1:1:3',
      noteName: 'A2',
      duration: '1n',
      velocity: 1
    },
    {
      time: '1:2:2',
      noteName: 'A2',
      duration: '1n',
      velocity: 1
    },
  ],
  duration: '2m',
  loop: true
}

export { channel, channelTwo, channelThird, channelForth, channelFifth, channelSix, channelSeven, channelEight, sequence, sequenceTwo, sequenceThird, sequenceForth,sequenceFifth, sequenceSix, sequenceSeven, sequenceEight, chorus, pingPongDelay }
