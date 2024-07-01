describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp({
      launchArgs: {
        detoxEnableSynchronization: 'NO',
      },
    });
  });

  /*
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  */

  it('should have Step one', async () => {
    await expect(element(by.text('Step One'))).toBeVisible();
  });

  it('should show hello screen after tap', async () => {
    await element(by.id('hello_button')).tap();
    await expect(element(by.text('Hello!!!'))).toBeVisible();
  });
});
