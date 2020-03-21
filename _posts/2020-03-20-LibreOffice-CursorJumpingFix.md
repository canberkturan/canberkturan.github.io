---
author: Canberk TURAN
lang: en
title: LibreOffice - Cursor Jumping Fix
layout: post
---

Hello, I'll tell about my first fixing a bug in LibreOffice. I was informed about this bug by a Certified LibreOffice Developer Gülşah KÖSE.


- You can look at the bug with this link: <a href="https://bugs.documentfoundation.org/show_bug.cgi?id=81226">tdf#81226</a>

- Firstly, I'm gonna say how to get this error:

> 1. Open a new Writer file.
> 2. Insert some text has two or more lines.
> 3. Move the cursor center of any line.
> 4. Go to last line by pressing down arrow key.
> 5. Press again.
> 6. Cursor won't move.

<br/>
<img src="/assets/cursor_bug.gif" style="width: auto; height: auto"/>
<br/>

- If you try these steps on another graphical text editors(like gedit, mousepad etc.), cursor will move to end of the last line.

- When, I started debugging process, I used 'git grep' command to find the source files and functions execute when pressing up or down keys.

- In source directory, I searched 'cursor', 'up', 'down', 'updown' and 'move' keywords with these lower and upper forms.

- And I found a directory: sw/source/core/crsr/

- After entering the directory, I searched the keywords said before again.

- I reached a couple possible source files: swcrsr.cxx, crsrsh.cxx, editsh.cxx

- I read all parts that includes 'up', 'down' keywords in these files.

- And I found the right function that has expected name: UpDown Function in swcrsr.cxx file

After I found the function, my next job was understanding how does this function work.

- I read again the function but I didn't find significant information.

- Next, I put a lot of log functions into the function to find which parts of function run when I go to the last line of document and which parts of does not.

- I found an if-condition processed when I pressed down arrow key at the last line.

- After I found if-condition, I researched to find how to move cursor position. 

- And I saw a variable has named as aOldPos. I detected which type is it and which values kept by it. This variable was used for setting cursor position.

- And I created a new variable that has same type with aOldPos and assigned new position.

- And I built and run the LibreOffice again.

I entered some text and moved the cursor to the last line of file. Pressed down arrow key again. And results were amazing. It worked. After the surprising, I thought what if I go to first line of the file and press the up arrow key again, what would happen? I tried but it doesn't worked. Cursor didn't move. But the solution was simple because UpDown function had a paramether named as bUp. This paramether was taking a boolean value takes the cursor movement direction.(true means up, false means down)

- I added an ternary operator checks bUp variable to catch direction of cursor movement and assign the right position.

- If bUp was true, position variable would take 0 value. If wasn't, position variable would take length of the line.

- I built and run the LibreOffice again.

- I entered some random text, moved the cursor to the last line, pressed down key again. The cursor went to end of the last line as expected. Next, I moved the cursor to the first line, pressed up key again. And It worked, The cursor went to start of the first line.

<br/>
<img src="/assets/cursor_fix.gif" style="width: 100; height: auto"/>
<br/>

Next of the debugging part, I submitted a patch to LibreOffice and added Gülşah Köse as reviewer. After some fixing typos and editing commit messages, She merged my patch. I thank her again from here. If you want to read her blog, you can reach on this [link][gulsahkose].

If you interest about my patch -> [Patch:89533][patch]

I had found a new problem about this cursor movement, after I fixed this bug. Cursor must move on same column after it jumped to start of the first line or end of the last line when up/down keys are pressed again. But cursor was moving on previous saved column. My next post will be about this problem.

[patch]: https://gerrit.libreoffice.org/c/core/+/89533
[gulsahkose]: http://www.gulsahkose.com
