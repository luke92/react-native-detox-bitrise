import {device, element, by, waitFor} from 'detox';

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

  it('should enter the number and visualize another texts', async () => {
    const input = element(by.id('numeric-input'));
    await input.tap();
    await new Promise(resolve => setTimeout(resolve, 2000));
    await input.typeText('123456');
    await new Promise(resolve => setTimeout(resolve, 2000));
    await input.typeText('\n');
    await new Promise(resolve => setTimeout(resolve, 2000));
    await waitFor(element(by.text('Debug')))
      .toBeVisible()
      .withTimeout(10000);
  });

  it('should enter the password and visualize another texts', async () => {
    const input = element(by.id('password'));
    await input.tap();
    await new Promise(resolve => setTimeout(resolve, 2000));
    await input.typeText('Example123!');
    await new Promise(resolve => setTimeout(resolve, 2000));
    await input.typeText('\n');
    await new Promise(resolve => setTimeout(resolve, 2000));
    await waitFor(element(by.text('Debug')))
      .toBeVisible()
      .withTimeout(10000);
  });
});
