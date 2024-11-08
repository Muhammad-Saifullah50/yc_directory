import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>;
}) {

  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      _id: "1",
      views: 55,
      author: { _id: 1, name: 'sasasass' },
      title: "Pitch Your Startup",
      description: "Connect With Entrepreneurs",
      image: "https://picsum.photos/seed/picsum/200/300",
      category: "startups",
    }
  ]
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup <br /> Connect With Entrepreneurs</h1>

        <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competetions </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Results for "${query}"` : "All  Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? posts.map((post) => {
            return (
              <StartupCard
                key={post._id}
                post={post}
              />
            )
          }):  (
            <p>No startups found</p>
          )}
        </ul>
      </section>
    </>);
}
