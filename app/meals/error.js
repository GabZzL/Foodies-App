'use client';

export default function Error({error}) {
  return (
    <main className="error">
      <h1>An error ocurred!</h1>
      <p>Failed to fetch meal data.</p>
    </main>
  );
}
