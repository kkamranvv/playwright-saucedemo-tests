interface TestDataJsonPlaceHolder {
  posts: {
    createPost: { title: string; body: string; userId: number };
    updatePostPut: { title: string; body: string; userId: number };
    updatePostPatch: { title: string };
  };
}

export const TestData: TestDataJsonPlaceHolder = {
  posts: {
    createPost: {
      title: "kamikTest",
      body: "Test Body",
      userId: 8,
    },
    updatePostPut: {
      title: "kamikTest2",
      body: "Test Body2",
      userId: 9,
    },
    updatePostPatch: {
      title: "KamikTest3",
    },
  },
};
