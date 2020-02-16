import { useRouter } from 'next/router';

export default function Song() {
  const router = useRouter();

  return (
    <div>
      <p>This is the blog post content.</p>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </div>
  );
}
