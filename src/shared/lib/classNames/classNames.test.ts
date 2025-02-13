import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
	test('with class', () => {
		expect(classNames('someClass')).toBe('someClass');
	});

	test('with class and additional classes', () => {
		const expected = 'someClass class1 class2';

		expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
	});

	test('with class and additional classes and mods hovered', () => {
		const expected = 'someClass class1 class2 hovered';

		expect(classNames('someClass', { hovered: true }, ['class1', 'class2'])).toBe(expected);
	});

	test('with class and additional classes and mods hovered = false', () => {
		const expected = 'someClass class1 class2';

		expect(classNames('someClass', { hovered: false }, ['class1', 'class2'])).toBe(expected);
	});

	test('with class and additional classes and mods hovered = undefined', () => {
		const expected = 'someClass class1 class2';

		expect(classNames('someClass', { hovered: false }, ['class1', 'class2'])).toBe(expected);
	});
});
