const path = require('path')

// eslint-disable-next-line no-shadow
export enum PriorityName {
  LOWEST,
  LOW,
  MEDIUM,
  HIGH,
  HIGHEST,
  BLOCKING,
}

export class Priority {
  #id!: number

  #priority!: PriorityName

  constructor(id: number, priority: PriorityName) {
    this.#id = id
    this.#priority = priority
  }

  get id() {
    return this.#id
  }

  get priority() {
    return this.#priority
  }
}

export default {
  port: 7777,
  bots: [
    {
      routeName: 'jira',
      channelId: '1068803347',
      templatesPath: path.join(__dirname, '../../Templates', 'JIRA', 'src'),
      token: '5009195005:AAHrELxODmqALkTlbTaMUYgH3LNBgrBYxKI',
      priorities: [
        new Priority(1, PriorityName.HIGHEST),
        new Priority(2, PriorityName.HIGH),
        new Priority(3, PriorityName.MEDIUM),
        new Priority(4, PriorityName.LOW),
        new Priority(5, PriorityName.LOWEST),
        new Priority(6, PriorityName.BLOCKING),
      ],
    },
    {
      routeName: 'confluence',
      channelId: '-1001018013852',
      templatesPath: path.join(__dirname, '../../Templates', 'JIRA', 'src'),
      token: '290491673:AAEUvxQ8twy6owhgct-COo7OkcO8KfgfTuA',
    },
    {
      routeName: 'bitbucket',
      channelId: '-1001018013852',
      templatesPath: path.join(__dirname, '../../Templates', 'JIRA', 'src'),
      token: '290491673:AAEUvxQ8twy6owhgct-COo7OkcO8KfgfTuA',
    },
  ],
}
