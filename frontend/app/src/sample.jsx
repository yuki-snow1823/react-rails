import React from 'react';
import { useQuery, gql } from "@apollo/client";

const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
      body
    }
  }
`;

export const Sample = () => {
    const {loading, error, data} = useQuery(GET_BOOKS);

    if (loading) return <>'ロード中....'</>
    if (error) return <>`Error ${error.message}`;</>

    return (
        <>
            {data.books.map(user => (
                <div key={user.id}>
                    <h1>{user.title}</h1>
                    <h2>{user.body}</h2>
                </div>
            ))}
        </>
    )
}