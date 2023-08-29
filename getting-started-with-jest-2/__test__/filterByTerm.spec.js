const filterByTerm = require('../src/filterByTerm');

describe('Filter function', () => {
    const input = [
        { id: 1, url: "https://www.url1.dev" },
        { id: 2, url: "https://www.url2.dev" },
        { id: 3, url: "https://www.link3.dev" }
    ];

    test('it should filter by search term (link)', () => {
        const output = [
            { id: 3, url: "https://www.link3.dev" }
        ];

        expect(filterByTerm(input, 'link')).toEqual(output);
        expect(filterByTerm(input, 'Link')).toEqual(output);
    });

    test('it should filter by search term (uRl)', () => {
        const output = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" }
        ];

        expect(filterByTerm(input, 'uRl')).toEqual(output);
    });

    test('it should throw when searchTerm is empty string', () => {
        const output = "searchTerm can not be empty";

        expect(() => filterByTerm(input, '')).toThrow(output);
    });
});





    
    