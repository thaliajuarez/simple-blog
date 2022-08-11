# TASK - Create a simple blog using vanilla JavaScript
Create, read, and add comments to post on a single page. The following breakdown of the development cycle was written by JM.

## Defining the need

Given user story: 
> "Mike is a trail runner. He wants to publish brief posts describing trails he has been to and share them with the World. He appreciates simplicity, he would like to publish in one-click. He loves to receive feedback as comments from his readers but is afraid of trolls and negativity. He has a short span of attention, He wishes he could see all, posts and comments in one place."

Use cases:

1. User wants to publish brief posts to his blog for sharing with one-click
2. User wants readers to comment on his posts (receive feedback)
3. User wants to see all published posts and comments in one place
4. User requires comment moderation to prevent trolling and negativity

## Defining requirements

Example: A microblog Application

Actors: blogger, reader
Views: Main page

| Req | Use Case | Description      | Trigger                                                    | Outcome                                                                                                                             |
| --- | -------- | ---------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 1   | 1        | Create Post      | Blogger types content in edit box, presses "Submit" button | post gets listed                                                                                                                    |
| 2   | 1        | List Posts       | Post creation                                              | Program renders post contents within Post box in (row x 3) grid on canvas (data aggregation)                                        |
| 3   | 2        | Create Comment   | Reader types comment in edit box, presses "Submit" button  |                                                                                                                                     |
| 4   | 3        | Submit Comment   | Comment creation                                           | Program renders placeholder for comment in list within Post box "awaiting moderation" (asynchronous interaction)                    |
| 5   | 4        | Moderate Comment | Comment submission                                         | Program sends request for moderation, approved comments get published, rejected gets replaced with "rejected by moderation" message |
| 6   | 3        | List Comment     | Comment approved                                           | Program replaced comment placeholder in list within Post box with comment content                                                   |

## Visualizing the product with wireframing

## Software Development

### What happens when you use vanilla JavaScript instead of a framework?
- Writing an application in vanilla JS means you are manually manipulating the Document Object Model (DOM), "a set of APIs for controlling HTML and styling information that makes heavy use of the Document object".  [source](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)

- There exist two kinds of programming paradigms, or approaches of writing code, imperative and declarative. Imperitive is procedural, object-oriented programming, while declarative is functional. Declarative languages include SQL, HTML and CSS, and other database query languages. [source](https://www.linkedin.com/pulse/imperative-vs-declarative-programming-javascript-yehuda-margolis)

- Frameworks take care of DOM transitions, meaning you do not need to manually control the DOM with all the possible transitions it can go through. [source](https://medium.com/@jasim_ab/should-you-use-a-javascript-framework-or-go-vanilla-c7cddb2b46b1)
