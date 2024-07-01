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
});
