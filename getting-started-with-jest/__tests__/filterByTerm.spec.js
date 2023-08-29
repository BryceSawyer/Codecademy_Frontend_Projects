const filterByTerm = require("../src/filterByTerm");


describe('Filter function', () => {
    test("it should filter by a search term (link)", () => {
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];

        const outPut = [{ id: 3, url: "https://www.link3.dev" }];

        expect(filterByTerm(input, "LiNk")).toEqual(outPut);

    });

    test("it should filter by a search term (uRl)", () => {
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];

        const outPut = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" }];

        expect(filterByTerm(input, "uRl")).toEqual(outPut);

    });

    test('it should throw when searchTerm is empty string', () => {
       const input = [];

       expect(() => {
        filterByTerm(input, "");
      }).toThrowError(Error("searchTerm cannot be empty"));
    });
   });