const path = require('path');

export default {
  port: 7777,
  bots: [
    {
      routeName: 'jira',
      channelId: '-1001018013852',
      templatesPath: path.join(__dirname, '../Templates', 'JIRA'),
      token: '290491673:AAEUvxQ8twy6owhgct-COo7OkcO8KfgfTuA',
    },
    {
      routeName: 'confluence',
      channelId: '-1001018013852',
      templatesPath: path.join(__dirname, '../Templates', 'JIRA'),
      token: '290491673:AAEUvxQ8twy6owhgct-COo7OkcO8KfgfTuA',
    },
    {
      routeName: 'bitbucket',
      channelId: '-1001018013852',
      templatesPath: path.join(__dirname, '../Templates', 'JIRA'),
      token: '290491673:AAEUvxQ8twy6owhgct-COo7OkcO8KfgfTuA',
    },
  ],
};
