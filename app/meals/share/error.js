'use client';

export default function Error({error}) {
  return (
    <main className="error">
      <h1>An error ocurred!</h1>
      <p>Failed to save the meal data.</p>
    </main>
  );
}