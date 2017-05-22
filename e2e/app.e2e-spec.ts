import { NgAccordionAppPage } from './app.po';

describe('ng-accordion-app App', () => {
  let page: NgAccordionAppPage;

  beforeEach(() => {
    page = new NgAccordionAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
