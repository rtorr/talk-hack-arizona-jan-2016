## Start

Hey everyone, my name is Richard Torruellas. I am Front End Engineer, mostly 
focused on User Interfaces. 

Today I am going to talk to you about Web Development, and "where we are". For this talk
I thought it would be interesting to show you all a glimpse at some of the new things I am
doing to help improve development. 

Don't worry about having to code along with this talk. I will tweet out the slides and code after the talk.

To talk about where we are, its always good to look back first, and kind of see where we came _from_.

## Where we were

This is what apple.com looked like the year I created my first website. Things weren't really too dynamic back then.
Most webpages were just text documents with some html and links to other documents that were html. Browsers didn't 
have debugging tools. No stack overflow. Amazon.com was just taking off. 

- JavaScript/Ajax (Real adoption started around 1999)
- CSS (Internet Explorer 5.0 for the Macintosh, shipped in March 2000, was the first browser to have full (better than 99 percent) CSS 1 support)

# Where we are

I had no idea at the time when I named this talk that it was the name of a One Direction movie.

- Sass

Lets us write css in a maintainable way.

- Node/NPM

Nodejs is more than server side JavaScript. Almost every single new project uses node in some way to help
build our web front ends.

We use npm to install and update dependencies.

- Webpack

Helps bring a lot of modern developer tools together

- Chrome Dev Tools

Lets us debug HTML/CSS/JavaScript. Poke at values in realtime. See what our code is actually doing. Realtime feedback
is amazing isn't it?

## Prototyping

slide description: Christmas Eve 2011. 

As a front end engineer, it is a lot easier to see what I am doing. This means I can sometimes get away with "give me a few days
and we can test this idea", and give a relatable outcome, even to non technical people.

* I like realtime feedback

Realtime feedback lets me see what the results of my code is _why i am coding_. No more "code, recompile, refresh, see results". If you are working
on a team, you can pair up with people can try different things out together, see what works best. 

For front end web people, this means I can have different browsers open, including my phone and see how each browser responds to my changes.

So what is that like?

***Demo Part 1***

Show chrome first
Then code

I can keep coding and see results at the same time. Refreshing or recompiling does not take me away from my code. It almost feels like
making art. When you paint on a canvas, you can see paint. Refine as you go. I could see web designers using this workflow, and im sure
some already do.

* How was this done?

## How can I make this even better

What if you could check out each state of your application. You could play through each state many times without having to start over each time. 
We can test this realtime feedback in the middle of any state.

***Demo Part 2***

Imagine if you had a bug every time x, y, and z happened. You can now play through the states of your application to see what happens between
y and z that results in a bug. You might have different states in your css. You can transition back and forth to see how it plays out.

If you were really clever, you could store all of this state some where, send the state to someone in your team, and show what you did
to reproduce a bug (or feature). 

# How was this done?

Well, we are using something that was really invented in the functional programming world. There are more specifics about this, but in
short: 

Our view is just a result of data.

Our data is immutable, so it will never be changed. 

Each time we change something, we push that state into an immutable list.

Now to play back through each state, we just iterate over the immutable list and replace the views state with that index. It's about 50 lines of code.

## Continued Research

* How can this help your product?

Optimistic updating. You can look at the demo and imagine we save the comment in a database some where. To show the user
instant feedback, we can assume the request to save this in the database will be successful. So when the user submits
a comment, we show it immediately show the next successful state.

Things like this make your app feel "realtime" and fast.

Say if your server had an error saving their comment, you now know how to rollback your view to the edit state. 

Assume the best results, have a backup plan for when it fails.

- David Nolen

Main clojurescript contributor. Has many talks on this subject. 

- Evan Czaplicki

lead designer and developer of Elm. Elm has a lot of these ideas
built into the language, along with many other benefits.

*** DEMO Time traveling debugger ***  

## Technology Moves Really Fast

How do I keep up?

You don't.

Get good at the fundamentals. This goes for any discipline really. If you get really good at JavaScript (or any language), its going to be super 
easy to transition to anything else. Most languages are more similar than they are different. You will always have the fundamentals to fallback on.

You will be able to assess most new things without even having to install them. You can read about new things without trying them. I am not 
suggesting you dont try new thing, im saying you don't have to be good, or try everything.

## Keep making new things

This will obviously help you get experience. What I am really getting at here, is don't stop reinventing the wheel. Apple didn't invent the MP3 player, 
they just did it way better than anyone before them. We need new approaches to solve the same problem. I would rather have what we have now than what 
we did 10 years ago.

## "turn ideas into software"

What does that even mean. Think about it this for a minute. You are taking an idea, and creating something from nothing.
It could be a game, it could be art, it could be music, or it could be a boring product the world needs.

## I don't think the hard parts are the code

In the real world we don't really get specifications. We need to figure out a lot of things along the way.
We might scrap ideas you have worked on for weeks. Your idea might not win. Once you figure out
what you ARE making, the road gets a lot less bumpy.

## Things come up

Sometimes your monitor and hard drive die in one day. 

Emotions are involved. 

We work with humans more than computers.

