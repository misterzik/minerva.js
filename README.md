# Minerva.js

Minerva.JS is a Simple and Elegant Carousel Slider Power by Javascript & jQuery. Super light-weight script made by Insanen Solutions back in 2007.

Minerva.js helps you wrap your images into a carousel gallery slider, and gives you the option to add navigation buttons through simple HTML markups.

Minerva.js includes elegant skin colors to choose from, the easiest and faster slider for your to-go projects.

Note: jQuery Required.

### Installation
1. Download source code and copy folder `src` to your project root folder.
2. Make the CSS & Javascript calls to load  script dependencies.

```
<link href="src/minerva.min.css" rel="stylesheet" />
<script src="src/minerva.min.js"></script>
```

### Usage
1. Let's create a wrapper's and container to keep our coding in place. (stylesheets included with source code.)
2. Let's run slider wrapper around our images that we want to slide through.
3. Let's Populate/Add as many images as we please by using simple HTML markups.
4. Let's create the dots ( . . . . . . ) wrapper effect under line, and then by adding `li`.
5. Depending on the images you add, You will have to add as many dots as needed.
6. Add Controllers markup.
7. Happy Coding

## Full Width
```
<div class="wrapper-minerva">
<div class="container-minerva">
  <ul id="slider-minerva">
    <li><img src="img/amazon.jpg" height="100%" alt="" /></li>
    <li><img src="img/galapagos.jpg" height="100%" alt="" /></li>
    <li><img src="img/guayaquil.jpg" height="100%" alt="" /></li>
    <li><img src="img/montanita.jpg" height="100%" alt="" /></li>
    <li><img src="img/portoviejo.jpg" height="100%" alt="" /></li>
  </ul>

  <ul id="dots-minerva">
    <li class="active"></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>

  <div class="" id="controllers-minerva">
  <button id="prev-minerva">Prev</button>
  <button id="next-minerva">Next</button>
  </div>
</div>
</div>

```
---
## Half Width
```
<div class="wrapper-minerva">
<div class="sm-container-minerva">
  <ul id="slider-minerva">
    <li><img src="img/amazon.jpg" height="100%" alt="" /></li>
    <li><img src="img/galapagos.jpg" height="100%" alt="" /></li>
    <li><img src="img/guayaquil.jpg" height="100%" alt="" /></li>
    <li><img src="img/montanita.jpg" height="100%" alt="" /></li>
    <li><img src="img/portoviejo.jpg" height="100%" alt="" /></li>
  </ul>

  <ul id="dots-minerva">
    <li class="active"></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>

  <div class="" id="controllers-minerva">
  <button id="prev-minerva">Prev</button>
  <button id="next-minerva">Next</button>
  </div>
</div>
</div>

```

Read more documentations @ http://misterzik.github.io/minerva.js/

### Authors and Contributors
In 2007, Nick Rodriguez (@misterzik), Insanen Solutions (@insanen), and ResolveDesign founded Minerva.JS as a playground script.
In Memory of Minerva V, Rest in peace my beautiful angel, I will never stop expressing your passion for art.
