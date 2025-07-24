// import { useEffect } from 'react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/apple/callback/')({
  component: Index,
});

function Index() {
  // useEffect(() => {
  //   const hash = window.location.hash.substring(1);
  //   const params = new URLSearchParams(hash);

  //   const token = params.get('id_token');
  //   const state = params.get('state');

  //   console.group('Apple');
  //   console.log(token, state);
  //   console.groupEnd();
  // }, []);

  return null;
}

export default Index;
