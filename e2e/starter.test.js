import {device, element, by, waitFor} from 'detox';
import {format} from 'date-fns';

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

const getText = async detoxElement => {
  let valueElement = '';
  const attributes = await detoxElement.getAttributes();
  if (device.getPlatform() === 'ios') {
    valueElement = attributes?.label;
  } else {
    valueElement = attributes?.text;
  }
  if (!valueElement || valueElement === undefined) {
    return '';
  }
  return valueElement.toString();
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

  it('should have the same date', async () => {
    const elementDate = element(by.id('section_1_children'));
    await expect(elementDate).toBeVisible();
    const text = await getText(elementDate);
    const date = new Date();
    const formattedDate = format(date, 'MMMM dd, yyyy, hh:mm a');
    console.log('Jest Date', formattedDate);
    console.log('App Date', text);
    await expect(elementDate).toHaveText(formattedDate);
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
