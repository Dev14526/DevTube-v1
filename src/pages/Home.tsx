export const Home = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Recommended</h1>
        <p className="text-muted-foreground">Videos we think you'll enjoy</p>
      </div>

      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
          <svg className="w-12 h-12 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">No videos yet</h3>
        <p className="text-muted-foreground max-w-md">
          Start uploading your developer content to see it here. Share tutorials, coding sessions, and tech talks with the community.
        </p>
      </div>
    </div>
  );
};