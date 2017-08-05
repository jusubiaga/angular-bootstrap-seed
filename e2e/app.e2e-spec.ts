import { SandboxThreatwsUiPage } from './app.po';

describe('sandbox-threatws-ui App', () => {
  let page: SandboxThreatwsUiPage;

  beforeEach(() => {
    page = new SandboxThreatwsUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
