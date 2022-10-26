const synth = {
  volume: -20,
  detune: 0,
  portamento: 0.05,
  envelope: {
    attack: 0.05,
    attackCurve: 'exponential',
    decay: 0.2,
    decayCurve: 'exponential',
    sustain: 0.2,
    release: 1.5,
    releaseCurve: 'exponential'
  },
  oscillator: {
    type: 'sine',
    modulationType: 'sine',
    // partialCount: 0,
    // partials: [],
    phase: 0,
    harmonicity: 0.5
  }
}

    const distortion = {
      wet: 0.5,
      distortion: 0.4,
      oversample: '4x'
    }

    const autoWah = {
      wet: 0.5,
      baseFrequency: 100,
      octaves: 6,
      sensitivity: 0,
      Q: 2,
      gain: 2,
      follower: 0.6
    }

    const vibrato = {
      wet: 0.5,
      maxDelay: 0.01,
      frequency: 10,
      depth: 0.8,
      type: 'sine'
    }

    const chorus = {
      wet: 0.3,
      type: 'sine',
      frequency: 1.5,
      delayTime: 3.5,
      depth: 0.7,
      spread: 180
    }

const pingPongDelay = { wet: 0.4, delayTime: 0.25, maxDelayTime: 1 }


const sequence = {steps:[
  {
    time: '0:0:0',
    noteName: 'A4',
    duration: '4n',
    velocity: 1
  },
  {
    time: '0:0:3',
    noteName: 'C5',
    duration: '4n',
    velocity: 1
  },
  {
    time: '0:1:2',
    noteName: 'E5',
    duration: '4n',
    velocity: 1
  },
  {
    time: '0:2:1',
    noteName: 'G5',
    duration: '4n',
    velocity: 1
  },
  {
    time: '0:3:1',
    noteName: 'C5',
    duration: '4n',
    velocity: 1
  },
  {
    time: '1:0:3',
    noteName: 'A4',
    duration: '4n',
    velocity: 1
  },
  {
    time: '1:1:2',
    noteName: 'F4',
    duration: '4n',
    velocity: 1
  },
  {
    time: '1:2:1',
    noteName: 'G4',
    duration: '4n',
    velocity: 1
  },

], duration:'2m', loop:true}

export { synth, sequence, distortion, autoWah, vibrato, chorus, pingPongDelay }
