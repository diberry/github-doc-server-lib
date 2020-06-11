import { GitHub } from '../../src/index';

describe('Octokit-User', () => {

    describe('user profile', () => {

        it('public profile of any user', async (done) => {

            try {

                const TOKEN = "8626cc6f23dc451bef8a3d28f7e034d487226091"

                const username= "torvalds"
                const type= "owner"

                const octokitResponse = await GitHub.User.getProfile(TOKEN, username)

                done()
            } catch (error) {
                done(JSON.stringify(error))
            }

        });
        it('private profile of authenticated user', async (done) => {

            try {

                const TOKEN = "8626cc6f23dc451bef8a3d28f7e034d487226091"

                const username= "diberry"

                const octokitResponse = await GitHub.User.getPrivateProfile(TOKEN)

                done()
            } catch (error) {
                done(JSON.stringify(error))
            }

        });
    });
});