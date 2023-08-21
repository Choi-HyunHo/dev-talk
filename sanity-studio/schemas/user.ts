// 모델 정의 - User라는 데이터 모델
export default {
  title: 'User',
  name: 'user',
  type: 'document',
  fields: [
    {
      title: 'Username', // studio UI 에서 보는 이름
      name: 'username', // 실제 DB에서 접근할 때 사용하는 이름(key)
      type: 'string',
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'string',
    },
    {
      title: 'Following',
      name: 'following',
      type: 'array',
      of: [
        {
          type: 'reference', // 참고
          to: [{type: 'user'}], // user타입에 대한 스키마 참고
        },
      ],
      validation: (Rule: any) => Rule.unique(), // 중복x 유효성 검사
    },
    // {
    //   title: 'Followers',
    //   name: 'followers',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'reference', // 참고
    //       to: [{type: 'user'}], // user타입에 대한 스키마 참고
    //     },
    //   ],
    //   validation: (Rule: any) => Rule.unique(), // 중복x 유효성 검사(고유한 값)
    // },
    // {
    //   title: 'Bookmarks',
    //   name: 'bookmarks',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'reference',
    //       to: [{type: 'post'}],
    //     },
    //   ],
    //   validation: (Rule: any) => Rule.unique(),
    // },
  ],
}
