import faker from 'faker'

const createPost = () => {
    return {
      id: faker.datatype.uuid(),
      title: faker.name.title(),
    };
};

const createPosts = (length = 1) => Array.from({length}, createPost)

export const fakePosts = createPosts(50);