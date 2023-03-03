import { classNames } from 'shared/lib/class-names/class-names';

describe('test classNames function', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    const expected = 'cl cl1 cl2';
    expect(classNames('cl', {}, ['cl1', 'cl2'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'cl cl1 cl2 cl3 cl4 cl5';
    expect(classNames('cl', {
      cl3: true,
      cl4: true,
      cl5: true,
    }, ['cl1', 'cl2'])).toBe(expected);
  });

  test('with mods false', () => {
    const expected = 'cl cl1 cl2 cl3 cl4';
    expect(classNames('cl', {
      cl3: true,
      cl4: true,
      cl5: false,
    }, ['cl1', 'cl2'])).toBe(expected);
  });

  test('with mods undefined', () => {
    const expected = 'cl cl1 cl2 cl3 cl4';
    expect(classNames('cl', {
      cl3: true,
      cl4: true,
      cl5: undefined,
    }, ['cl1', 'cl2'])).toBe(expected);
  });
});
