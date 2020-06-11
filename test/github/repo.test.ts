import { GitHub } from '../../src/index';

describe('Octokit-Repo', () => {

    describe('list repos', () => {

        it('list repo for user and role', async (done) => {

            try {

                const TOKEN = "8626cc6f23dc451bef8a3d28f7e034d487226091"

                const username= "dfberry1"
                const type= "owner"

                const octokitResponse = await GitHub.Repo.getRepoListByUserRole(TOKEN, username, type)

                done()
            } catch (error) {
                done(JSON.stringify(error))
            }

        });
    });
});