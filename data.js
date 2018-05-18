module.exports.personas = {
  'Ellen Who': {
    name: 'Ellen Who',
    quote: '',
    description: '',
    happiness: 6, // 0-6
    energy: 10, // 0-10
    scores: {
      security: 2, // 0-8
      nature: 6, // 0-8
      culture: 4, // 0-8
      money: 8, // 0-8
      social: 0, // 0-8
    }
  },
  'Greet de Jong': {
    name: 'Greet de Jong',
    quote: '',
    description: '',
    happiness: 6, // 0-6
    energy: 6, // 0-10
    scores: {
      security: 0, // 0-8
      nature: 6, // 0-8
      culture: 8, // 0-8
      money: 4, // 0-8
      social: 2, // 0-8
    }
  },
  'Brad Tipp': {
    name: 'Brad Tipp',
    quote: '',
    description: '',
    happiness: 6, // 0-6
    energy: 8, // 0-10
    scores: {
      security: 2, // 0-8
      nature: 6, // 0-8
      culture: 4, // 0-8
      money: 8, // 0-8
      social: 0, // 0-8
    }
  },
  'Ping Lee': {
    name: 'Ping Lee',
    quote: '',
    description: '',
    happiness: 6, // 0-6
    energy: 6, // 0-10
    scores: {
      security: 0, // 0-8
      nature: 2, // 0-8
      culture: 8, // 0-8
      money: 6, // 0-8
      social: 4, // 0-8
    }
  },
  'Naru Muhammadu': {
    name: 'Naru Muhammadu',
    quote: '',
    description: '',
    happiness: 6, // 0-6
    energy: 8, // 0-10
    scores: {
      security: 4, // 0-8
      nature: 8, // 0-8
      culture: 2, // 0-8
      money: 6, // 0-8
      social: 0, // 0-8
    }
  }
}

module.exports.tasks = {
  'Markin\' the law': {
    name: 'Markin\' the law',
    taskDescription: 'When good things happen, people get richer, people will want to steal things too. Give the established law enforcers a place to eat donuts, however be aware that not everyone will be happy with this new building.',
    resultDescription: '',
    scores: {
      security: 30,
      nature: 0,
      culture: -10,
      money: 0,
      social: 10,
    },
    threshold: 10,
    currentValue: 0
  },
  'I want to believe': {
    name: 'I want to believe',
    taskDescription: 'Prayer is rumored to have a healing property so there might be something to say for a religious building. No one really knows what the religion of the Minicipalitans is but not everyone is in favor of it nonetheless...',
    resultDescription: '',
    scores: {
      security: -20,
      nature: 0,
      culture: 20,
      money: -10,
      social: 0,
    },
    threshold: 10,
    currentValue: 0
  },
  'A perfect stranger': {
    name: 'A perfect stranger',
    taskDescription: 'Now that the citizens of the Minicipality have a pretty okay life it is time to give back. A refugee center will help other people to be safe. You will have to sacrifice some of the trees to build the enormous building though.',
    resultDescription: '',
    scores: {
      security: 0,
      nature: -30,
      culture: 0,
      money: 0,
      social: 20,
    },
    threshold: 10,
    currentValue: 0
  },
  'www.buymystuffnow.com': {
    name: 'www.buymystuffnow.com',
    taskDescription: 'More things to do and more things to sell, sell, sell. Whatever it is; a petrock, your limited DVD of the Avengers (now retro) or the ashes of your great-aunt Frida you can see it online to someone else!',
    resultDescription: '',
    scores: {
      security: 10,
      nature: 0,
      culture: 0,
      money: 20,
      social: -10,
    },
    threshold: 10,
    currentValue: 0
  },
  'Let the sun shine!': {
    name: 'Let the sun shine!',
    taskDescription: 'Get the D, the vitamin D! The sun is shining bright and while it is good for us, we can do more with it. We have to add solar panels to the buildings even if it is expensive, right?',
    resultDescription: '',
    scores: {
      security: 0,
      nature: 30,
      culture: 0,
      money: -20,
      social: 0,
    },
    threshold: 10,
    currentValue: 0
  }
}