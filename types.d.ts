export interface Video {
  caption: string;
  video: {
    asset: {
      _id: string;
      url: string;
    };
  };
  _id: string;
  postedBy: {
    _id: string;
    userName: string;
    image: string;
  };
  likes: ILikes[];
  comments: IComment[];
  userId: string;
}

export interface IUser {
  _id: string;
  _type: string;
  userName: string;
  image: string;
}

export interface ILikes {
  _key: string;
  _ref: string;
}

interface IComment {
  comment: string;
  _key: string;
  postedBy: {
    _ref: string;
    _type: string;
    _id: string;
  };
}
