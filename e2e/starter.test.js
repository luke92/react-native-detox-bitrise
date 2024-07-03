import {device, element, by} from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp({
      launchArgs: {
        detoxEnableSynchronization: 'NO',
      },
    });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have Step one', async () => {
    await expect(element(by.text('Step One'))).toBeVisible();
  });

  it('should have See Your Changes', async () => {
    await expect(element(by.text('See Your Changes'))).toBeVisible();
  });

  it('should enter the password', async () => {
    await element(by.id('password')).typeText('Example123!');
  });
});
