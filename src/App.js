import { useState, useEffect } from 'react';
import * as marked from 'marked';
import dompurify from 'dompurify';
import Editor from './components/Editor';
import Preview from './components/Preview';
import Footer from './components/Footer';

const App = () => {
  const [editorInput, setEditorInput] = useState(initialText);
  const [previewOutput, setPreviewOutput] = useState({
    __html: ""
  });

  useEffect(() => {
    setPreviewOutput({
      __html: dompurify.sanitize(marked.parse(editorInput, {
        breaks: true,
      }))
    });
  }, [editorInput]);

  return (
    <div>
      <Editor editorInput={editorInput} setEditorInput={setEditorInput} />
      <Preview previewOutput={previewOutput} />
      <Footer />
    </div>
  );
};

const initialText = `# Markdown Previewer
    
This is a markdown previewer app built with react and [marked.js](https://marked.js.org/ "visit the marked.js site").
Keep reading to see how to use it and how cool the marked package is.
Also, there's some info about the best place on the internet to learn such fun stuff. Hint: It's [FreeCodeCamp](https://www.freecodecamp.org/ "visit the free code camp site")!

## Welcome to the markdown previewer!

You can simply enter some markdown in the editor at the top of the page. The content will almost instantly be shown on the page.
Have fun playing around and write your own blog article or something alike!

## Marked: built for speed!

Marked is a lightweight, low-level markdown compiler for parsing markdown. It can be used in a command line interface or in client-side and server-side javascript.
According to the [marked.js](https://marked.js.org/ "visit the marked.js site") documentation page, marked is:

> "Light-weight while implementing all markdown features from the supported flavors & specifications."

You can build cool things with it like a blog app for example, where the user can write articles in markdown without having to worry too much about writing html and css. For this codepen for example, I just added some basic styling with css, and now you can just write markdown in the editor to make a cool blog page! 

To use marked, you just import it and use the \`marked.parse()\` function to parse your markdown. It could look something like this:

    const someMarkdown = '# This will be displayed as an h1';
    const parsedMarkdown = marked.parse(someMarkdown);
    
So, if you build a blog app with marked, someone who doesn't know how to code, but knows a lot about gibbons, could write a nice article about a siamang in markdown! And easily add a cool image!
    
![A Siamang singing](https://upload.wikimedia.org/wikipedia/commons/d/de/Symphalangus_syndactylus%2C_Chiba_Zoo%2C_Japan.jpg)

I like Siamangs!

## FreeCodeCamp: The best place to learn coding! 

[FreeCodeCamp](https://www.freecodecamp.org/ "visit the free code camp site") is an online learning platform where you can learn web development, data science and other cool stuff. And it's all free! They have great interactive lessons and at the end of each course, you can apply your new skills by building cool project like this markdown previewer.

Why I like [FreeCodeCamp](https://www.freecodecamp.org/ "visit the free code camp site")? It's:
- Free
- Fun
- You get to build cool projects like this markdown previewer!

Somebody once said:
> "Hey that's cool!"

**I Hope you enjoy the markdown previewer!**
    `

export default App;
