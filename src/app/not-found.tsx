import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center p-8">
      <div className="text-center max-w-lg">
        <h1 className="text-3xl md:text-4xl font-semibold">This page doesn’t exist yet</h1>
        <p className="mt-3 text-muted-foreground">The path you entered couldn’t be found. Check the URL or head back home.</p>
        <div className="mt-6">
          <Link href="/" className="btn btn-primary h-10 px-6">Go to homepage</Link>
        </div>
      </div>
    </div>
  )
}

