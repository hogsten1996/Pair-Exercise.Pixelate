# Pixelate

An editor for your 8-bit art!

To get started:

* `npm install`
* `npm start`

This will start a small http server, which will serve up the index.html file, as well as any "static resources" (that is, CSS and JS files, as well as fonts) that the index.html requests (via `link` and `script` tags). You can view the page by opening `http://localhost:8080/` in your browser!

You can add your own CSS to `style.css`, and JavaScript to `script.js`! For further instruction, refer to the workshop. Have fun!


## Intro
### Goal
Today, we'll be building a small editor for making 8-bit art! You'll be able to re-create characters from all your favorite classic video games! Oh, and you'll also practice event handling and delegation, DOM manipulation, and some basic CSS.

<h5>Starting Point</h5>
<img src="https://learndotresources.s3.amazonaws.com/workshop/5a78dd00f8936400041bdb68/pixelate-01.png" />

<h5>Workshop Goal</h5>
<img src="https://learndotresources.s3.amazonaws.com/workshop/5a78dd00f8936400041bdb68/pixelate-02.png" />

### Setup
Follow these instructions to get started:

Creating the repo:
* Clone [this repo](https://github.com/Nievescs20/Pair-Exercise.Pixelate) to your local computer
* Navigate into the project and open it in VScode
*  Navigate to your GitHub page and create a new repository called "Pixelate"
* Copy the SSH from the top of the GitHub page, it will look similar to this: git@github.com:studentName/Pixelate.git
* Navigate back to your open VScode and confirm that your terminal is at the correct location, which should be inside of the cloned repo
* In your terminal type in `git remote -v` - you should see something similar to this: `origin  git@github.com:FullstackAcademy/Pair-Exercise.Pixelate.git (fetch)`
* Next, we are going to switch the origin from Fullstack's GitHub to your own GitHub by running the following command in your terminal:
* `git remote set-url origin` (paste the SSH that we copied in step 4)
* ex: `git remote set-url origin git@github.com:studentName/Pixelate.git`
* Since we have updated the origin of the code to be the GitHub repo that we created on our personal accounts. We now want to push the code up to GitHub with the `git push` command.  (if you refresh your GitHub, you should now see the starter code in the GitHub repo that you just created)

Adding our partner:
* Now we want to add our partner to the repo that we just created.  First, navigate back to the repo that we just created above. Then go to the `Settings` tab.
* On the left side of your screen you should see a list of options, one of which is called `Collaborators and Teams`, click on this option.  Github may prompt you to input your password.
* Next scroll down, and near the center of your page you should see a button that says `add people`.  Click on this button and then type in your partner's GitHub name and click on the correct user.  This should send an email and GitHub notification to your partner with instructors for joining the repo.
* The partner should now check their email (that is connected to GitHub) and accept the invitation to the repo.

Take a moment to review the starting point with your partner:


# When it's time to switch roles

* PartnerA should commit all of their work and push it to the main branch:

```bash
git add -A
git commit -m "A lovely commit message"
git push origin main
```

* PartnerB should then **pull**

```bash
git pull
```

* Once PartnerB completes the pull, they will have all of PartnerA's work, and you will both be ready to continue with roles reversed. When the time comes to switch again, you simply perform the same process (with roles reversed).

### Familiarize Yourself With Starting Point
Take a moment to examine the starting point with your partner. The most important file to check out is `index.html` - it contains HTML that our browser will use to construct the DOM, as well as `link` and `script` tags that cause the browser to request additional resources (we'll learn more about this process in the coming days).

In this exercise, you will work primarily out of `index.html`, `style.css`, and `script.js`. Take a moment to read through these files and see how their starting content relates to what you see when you navigate to `http://localhost:8080/` in your browser.

**Note**: This will only be possible after you run `npm install`, followed by `npm start`, which will start a small http server for the project.

<guide>
You have read the above
You have reviewed the starting point with your partner
</guide>

## Creating Rows
### Styling Table Cells
Our first task will be to get our grid of cells to appear.

An HTML table has three basic ingredients - the `<table>` tag, which contains a series of table rows (`<tr>`) as children, which in turn contain a series of table data cells (`<td>`). (There are other some others, but we won't worry too much about them today).

* In `index.html`, add the following HTML between the opening and closing `<table>` tags

```html
<tr>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td></td>
  <td></td>
  <td></td>
</tr>
```

If you refresh the page, you won't actually see any difference - this is because our `td` cells don't have any `style`! If you refer back to our goal, you'll see that what we want is for each `td` to have a **light gray background color** with dimensions of about **50x50 pixels**.

* Add a CSS rule to `style.css` that will make each `td` look the way we want

You'll know you've succeeded if you see something like this:

<img src="https://learndotresources.s3.amazonaws.com/workshop/5a78dd00f8936400041bdb68/pixelate-03.png" />
<br/>
<details>
<summary>Solution</summary>

```css
td {
  height: 50px;
  width: 50px;
  background-color: lightgray;
}
```
</details>

### Creating Elements
Creating a new DOM element with JavaScript is a two step process:

1. First, you must create the new element using `document.createElement`
2. Second, you must append the element to its parent using `parentElement.appendChild(newElement)`

For example, to add a new `li` to a `ul`, we might do something like this:

```javascript
const ul = document.getElementById('the-ul')
const newLi = document.createElement('li')
ul.appendChild(newLi)
```

Rather than hard-code a certain number of table rows in our HTML, let's create them dynamically using JavaScript!

* In `index.html`, remove the `<tr>` and `<td>` elements that you added in the previous step
* In `script.js`:
  * Select the `table` DOM element and store it in a variable
  * Write a function called `makeRow`
  * Your `makeRow` function should create a new `tr` element. It should create and append some number of new `td` elements to the `tr` (the example uses 20), and then append the `tr` element to the `table` element
  * Invoke the `makeRow` function several times

Check it out by refreshing the page - you should see a new row of cells for each time you invoked `makeRow`!

<details>
<summary>Solution</summary>
<img src="https://learndotresources.s3.amazonaws.com/workshop/5a78dd00f8936400041bdb68/pixelate-04.png" />
</details>

### Making Rows
Now that we have a convenient function for creating rows, let's make it so that users can add rows themselves when they click that "Add Row" button!

In `script.js`:

* Select the "add row" button's DOM element and store it in a variable
* Attach an event listener to the "add row" button - whenever the "add row" button is clicked, we want to fire the `makeRow` function

Refresh the page to try it out - you should be able to add as many rows as your heart desires!

<details>
<summary>Solution</summary>
<img src="https://learndotresources.s3.amazonaws.com/workshop/5a78dd00f8936400041bdb68/pixelate-05.png" />
</details>

## Adding Color
### Color Classes
Our next task will be to make it so that clicking on a cell will toggle its color (we'll just deal with one color for now).

We'll determine a cell's color by the presence or absence of a CSS class.

A common (and easy-to-read) way to do this might be to make several CSS classes that correspond the color(s) we want.

For example, a CSS class to give an element a red background color might be:

```css
.red {
  background-color: red;
}
```

* Add several CSS classes like the one above to your `style.css`. Feel free to choose your favorite colors!

### Event Delegation
We want to execute a JavaScript function every time a `<td>` cell is clicked. Does this mean we need to go through and add an event listener to **every** `<td>` element?

**No!** We can use _event delegation_. We'll attach the event listener to a parent element. When the child element is clicked, the event will "bubble up" to the parent and execute the parent's event handler.

* Determine which element to attach the event listener to. This should be the common ancestor of **every** `<td>` element

<details>
<summary>Solution</summary>
The `table` element makes the most sense! If we went with `tr`, we would need to attach it to _every_ `tr`.
</details>
<br/>
* Write a function called `colorize` and attach it as the click handler for the parent element. For now, simply log out the string `"clicked!"` - we'll deal with adding color in the next step

Try it out by refreshing and opening your browser's dev tools. Add some cells and click them - you should see `"clicked!"` logged to the console!

<details>
<summary>Solution</summary>
<img src="https://learndotresources.s3.amazonaws.com/workshop/5a78dd00f8936400041bdb68/pixelate-06.png" />
</details>

### Event Target
Now that we can fire a click handler, it's time to change the color of our `td` cells!

Because we're representing our colors as CSS classes, we can change the appearance of the DOM by mutating the `className` property on the selected DOM node.

For example:

```javascript
tdCell.className = 'red' // gives this DOM node the 'red' class
```

All we need to do is get the appropriate DOM node. Fortunately, we can find it on the `event` object that our event handler receives! In any event handler, `event.target` will be a reference to the actual DOM node that was clicked (which is not necessarily the DOM node to which we've attached the event listener).

In our event handler (that is, the `colorize` function),

* If your `colorize` function does not yet list the `event` as a parameter, add it now
* Obtain the target that was clicked from `event.target`
* If the target DOM node does not currently have a `className`, set it equal to one of your colors (to toggle it on)
* If the target DOM node already has a `className`, set it equal to an empty string (to toggle it off)

<details>
<summary>Solution</summary>
<img src="https://learndotresources.s3.amazonaws.com/workshop/5a78dd00f8936400041bdb68/pixelate-07.png" />
</details>
<br/>
Try it out - if clicking a cell causes that cell's color to change, you'll know that you've achieved your goal!

## Switching Colors
### Change Event
Last but not least, let's make it so that we can pick from a variety of colors! To do this, we'll take advantage of that `<select>` element and the `"change"` event it fires whenever we select something.

* In `index.html`, add an `<option>` tag for each CSS color class from your `style.css`

For example, if we wanted to choose between red and blue:

```html
<select>
  <option value="red">Red</option>
  <option value="blue">Blue</option>
</select>
```

<small>
Don't forget to include the `value` property! You want the value to match the names of your CSS class names, which should be lowercase. However, the way the options present themselves to the user should be capitalized!
</small>

* In your `script.js`, grab the `select` element from the DOM and attach an event listener for the [`"change"`](https://developer.mozilla.org/en-US/docs/Web/Events/change) event. Give it a callback function that expects to receive the `event` as an argument, and then console logs `event.target.value`.

Try it out by refreshing the page and opening your browser's dev tools. Every time you pick something from the `select` field, you should see that option's value logged to the console.

### Choosing A Color
Now that we can choose a color, our JavaScript app needs some notion of a "chosen color". We want to put aside whatever color has been chosen by the user, and then change the cells that we click to be that color.

Try to figure it out! The first hint below will suggest an approach if you get stuck.

<details>
<summary>Solution</summary>
You could simply store the selected color in a variable, and reassign that variable every time someone changes the color.

Make sure to give it some default value, as well (ideally, this should match the first option in your select).
</details>
<br/>
You'll know you've succeeded when you can successfully change colors. You may find a quirk occurs when trying to "paint over" an existing color - we'll address this in the next section!

<br/>
<details>
<summary>Solution</summary>
<img src="https://learndotresources.s3.amazonaws.com/workshop/5a78dd00f8936400041bdb68/pixelate-08.png" />
</details>

### Toggling Colors
We're almost there, but there may be a bug that occurs when you try to "paint over" an existing color. If you

1. Color a cell one color (let's say "red"), then
2. switch to a different color (let's say "blue"), and then
3. click the red cell to make it blue, what actually happens is the cell goes back to being gray!

Try to solve this bug to complete your creation! Here's our expected behavior:

* If you click a gray cell, it should turn the currently chosen color
* If you click a colored cell, and that cell's color is the currently chosen color, the cell should go back to being gray
* If you click a colored cell, and that cell's color is different than the currently chosen color, the cell should turn the currently chosen color

The hint below will offer a hint if you want more guidance. Good luck!

<details>
<summary>Solution</summary>
This problem is occurring because the logic in our `colorize` function is too simplistic - it only accounts for turning a color off/on based on whether there is a `className`. We need to actually check out the `className`'s value and make a decision about how to change it based on how it compares with the chosen color.
</details>
<br/>
<details>
<summary>Solution</summary>
<img src="https://learndotresources.s3.amazonaws.com/workshop/5a78dd00f8936400041bdb68/pixelate-11.png" />
</details>

## Extra Credit
### Finishing Touches
There's a finicky little issue that could happen if someone clicks the space between the table cells - we might end up coloring the `tr` or `table` in the background! We should be a bit more deliberate and make sure that we only change the background color of the target element if that target element is a 'td' element.

How can we tell what _kind_ of element the event target is?

<details>
<summary>Solution</summary>
Try checking out https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName
</details>

### Dragging To Paint
It can be tiresome to have to click each cell individually. Try to make it so that dragging the mouse over cells will "paint" them the specified color! You'll take advantage of [`"mouseup"`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseup_event), [`"mousedown"`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event) events, as well as the [`"mouseover"`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event) event.

### Additional Paint Tools
Trick out your editor by adding some common utilities! Here are some suggestions:

* Add the ability to fill the whole grid with one color
* Add the ability to fill any non-colored cells with one color
* Add the ability to clear the grid
* Add controls for the user to adjust the number of columns
* Add controls for the user add/remove rows and columns
