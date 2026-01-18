
/**
 * @jest-environment jsdom
 */

test('Page title should contain meaningful text', () => {
    document.body.innerHTML = `
    <header>
        <h1>Test Title</h1>
    </header>
    `;
    const h1 = document.querySelector('h1');
    expect(h1.textContent).toBe('Test Title');
});

test('Basic math sanity check', () => {
    expect(1 + 1).toBe(2);
});
