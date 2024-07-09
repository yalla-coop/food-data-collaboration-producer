import {createLineItems, getLineItems} from './lineItems'

describe('lineItems', () => {
    it('Can be rembered and recalled', async () => {
        await createLineItems(5, [{id: 1234}, {id: 56678}]);
        const result = await getLineItems(5);
        expect(result).toStrictEqual([{externalId: 1, shopifyId: "1234"}, {externalId: 2, shopifyId: "56678"}])
    });
});