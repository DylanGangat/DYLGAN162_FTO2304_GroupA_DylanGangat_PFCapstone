const PodcastHero = () => {
  return (
    <div className="grid gap-8 sm:auto-cols-fr sm:grid-flow-col">
      <div>
        <span className="font-bold">Back</span>
        <h1 className="font-heading mt-8 bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-3xl font-bold text-transparent">
          This Is Actually Happening
        </h1>
        <p className="mt-8">
          What if your mother left to follow a cult… or you woke up in a morgue…
          or if your boat got caught in a storm and began to sink -- what would
          you do? This is Actually Happening brings you extraordinary true
          stories of life-changing events told by the people who lived them.
          From a man who finds out a celebrity crush isn’t who she seems to a
          woman stranded in a Mexican desert fighting to survive, these stories
          will have you on the edge of your seat waiting to hear what happens
          next. New episodes come out every Tuesday for free. Listen 1-week
          early and to exclusive past episodes - all ad-free - with Wondery+ or
          Amazon Music with a Prime membership or Amazon Music Unlimited
          subscription.
        </p>
      </div>
      <figure>
        <img
          className="h-auto w-full rounded-lg"
          src="https://content.production.cdn.art19.com/images/5a/4f/d4/19/5a4fd419-11af-4270-b31c-2c7ed2f563a5/bc913bc926be23d04c9a4d29a829269a753be3d2612dad91f7e92ba4618fefc5c8802af29a1d32b3261eb03f83613e2535e3c574469b0cb510c32cd8d94cfaa1.png"
          alt="podcast show"
        />
      </figure>
    </div>
  );
}

export default PodcastHero