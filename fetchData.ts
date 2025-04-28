const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

interface IComment {
  id: number;
  email: string;
}

const getData = async (url: string): Promise<IComment[]> => {
  const response = await fetch(url);
  const data = await response.json();

  data.forEach((comment: IComment) => {
    console.log(`ID: ${comment.id}, Email: ${comment.email}`);
  });
  return data;
}
