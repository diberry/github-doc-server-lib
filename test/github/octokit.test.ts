import { getOctokit } from '../../src/github/octokit';

describe('Octokit', () => {

    it('undefined token throws exception, with undefined timeout', () => {

        const token = undefined;
        const timeout = undefined;

        expect.assertions(2);

        try {
            const octokit = getOctokit(token, timeout);
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty('message', 'Token parameter expected, but not received');
        }
    });
    it('undefined token throws exception, with valid timeout', () => {

        const token = undefined;
        const timeout = (60 * 1 * 1000) // 1 minute;

        expect.assertions(2);

        try {
            const octokit = getOctokit(token, timeout);
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty('message', 'Token parameter expected, but not received');
        }
    });
    it('token with undefined timeout succeeds', () => {

        const token = "123";
        const timeout = undefined

        const octokit = getOctokit(token, timeout);
        expect(octokit).not.toBe(undefined);
    });
    it('token with timeout succeeds', () => {

        const token = "123";
        const timeout = (60 * 1 * 1000) // 1 minute;

        const octokit = getOctokit(token, timeout);
        expect(octokit).not.toBe(undefined);
    });
});