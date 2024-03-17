
# ReactLikeButton

![Difficulty: Easy](https://img.shields.io/badge/Difficulty-Easy-green)

Build a "like button" component using React 16. The component should be the default export (use <tt style="white-space:pre-wrap">export default</tt>).

Requirements:

<p><b><u></u></b><u>1. There should be a like button:<b></b></u></p>
<ul style="margin: 10px;padding: 0px;"><li>The content of the like button should be in the following format: "Like | 100", where 100 is the total number of likes.</li>
<li>It should have a <tt style="white-space:pre-wrap">"like-button"</tt> class.</li>
<li>Wrap the number of likes in a span with a <tt style="white-space:pre-wrap">"likes-counter"</tt> class.</li>
<li>The initial number of likes in the counter should be 100.</li>
</ul>

<p><b><u></u></b><u>2. Users can add a like. By clicking the button:<b></b></u></p>
<ul style="margin: 10px;padding: 0px;"><li>The number of likes should increase by one.</li>
<li>Like button should have <tt style="white-space:pre-wrap">"liked"</tt> class in addition to the <tt style="white-space:pre-wrap">"like-button"</tt> class (you can use the <tt style="white-space:pre-wrap">classnames</tt> tool for that).</li>
</ul>

<p><b><u></u></b><u>3. Users can undo their like by clicking again on the button:<b></b></u></p>
<ul style="margin: 10px;padding: 0px;"><li>The counter should decrease by one.</li>
<li><tt style="white-space:pre-wrap">"liked"</tt> class should be removed.</li>
</ul>


Assessment/Tools:

<ul style="margin: 10px;padding: 0px;"><li>Only two imports are allowed: <tt style="white-space:pre-wrap">react</tt> (v16.8.6) and <tt style="white-space:pre-wrap">classnames</tt> (v2.2.5). Both are at the top of the starting code.</li>
<li>Use the animation below as a reference for your solution.</li>
<li>Design/styling is not assessed and will not affect the score. You should focus only on implementing the requirements.</li>
<li>The "Preview" tab will display your component. You can use it for testing purposes.</li>
</ul>

<br>


        <video width="320" height="240" autoplay="" loop="">
          <source src="https://codility-frontend-prod.s3.amazonaws.com/media/task_static/react_like_button/90600904418523ec6dddb2864b40d5c7/static/videos/like_button.webm" type="video/webm">
<source src="https://codility-frontend-prod.s3.amazonaws.com/media/task_static/react_like_button/b0ffa9c4b3d3a8417230179e0001b999/static/videos/like_button.mp4" type="video/mp4">
        </video>
      

