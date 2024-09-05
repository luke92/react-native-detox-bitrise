import {device, element, by, waitFor} from 'detox';

const closeSoftwareKeyboard = async elementSelected => {
  await elementSelected.typeText('\n');
};

const checkTextIsVisible = async text => {
  await waitFor(element(by.text(text)))
    .toBeVisible()
    .withTimeout(10000);
};

const isVisibleSeeYourChanges = async () => {
  await checkTextIsVisible('See Your Changes');
};

const waitExecution = async (timeout = 2000) => {
  return await new Promise(resolve => setTimeout(resolve, timeout));
};

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
    await waitExecution();
    await input.typeText('123456');
    await waitExecution();
    await closeSoftwareKeyboard(input);
    await waitExecution();
    await isVisibleSeeYourChanges();
  });

  it('should enter the password and visualize another texts', async () => {
    const input = element(by.id('password'));
    await input.tap();
    await waitExecution();
    await input.typeText('Example123!');
    await waitExecution();
    await closeSoftwareKeyboard(input);
    await waitExecution();
    await isVisibleSeeYourChanges();
  });

  it('should enter multilines and close keyboard', async () => {
    const input = element(by.id('text-area'));
    await input.tap();
    await waitExecution();
    await input.typeText('A some description');
    await waitExecution();
    await closeSoftwareKeyboard(input);
    await waitExecution();
    await isVisibleSeeYourChanges();
  });
});
