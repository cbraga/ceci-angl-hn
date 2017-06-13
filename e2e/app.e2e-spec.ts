import { AnglHackerNewsPage } from './app.po';

describe('angl-hacker-news App', () => {
  let page: AnglHackerNewsPage;

  beforeEach(() => {
    page = new AnglHackerNewsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
